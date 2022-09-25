"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use("/", (req, res, next) => {
    res.send("This is the express server");
});
app.get("/getServer", (req, res, next) => {
    res.send("This is the  response from the get request");
});
let port = 6060;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=expressServer.js.map