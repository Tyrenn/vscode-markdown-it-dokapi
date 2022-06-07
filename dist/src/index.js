"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const markdown_it_dokapi_1 = __importDefault(require("@tyren/markdown-it-dokapi"));
function activate() {
    return {
        extendMarkdownIt(md) {
            return md.use(markdown_it_dokapi_1.default);
        }
    };
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=index.js.map