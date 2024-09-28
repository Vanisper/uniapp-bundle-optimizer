"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.createBuildOptions = exports.buildOptions = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const debug_1 = __importDefault(require("debug"));
const uni_cli_shared_1 = require("@dcloudio/uni-cli-shared");
const entry_1 = require("../plugins/entry");
const debugChunk = (0, debug_1.default)('uni:chunk');
function buildOptions() {
    const platform = process.env.UNI_PLATFORM;
    const inputDir = process.env.UNI_INPUT_DIR;
    const outputDir = process.env.UNI_OUTPUT_DIR;
    // 开始编译时，清空输出目录
    if (fs_1.default.existsSync(outputDir)) {
        (0, uni_cli_shared_1.emptyDir)(outputDir, ['project.config.json', 'project.private.config.json']);
    }
    return createBuildOptions(inputDir, platform);
}
exports.buildOptions = buildOptions;
function createBuildOptions(inputDir, platform) {
    const { renderDynamicImport } = (0, uni_cli_shared_1.dynamicImportPolyfill)();
    return {
        // sourcemap: 'inline', // TODO
        // target: ['chrome53'], // 由小程序自己启用 es6 编译
        emptyOutDir: false, // 不清空输出目录，否则会影响自定义的一些文件输出，比如wxml
        lib: {
            // 必须使用 lib 模式，否则会生成 preload 等代码
            fileName: 'app.js',
            entry: (0, uni_cli_shared_1.resolveMainPathOnce)(inputDir),
            formats: ['cjs'],
        },
        rollupOptions: {
            input: parseRollupInput(inputDir, platform),
            output: {
                entryFileNames(chunk) {
                    if (chunk.name === 'main') {
                        return 'app.js';
                    }
                    return chunk.name + '.js';
                },
                format: 'cjs',
                manualChunks: createMoveToVendorChunkFn(),
                chunkFileNames: createChunkFileNames(inputDir),
                plugins: [
                    {
                        name: 'dynamic-import-polyfill',
                        renderDynamicImport(options) {
                            const { targetModuleId } = options;
                            if (targetModuleId && (0, uni_cli_shared_1.isMiniProgramAssetFile)(targetModuleId)) {
                                return {
                                    left: 'Promise.resolve(require(',
                                    right: '))',
                                };
                            }
                            return renderDynamicImport.call(this, options);
                        },
                    },
                ],
            },
        },
    };
}
exports.createBuildOptions = createBuildOptions;
function parseRollupInput(inputDir, platform) {
    const inputOptions = {
        app: (0, uni_cli_shared_1.resolveMainPathOnce)(inputDir),
    };
    if (process.env.UNI_MP_PLUGIN) {
        return inputOptions;
    }
    const manifestJson = (0, uni_cli_shared_1.parseManifestJsonOnce)(inputDir);
    const plugins = manifestJson[platform]?.plugins || {};
    Object.keys(plugins).forEach((name) => {
        const pluginExport = plugins[name].export;
        if (!pluginExport) {
            return;
        }
        const pluginExportFile = path_1.default.resolve(inputDir, pluginExport);
        if (!fs_1.default.existsSync(pluginExportFile)) {
            notFound(pluginExportFile);
        }
        inputOptions[(0, uni_cli_shared_1.removeExt)(pluginExport)] = pluginExportFile;
    });
    return inputOptions;
}
function isVueJs(id) {
    return id.includes('\0plugin-vue:export-helper');
}
const chunkFileNameBlackList = ['main', 'pages.json', 'manifest.json'];

// #region subpackage
const UNI_SUBPACKAGES = process.UNI_SUBPACKAGES || {};
const subPkgsInfo = Object.values(UNI_SUBPACKAGES);
const normalFilter = ({ independent }) => !independent;
const independentFilter = ({ independent }) => independent;
const map2Root = ({ root }) => root + '/';
const subPackageRoots = subPkgsInfo.map(map2Root);
const normalSubPackageRoots = subPkgsInfo.filter(normalFilter).map(map2Root);
const independentSubpackageRoots = subPkgsInfo.filter(independentFilter).map(map2Root);

// id处理器：将id中的moduleId转换为相对于inputDir的路径并去除查询参数后缀
function moduleIdProcessor(id) {
    let inputDir = (0, uni_cli_shared_1.normalizePath)(process.env.UNI_INPUT_DIR);
    // 确保inputDir以斜杠结尾
    if (!inputDir.endsWith('/')) {
        inputDir += '/';
    }

    const normalized = (0, uni_cli_shared_1.normalizePath)(id);
    const name = normalized.split('?')[0];
    // 从name中剔除inputDir前缀
    const updatedName = name.replace(inputDir, '');

    return updatedName;
}
// 查找模块列表中是否有属于子包的模块
const findSubPackages = function (importers) {
    return importers.reduce((pkgs, item) => {
        const pkgRoot = normalSubPackageRoots.find(root => moduleIdProcessor(item).indexOf(root) === 0);
        pkgRoot && pkgs.add(pkgRoot);
        return pkgs;
    }, new Set())
}
// 判断是否有主包(是否被主包引用)
const hasMainPackage = function (importers) {
    return importers.some(item => {
        return !subPackageRoots.some(root => moduleIdProcessor(item).indexOf(root) === 0);
    })
}
// 判断该模块引用的模块是否有跨包引用的组件
const hasMainPackageComponent = function (moduleInfo, subPackageRoot) {
    if (moduleInfo.id && moduleInfo.importedIdResolutions) {
        for (let index = 0; index < moduleInfo.importedIdResolutions.length; index++) {
            const m = moduleInfo.importedIdResolutions[index];
            
            if (m && m.id) {
                const name = moduleIdProcessor(m.id);
                // 判断是否为组件
                if (
                    name.indexOf('.vue') !== -1 ||
                    name.indexOf('.nvue') !== -1
                ) {
                    // 判断存在跨包引用的情况(该组件的引用路径不包含子包路径，就说明跨包引用了)
                    if (name.indexOf(subPackageRoot) === -1) {
                        if (process.env.UNI_OPT_TRACE) {
                            console.log('move module to main chunk:', moduleInfo.id,
                                'from', subPackageRoot, 'for component in main package:', name)
                        }

                        // 独立分包除外
                        const independentRoot = independentSubpackageRoots.find(root => name.indexOf(root) >= 0)
                        if (!independentRoot) {
                            return true
                        }
                    }
                } else {
                    return hasMainPackageComponent(m, subPackageRoot)
                }
            }
        }
    }
    return false;
}
// #endregion

function createMoveToVendorChunkFn() {
    const cache = new Map();
    const inputDir = (0, uni_cli_shared_1.normalizePath)(process.env.UNI_INPUT_DIR);
    const UNI_OPT_TRACE = process.env.UNI_OPT_TRACE === 'true' ? true : false;
    console.log('分包优化开启状态:', UNI_OPT_TRACE);
    return (id, { getModuleInfo }) => {
        const normalizedId = (0, uni_cli_shared_1.normalizePath)(id);
        const filename = normalizedId.split('?')[0];
        // 处理资源文件
        if (uni_cli_shared_1.DEFAULT_ASSETS_RE.test(filename)) {
            debugChunk('common/assets', normalizedId);
            return 'common/assets';
        }
        // 处理项目内的js,ts文件
        if (uni_cli_shared_1.EXTNAME_JS_RE.test(filename)) {
            if (filename.startsWith(inputDir) && !filename.includes('node_modules')) {
                const chunkFileName = (0, uni_cli_shared_1.removeExt)((0, uni_cli_shared_1.normalizePath)(path_1.default.relative(inputDir, filename)));
                if (!chunkFileNameBlackList.includes(chunkFileName) &&
                    !(0, uni_cli_shared_1.hasJsonFile)(chunkFileName) // 无同名的page,component
                ) {
                    debugChunk(chunkFileName, normalizedId);
                    return chunkFileName;
                }
                return;
            }
            // ！！！ 以下代码是分包优化的核心逻辑
            if (UNI_OPT_TRACE) {
                // 如果这个资源只属于一个子包，并且其调用组件的不存在跨包调用的情况，那么这个模块就会被加入到对应的子包中。
                const moduleInfo = getModuleInfo(id) || {};
                const importers = moduleInfo.importers || []; // 依赖当前模块的模块id
                const matchSubPackages = findSubPackages(importers);
                if (
                    matchSubPackages.size === 1 &&
                    !hasMainPackage(importers) &&
                    !hasMainPackageComponent(moduleInfo, matchSubPackages.values().next().value)
                ) {
                    debugChunk(`${matchSubPackages.values().next().value}common/vendor`, normalizedId);
                    return `${matchSubPackages.values().next().value}common/vendor`;
                }
            }
            // 非项目内的 js 资源，均打包到 vendor
            debugChunk('common/vendor', normalizedId);
            return 'common/vendor';
        }
        if (isVueJs(normalizedId) ||
            (normalizedId.includes('node_modules') &&
                !(0, uni_cli_shared_1.isCSSRequest)(normalizedId) &&
                // 使用原始路径，格式化的可能找不到模块信息 https://github.com/dcloudio/uni-app/issues/3425
                staticImportedByEntry(id, getModuleInfo, cache))) {
            debugChunk('common/vendor', id);
            return 'common/vendor';
        }
    };
}
function staticImportedByEntry(id, getModuleInfo, cache, importStack = []) {
    if (cache.has(id)) {
        return cache.get(id);
    }
    if (importStack.includes(id)) {
        // circular deps!
        cache.set(id, false);
        return false;
    }
    const mod = getModuleInfo(id);
    if (!mod) {
        cache.set(id, false);
        return false;
    }
    if (mod.isEntry) {
        cache.set(id, true);
        return true;
    }
    const someImporterIs = mod.importers.some((importer) => staticImportedByEntry(importer, getModuleInfo, cache, importStack.concat(id)));
    cache.set(id, someImporterIs);
    return someImporterIs;
}
function createChunkFileNames(inputDir) {
    return function chunkFileNames(chunk) {
        if (chunk.isDynamicEntry && chunk.facadeModuleId) {
            let id = chunk.facadeModuleId;
            if ((0, entry_1.isUniPageUrl)(id)) {
                id = path_1.default.resolve(process.env.UNI_INPUT_DIR, (0, entry_1.parseVirtualPagePath)(id));
            }
            else if ((0, entry_1.isUniComponentUrl)(id)) {
                id = path_1.default.resolve(process.env.UNI_INPUT_DIR, (0, entry_1.parseVirtualComponentPath)(id));
            }
            return (0, uni_cli_shared_1.removeExt)((0, uni_cli_shared_1.normalizeMiniProgramFilename)(id, inputDir)) + '.js';
        }
        return '[name].js';
    };
}
function notFound(filename) {
    console.log();
    console.error(uni_cli_shared_1.M['file.notfound'].replace('{file}', filename));
    console.log();
    process.exit(0);
}
exports.notFound = notFound;
