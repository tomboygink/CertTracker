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
function router(body) {
    return __awaiter(this, void 0, void 0, function () {
        var data, _a, u, u, u, u, ua, wp, wp, wp, d, d, d, cc, cc, cc, sc, c, c, c, c, c, ev, n;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log(body);
                    _a = body.cmd;
                    switch (_a) {
                        case "Auth": return [3, 1];
                        case "AddUser": return [3, 3];
                        case "ChangeUser": return [3, 5];
                        case "AllUsers": return [3, 7];
                        case "AllAccess": return [3, 9];
                        case "AddWorkPosition": return [3, 11];
                        case "ChangeWorkPosition": return [3, 13];
                        case "AllWorkPosition": return [3, 15];
                        case "AddDept": return [3, 17];
                        case "ChangeDept": return [3, 19];
                        case "AllDept": return [3, 21];
                        case "AddCategoryCert": return [3, 23];
                        case "ChangeCategoryCert": return [3, 25];
                        case "AllCategoryCert": return [3, 27];
                        case "AllStatusCert": return [3, 29];
                        case "AddCert": return [3, 31];
                        case "ChangeCert": return [3, 33];
                        case "ArchiveCert": return [3, 35];
                        case "AllCert": return [3, 37];
                        case "Docs": return [3, 39];
                        case "AllEvents": return [3, 41];
                        case "AllNotif": return [3, 43];
                    }
                    return [3, 45];
                case 1:
                    u = new Users_1.Users(body.args);
                    return [4, u.Auth()];
                case 2:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка авторизации")];
                case 3:
                    u = new Users_1.Users(body.args);
                    return [4, u.Add()];
                case 4:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка добавления пользователя")];
                case 5:
                    u = new Users_1.Users(body.args);
                    return [4, u.Update()];
                case 6:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка обновления данных пользователя")];
                case 7:
                    u = new Users_1.Users(body.args);
                    return [4, u.All()];
                case 8:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения пользователей")];
                case 9:
                    ua = new UserAccess_1.UserAccess(body.args);
                    return [4, ua.All()];
                case 10:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения уровней доступа")];
                case 11:
                    wp = new WorkPosition_1.WorkPosition(body.args);
                    return [4, wp.Add()];
                case 12:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка добавления должности")];
                case 13:
                    wp = new WorkPosition_1.WorkPosition(body.args);
                    return [4, wp.Update()];
                case 14:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка изменения должности")];
                case 15:
                    wp = new WorkPosition_1.WorkPosition(body.args);
                    return [4, wp.All()];
                case 16:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения должностей")];
                case 17:
                    d = new Dept_1.Dept(body.args);
                    return [4, d.Add()];
                case 18:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка добавления отдела")];
                case 19:
                    d = new Dept_1.Dept(body.args);
                    return [4, d.Update()];
                case 20:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка изменения отдела")];
                case 21:
                    d = new Dept_1.Dept(body.args);
                    return [4, d.All()];
                case 22:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения отделов")];
                case 23:
                    cc = new CategoryCert_1.CategoryCert(body.args);
                    return [4, cc.Add()];
                case 24:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка добавления категории")];
                case 25:
                    cc = new CategoryCert_1.CategoryCert(body.args);
                    return [4, cc.Update()];
                case 26:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка изменения категории")];
                case 27:
                    cc = new CategoryCert_1.CategoryCert(body.args);
                    return [4, cc.All()];
                case 28:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения категорий")];
                case 29:
                    sc = new StatusCert_1.StatusCert(body.args);
                    return [4, sc.All()];
                case 30:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения статусов сертификата")];
                case 31:
                    c = new Cert_1.Cert(body.args);
                    return [4, c.Add()];
                case 32:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка добавления сертификата")];
                case 33:
                    c = new Cert_1.Cert(body.args);
                    return [4, c.Update()];
                case 34:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка изменения сертификата")];
                case 35:
                    c = new Cert_1.Cert(body.args);
                    return [4, c.ArchiveCert()];
                case 36:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка изменения сертификата")];
                case 37:
                    c = new Cert_1.Cert(body.args);
                    return [4, c.All()];
                case 38:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения сертификатов")];
                case 39:
                    c = new Cert_1.Cert(body.args);
                    return [4, c.Docs()];
                case 40:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения документа")];
                case 41:
                    ev = new Events_1.Events(body.args);
                    return [4, ev.All()];
                case 42:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения событий")];
                case 43:
                    n = new Notification_1.Notification(body.args);
                    return [4, n.All()];
                case 44:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка получения уведомлений")];
                case 45:
                    {
                        return [2, buildResponse(body.cmd, data, data ? null : "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \"".concat(body.cmd, "\" \u043D\u0435 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u0430"))];
                    }
                    _b.label = 46;
                case 46: return [2];
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