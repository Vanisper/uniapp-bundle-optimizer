"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const uni_cli_shared_1 = require("@dcloudio/uni-cli-shared");
const platform = process.env.UNI_PLATFORM;
const inputDir = process.env.UNI_INPUT_DIR;

// #region 分包优化参数获取
const manifestJson = (0, uni_cli_shared_1.parseManifestJsonOnce)(inputDir);
const platformOptions = manifestJson[platform] || {};
const optimization = platformOptions.optimization || {};
process.env.UNI_OPT_TRACE = !!optimization.subPackages;

const pagesJsonPath = path_1.default.resolve(inputDir, 'pages.json');
const jsonStr = fs_1.readFileSync(pagesJsonPath, 'utf8');
const { appJson } = (0, uni_cli_shared_1.parseMiniProgramPagesJson)(jsonStr, platform, { subpackages: true });
process.UNI_SUBPACKAGES = appJson.subPackages || {};
// #endregion