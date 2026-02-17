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
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = router;
var Users_1 = require("../../config/db/Users");
var UserAccess_1 = require("../../config/db/UserAccess");
var WorkPosition_1 = require("../../config/db/WorkPosition");
var Dept_1 = require("../../config/db/Dept");
var CategoryCert_1 = require("../../config/db/CategoryCert");
var StatusCert_1 = require("../../config/db/StatusCert");
var Cert_1 = require("../../config/db/Cert");
var Events_1 = require("../../config/db/Events");
var Notification_1 = require("../../config/db/Notification");
var NotificationReads_1 = require("../../config/db/NotificationReads");
var jwt_1 = require("../../config/func/jwt");
function router(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var body, data, _a, u, token_1, token, decoded, u, u, u, u, ua, wp, wp, wp, d, d, d, cc, cc, cc, sc, c, c, c, c, c, ev, n, nr;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    body = req.body;
                    console.log(body);
                    _a = body.cmd;
                    switch (_a) {
                        case "Auth": return [3, 1];
                        case "GetUser": return [3, 3];
                        case "Logout": return [3, 5];
                        case "AddUser": return [3, 6];
                        case "ChangeUser": return [3, 8];
                        case "AllUsers": return [3, 10];
                        case "AllAccess": return [3, 12];
                        case "AddWorkPosition": return [3, 14];
                        case "ChangeWorkPosition": return [3, 16];
                        case "AllWorkPosition": return [3, 18];
                        case "AddDept": return [3, 20];
                        case "ChangeDept": return [3, 22];
                        case "AllDept": return [3, 24];
                        case "AddCategoryCert": return [3, 26];
                        case "ChangeCategoryCert": return [3, 28];
                        case "AllCategoryCert": return [3, 30];
                        case "AllStatusCert": return [3, 32];
                        case "AddCert": return [3, 34];
                        case "ChangeCert": return [3, 36];
                        case "ArchiveCert": return [3, 38];
                        case "AllCert": return [3, 40];
                        case "Docs": return [3, 42];
                        case "AllEvents": return [3, 44];
                        case "AllNotif": return [3, 46];
                        case "NotifRead": return [3, 48];
                    }
                    return [3, 50];
                case 1:
                    u = new Users_1.Users(body.args);
                    return [4, u.Auth()];
                case 2:
                    data = _c.sent();
                    if (!data || data.length === 0) {
                        return [2, buildResponse(body.cmd, null, "Ошибка авторизации")];
                    }
                    token_1 = (0, jwt_1.generateToken)(data[0]);
                    res.cookie("access_token", token_1, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === "production",
                        sameSite: "lax",
                        maxAge: 1000 * 60 * 60
                    });
                    return [2, buildResponse(body.cmd, data, null)];
                case 3:
                    token = (_b = req.cookies) === null || _b === void 0 ? void 0 : _b.access_token;
                    if (!token) {
                        return [2, buildResponse(body.cmd, null, "Пользователь не авторизован")];
                    }
                    decoded = (0, jwt_1.verifyToken)(token);
                    u = new Users_1.Users(decoded.id);
                    return [4, u.GetUser()];
                case 4:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, null)];
                case 5:
                    {
                        res.clearCookie("access_token", {
                            httpOnly: true,
                            secure: process.env.NODE_ENV === "production",
                            sameSite: "lax"
                        });
                        data = [{ "logout": true }];
                        return [2, buildResponse(body.cmd, data, null)];
                    }
                    _c.label = 6;
                case 6:
                    u = new Users_1.Users(body.args);
                    return [4, u.Add()];
                case 7:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка добавления пользователя")];
                case 8:
                    u = new Users_1.Users(body.args);
                    return [4, u.Update()];
                case 9:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка обновления данных пользователя")];
                case 10:
                    u = new Users_1.Users(body.args);
                    return [4, u.All()];
                case 11:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения пользователей")];
                case 12:
                    ua = new UserAccess_1.UserAccess(body.args);
                    return [4, ua.All()];
                case 13:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения уровней доступа")];
                case 14:
                    wp = new WorkPosition_1.WorkPosition(body.args);
                    return [4, wp.Add()];
                case 15:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка добавления должности")];
                case 16:
                    wp = new WorkPosition_1.WorkPosition(body.args);
                    return [4, wp.Update()];
                case 17:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка изменения должности")];
                case 18:
                    wp = new WorkPosition_1.WorkPosition(body.args);
                    return [4, wp.All()];
                case 19:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения должностей")];
                case 20:
                    d = new Dept_1.Dept(body.args);
                    return [4, d.Add()];
                case 21:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка добавления отдела")];
                case 22:
                    d = new Dept_1.Dept(body.args);
                    return [4, d.Update()];
                case 23:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка изменения отдела")];
                case 24:
                    d = new Dept_1.Dept(body.args);
                    return [4, d.All()];
                case 25:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения отделов")];
                case 26:
                    cc = new CategoryCert_1.CategoryCert(body.args);
                    return [4, cc.Add()];
                case 27:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка добавления категории")];
                case 28:
                    cc = new CategoryCert_1.CategoryCert(body.args);
                    return [4, cc.Update()];
                case 29:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка изменения категории")];
                case 30:
                    cc = new CategoryCert_1.CategoryCert(body.args);
                    return [4, cc.All()];
                case 31:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения категорий")];
                case 32:
                    sc = new StatusCert_1.StatusCert(body.args);
                    return [4, sc.All()];
                case 33:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения статусов сертификата")];
                case 34:
                    c = new Cert_1.Cert(body.args);
                    return [4, c.Add()];
                case 35:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка добавления сертификата")];
                case 36:
                    c = new Cert_1.Cert(body.args);
                    return [4, c.Update()];
                case 37:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка изменения сертификата")];
                case 38:
                    c = new Cert_1.Cert(body.args);
                    return [4, c.ArchiveCert()];
                case 39:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка изменения сертификата")];
                case 40:
                    c = new Cert_1.Cert(body.args);
                    return [4, c.All()];
                case 41:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения сертификатов")];
                case 42:
                    c = new Cert_1.Cert(body.args);
                    return [4, c.Docs()];
                case 43:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения документа")];
                case 44:
                    ev = new Events_1.Events(body.args);
                    return [4, ev.All()];
                case 45:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения событий")];
                case 46:
                    n = new Notification_1.Notification(body.args);
                    return [4, n.All()];
                case 47:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения уведомлений")];
                case 48:
                    nr = new NotificationReads_1.NotificationReads(body.args);
                    return [4, nr.Add()];
                case 49:
                    data = _c.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка прочтения уведомления")];
                case 50:
                    {
                        return [2, buildResponse(body.cmd, data, data ? null : "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \"".concat(body.cmd, "\" \u043D\u0435 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u0430"))];
                    }
                    _c.label = 51;
                case 51: return [2];
            }
        });
    });
}
function buildResponse(cmd, data, err) {
    if (data === void 0) { data = null; }
    if (err === void 0) { err = null; }
    return JSON.stringify({
        cmd: cmd,
        data: data !== null && data !== void 0 ? data : null,
        err: err,
    });
}
//# sourceMappingURL=router.js.map