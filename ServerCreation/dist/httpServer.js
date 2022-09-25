"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    res.write("This  is the response from the server");
    res.end();
});
let port = 3000;
server.listen((port), () => {
    console.log(`server is running on port ${port}`);
});
exports.default = server;
//# sourceMappingURL=httpServer.js.map