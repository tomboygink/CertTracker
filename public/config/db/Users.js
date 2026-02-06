"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
var DBase_1 = require("./DBase");
var jwt_1 = require("../func/jwt");
var crypto_1 = __importDefault(require("crypto"));
var config_json_1 = __importDefault(require("../config.json"));
var Users = (function () {
    function Users(_args) {
        this.db = (0, DBase_1.getDB)();
        this.args = _args;
    }
    Users.prototype.Auth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pass, db_res, token, decoded, db_res_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.args.auth === "not_jwt")) return [3, 3];
                        pass = crypto_1.default.createHmac('sha256', config_json_1.default.crypto_code).update(this.args.password).digest('hex');
                        return [4, this.db.query("SELECT id, lastname, firstname, avatar, access_id, email, sendmail, workposition_id, deleted FROM users " +
                                "WHERE login = '" + this.args.login + "' AND password = '" + pass + "'")];
                    case 1: return [4, (_a.sent()).rows];
                    case 2:
                        db_res = _a.sent();
                        if (!db_res || db_res.length === 0) {
                            return [2, null];
                        }
                        token = (0, jwt_1.generateToken)(db_res[0]);
                        return [2, {
                                id: db_res[0].id,
                                lastname: db_res[0].lastname,
                                firstname: db_res[0].firstname,
                                avatar: db_res[0].avatar,
                                access_id: db_res[0].access_id,
                                email: db_res[0].email,
                                sendmail: db_res[0].sendmail,
                                workposition_id: db_res[0].workposition_id,
                                deleted: db_res[0].deleted,
                                token: token
                            }];
                    case 3:
                        if (!(this.args.auth === "jwt")) return [3, 8];
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 7, , 8]);
                        decoded = (0, jwt_1.verifyToken)(this.args.token);
                        return [4, this.db.query("SELECT lastname, firstname, avatar, access_id, email, sendmail, workposition_id, deleted FROM users " +
                                "WHERE id = " + decoded.id + " AND deleted = false")];
                    case 5: return [4, (_a.sent()).rows];
                    case 6:
                        db_res_1 = _a.sent();
                        if (!db_res_1 || db_res_1.length === 0) {
                            return [2, null];
                        }
                        return [2, {
                                user: db_res_1[0]
                            }];
                    case 7:
                        e_1 = _a.sent();
                        return [2, null];
                    case 8: return [2];
                }
            });
        });
    };
    return Users;
}());
exports.Users = Users;
//# sourceMappingURL=Users.js.map