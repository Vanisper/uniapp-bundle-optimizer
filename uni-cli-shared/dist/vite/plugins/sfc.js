"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniViteSfcSrcImportPlugin = exports.isSrcImportVue = exports.isSrcImport = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const magic_string_1 = __importDefault(require("magic-string"));
const vue_1 = require("../../vue");
const utils_1 = require("../utils");
const preprocess_1 = require("../../preprocess");
const SRC_IMPORT_RE = /<(template|script|style)[^>]*src\s*=\s*["']([^"']+)["'][^>]*>/;
const SRC_IMPORT_VUE_RE = /<(template|script|style)[^>]*src\s*=\s*["'](.*\.uvue|.*\.vue)["'][^>]*>/;
function isSrcImport(code) {
    return SRC_IMPORT_RE.test(code);
}
exports.isSrcImport = isSrcImport;
function isSrcImportVue(code) {
    return SRC_IMPORT_VUE_RE.test(code);
}
exports.isSrcImportVue = isSrcImportVue;
function uniViteSfcSrcImportPlugin({ onlyVue } = { onlyVue: true }) {
    const { parse } = require('@vue/compiler-sfc');
    const hasImport = onlyVue ? isSrcImportVue : isSrcImport;
    const isValidSrc = onlyVue ? vue_1.isVueSfcFile : () => true;
    return {
        name: 'uni:sfc-src-import',
        async transform(code, id) {
            if (!(0, vue_1.isVueSfcFile)(id)) {
                return;
            }
            if (!hasImport(code)) {
                return;
            }
            const s = new magic_string_1.default(code);
            const sourceMap = process.env.NODE_ENV === 'development';
            const createDescriptor = (filename, code, from) => {
                if (from === 'vue' || (0, vue_1.isVueSfcFile)(filename)) {
                    const { descriptor, errors } = parse(code, {
                        filename,
                        sourceMap,
                    });
                    errors.forEach((error) => this.error((0, utils_1.createRollupError)('', filename, error, code)));
                    return descriptor;
                }
                else {
                    const descriptor = {
                        filename,
                        source: fs_extra_1.default.readFileSync(filename, 'utf-8'),
                        template: null,
                        script: null,
                        scriptSetup: null,
                        styles: [],
                        customBlocks: [],
                    };
                    if (from === 'template') {
                        descriptor.template = {
                            content: descriptor.source,
                        };
                    }
                    else if (from === 'script') {
                        descriptor.script = {
                            content: descriptor.source,
                        };
                    }
                    else if (from === 'style') {
                        descriptor.styles = [
                            {
                                content: descriptor.source,
                            },
                        ];
                    }
                    return descriptor;
                }
            };
            const descriptor = createDescriptor(id, code, 'vue');
            const cache = new Map();
            const getSrcDescriptor = async (src, from) => {
                if (cache.has(src)) {
                    return cache.get(src);
                }
                const resolved = await this.resolve(src, descriptor.filename);
                if (resolved) {
                    const filename = resolved.id;
                    const srcDescriptor = createDescriptor(filename, (0, preprocess_1.preUVueJs)((0, preprocess_1.preUVueHtml)(fs_extra_1.default.readFileSync(filename, 'utf-8'))), from);
                    cache.set(src, srcDescriptor);
                    this.addWatchFile(filename);
                    return srcDescriptor;
                }
            };
            if (descriptor.template?.src && isValidSrc(descriptor.template.src)) {
                const srcDescriptor = await getSrcDescriptor(descriptor.template.src, 'template');
                if (srcDescriptor && srcDescriptor.template?.content) {
                    overwriteContent(s, descriptor.template.loc, srcDescriptor.template.content);
                }
            }
            if (descriptor.script?.src && isValidSrc(descriptor.script.src)) {
                const srcDescriptor = await getSrcDescriptor(descriptor.script.src, 'script');
                if (srcDescriptor && srcDescriptor.script?.content) {
                    overwriteContent(s, descriptor.script.loc, srcDescriptor.script.content);
                }
            }
            for (const style of descriptor.styles) {
                if (style.src && isValidSrc(style.src)) {
                    const srcDescriptor = await getSrcDescriptor(style.src, 'style');
                    if (srcDescriptor && srcDescriptor.styles[0]) {
                        overwriteContent(s, style.loc, srcDescriptor.styles[0].content);
                    }
                }
            }
            if (!s.hasChanged()) {
                return;
            }
            // 移除所有的 src 属性
            const regex = /(<(template|script|style)[^>]*)src\s*=\s*["']([^"']+)["']([^>]*>)/g;
            let match;
            while ((match = regex.exec(code))) {
                const [_, start, _tag, _src, end] = match;
                s.overwrite(match.index, match.index + _.length, `${start}${end}`);
            }
            return {
                code: s.toString(),
                map: sourceMap ? s.generateMap({ hires: true }) : { mappings: '' },
            };
        },
    };
}
exports.uniViteSfcSrcImportPlugin = uniViteSfcSrcImportPlugin;
function overwriteContent(s, loc, content) {
    if (loc.start.offset === loc.end.offset) {
        s.appendRight(loc.start.offset, content);
    }
    else {
        s.overwrite(loc.start.offset, loc.end.offset, content);
    }
}