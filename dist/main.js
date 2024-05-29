"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const appServer_1 = require("./presentation/appServer");
async function main() {
    await appServer_1.AppServer.run(5000);
}
exports.main = main;
main();
//# sourceMappingURL=main.js.map