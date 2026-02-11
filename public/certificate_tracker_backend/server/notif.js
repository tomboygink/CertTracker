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
exports.notif = notif;
var Cert_1 = require("../../config/db/Cert");
var Notification_1 = require("../../config/db/Notification");
function notif() {
    return __awaiter(this, void 0, void 0, function () {
        var c, data, i, titlenotif, msgnotif, datecreatenotif, body, n;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    c = new Cert_1.Cert(null);
                    return [4, c.CheckAll()];
                case 1:
                    data = _a.sent();
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < data.length)) return [3, 6];
                    titlenotif = 'Внимание';
                    msgnotif = '';
                    if (data[i].statuscert_id === "1") {
                        return [3, 5];
                    }
                    else if (data[i].statuscert_id === "2") {
                        msgnotif += 'У сертификата ' + String(data[i].certname) + ' истекает срок действия';
                    }
                    else if (data[i].statuscert_id === "3") {
                        msgnotif += 'У сертификата ' + String(data[i].certname) + ' просрочен срок действия';
                    }
                    datecreatenotif = new Date();
                    body = {
                        titlenotif: titlenotif,
                        msgnotif: msgnotif,
                        datecreatenotif: datecreatenotif
                    };
                    n = new Notification_1.Notification(body);
                    return [4, n.Add()];
                case 3:
                    _a.sent();
                    return [4, n.sendMail()];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    i++;
                    return [3, 2];
                case 6: return [2];
            }
        });
    });
}
//# sourceMappingURL=notif.js.map