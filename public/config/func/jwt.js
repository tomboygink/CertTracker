"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = generateToken;
exports.verifyToken = verifyToken;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_json_1 = __importDefault(require("../config.json"));
var JWT_SEC = config_json_1.default.code_time.code;
var JWT_OPTIONS = { expiresIn: config_json_1.default.code_time.time };
function generateToken(user) {
    return jsonwebtoken_1.default.sign({
        id: user.id,
        login: user.login,
        access_id: user.access_id
    }, JWT_SEC, JWT_OPTIONS);
}
function verifyToken(token) {
    return jsonwebtoken_1.default.verify(token, JWT_SEC);
}
//# sourceMappingURL=jwt.js.map