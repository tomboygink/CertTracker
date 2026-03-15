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
var token_1 = require("./token");
function router(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var body, data, _a, u, token, decoded, u, _b, u, u, u, ua, wp, wp, wp, d, d, d, cc, cc, cc, sc, c, c, c, c, c, ev, n, nr;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    body = req.body;
                    console.log(body);
                    _a = body.cmd;
                    switch (_a) {
                        case "Auth": return [3, 1];
                        case "GetUser": return [3, 3];
                        case "Logout": return [3, 7];
                        case "AddUser": return [3, 8];
                        case "ChangeUser": return [3, 10];
                        case "AllUsers": return [3, 12];
                        case "AllAccess": return [3, 14];
                        case "AddWorkPosition": return [3, 16];
                        case "ChangeWorkPosition": return [3, 18];
                        case "AllWorkPosition": return [3, 20];
                        case "AddDept": return [3, 22];
                        case "ChangeDept": return [3, 24];
                        case "AllDept": return [3, 26];
                        case "AddCategoryCert": return [3, 28];
                        case "ChangeCategoryCert": return [3, 30];
                        case "AllCategoryCert": return [3, 32];
                        case "AllStatusCert": return [3, 34];
                        case "AddCert": return [3, 36];
                        case "ChangeCert": return [3, 38];
                        case "ArchiveCert": return [3, 40];
                        case "AllCert": return [3, 42];
                        case "Docs": return [3, 44];
                        case "AllEvents": return [3, 46];
                        case "AllNotif": return [3, 48];
                        case "NotifRead": return [3, 50];
                    }
                    return [3, 52];
                case 1:
                    u = new Users_1.Users(body.args);
                    return [4, u.Auth()];
                case 2:
                    data = _d.sent();
                    if (!data || data.length === 0) {
                        return [2, buildResponse(body.cmd, null, "Ошибка авторизации")];
                    }
                    (0, token_1.add_token)(data, res);
                    return [2, buildResponse(body.cmd, data, null)];
                case 3:
                    token = (_c = req.cookies) === null || _c === void 0 ? void 0 : _c.access_token;
                    if (!token) {
                        return [2, buildResponse(body.cmd, null, "no_token")];
                    }
                    _d.label = 4;
                case 4:
                    _d.trys.push([4, 6, , 7]);
                    decoded = (0, token_1.verif_token)(token);
                    console.log(decoded);
                    u = new Users_1.Users(decoded.id);
                    return [4, u.GetUser()];
                case 5:
                    data = _d.sent();
                    console.log(data[0].deleted);
                    if (data[0].deleted === true) {
                        return [2, buildResponse(body.cmd, null, "user_blocked")];
                    }
                    console.log("user ok");
                    return [2, buildResponse(body.cmd, data, null)];
                case 6:
                    _b = _d.sent();
                    data = null;
                    return [2, buildResponse(body.cmd, null, "token_invalid")];
                case 7:
                    {
                        (0, token_1.delete_token)(res);
                        data = [{ "logout": true }];
                        return [2, buildResponse(body.cmd, data, null)];
                    }
                    _d.label = 8;
                case 8:
                    u = new Users_1.Users(body.args);
                    return [4, u.Add()];
                case 9:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка добавления пользователя")];
                case 10:
                    u = new Users_1.Users(body.args);
                    return [4, u.Update()];
                case 11:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка обновления данных пользователя")];
                case 12:
                    u = new Users_1.Users(body.args);
                    return [4, u.All()];
                case 13:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения пользователей")];
                case 14:
                    ua = new UserAccess_1.UserAccess(body.args);
                    return [4, ua.All()];
                case 15:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения уровней доступа")];
                case 16:
                    wp = new WorkPosition_1.WorkPosition(body.args);
                    return [4, wp.Add()];
                case 17:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка добавления должности")];
                case 18:
                    wp = new WorkPosition_1.WorkPosition(body.args);
                    return [4, wp.Update()];
                case 19:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка изменения должности")];
                case 20:
                    wp = new WorkPosition_1.WorkPosition(body.args);
                    return [4, wp.All()];
                case 21:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения должностей")];
                case 22:
                    d = new Dept_1.Dept(body.args);
                    return [4, d.Add()];
                case 23:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка добавления отдела")];
                case 24:
                    d = new Dept_1.Dept(body.args);
                    return [4, d.Update()];
                case 25:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка изменения отдела")];
                case 26:
                    d = new Dept_1.Dept(body.args);
                    return [4, d.All()];
                case 27:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения отделов")];
                case 28:
                    cc = new CategoryCert_1.CategoryCert(body.args);
                    return [4, cc.Add()];
                case 29:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка добавления категории")];
                case 30:
                    cc = new CategoryCert_1.CategoryCert(body.args);
                    return [4, cc.Update()];
                case 31:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка изменения категории")];
                case 32:
                    cc = new CategoryCert_1.CategoryCert(body.args);
                    return [4, cc.All()];
                case 33:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения категорий")];
                case 34:
                    sc = new StatusCert_1.StatusCert(body.args);
                    return [4, sc.All()];
                case 35:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения статусов сертификата")];
                case 36:
                    c = new Cert_1.Cert(body.args);
                    return [4, c.Add()];
                case 37:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка добавления сертификата")];
                case 38:
                    c = new Cert_1.Cert(body.args);
                    return [4, c.Update()];
                case 39:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка изменения сертификата")];
                case 40:
                    c = new Cert_1.Cert(body.args);
                    return [4, c.ArchiveCert()];
                case 41:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка изменения сертификата")];
                case 42:
                    c = new Cert_1.Cert(body.args);
                    return [4, c.All()];
                case 43:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения сертификатов")];
                case 44:
                    c = new Cert_1.Cert(body.args);
                    return [4, c.Docs()];
                case 45:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения документа")];
                case 46:
                    ev = new Events_1.Events(body.args);
                    return [4, ev.All()];
                case 47:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения событий")];
                case 48:
                    n = new Notification_1.Notification(body.args);
                    return [4, n.All()];
                case 49:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения уведомлений")];
                case 50:
                    nr = new NotificationReads_1.NotificationReads(body.args);
                    return [4, nr.Add()];
                case 51:
                    data = _d.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка прочтения уведомления")];
                case 52:
                    {
                        return [2, buildResponse(body.cmd, data, data ? null : "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \"".concat(body.cmd, "\" \u043D\u0435 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u0430"))];
                    }
                    _d.label = 53;
                case 53: return [2];
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