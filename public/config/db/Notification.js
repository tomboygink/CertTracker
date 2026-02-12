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
exports.Notification = void 0;
var DBase_1 = require("./DBase");
var nodemailer_1 = __importDefault(require("nodemailer"));
var config_json_1 = __importDefault(require("../config.json"));
var DateStr_1 = require("./DateStr");
var Users_1 = require("./Users");
var Notification = (function () {
    function Notification(_args) {
        this.transporter = nodemailer_1.default.createTransport({
            host: config_json_1.default.config_mail.host,
            port: config_json_1.default.config_mail.port,
            secure: config_json_1.default.config_mail.secure,
            auth: {
                user: config_json_1.default.config_mail.auth.user,
                pass: config_json_1.default.config_mail.auth.pass
            },
        });
        this.db = (0, DBase_1.getDB)();
        this.args = _args;
    }
    Notification.prototype.Add = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.db.query("INSERT INTO notification (titlenotif, msgnotif, datecreatenotif) " +
                            "VALUES ('" + this.args.titlenotif + "', '" + this.args.msgnotif + "', '" + (0, DateStr_1.dateTimeToSQL)(this.args.datecreatenotif) + "')")];
                    case 1: return [4, (_a.sent())];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Notification.prototype.All = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db_res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.db.query("SELECT notification.id, notification.titlenotif, notification.msgnotif, notification.datecreatenotif FROM notification " +
                            "LEFT JOIN notificationreads ON notification.id = notificationreads.notification_id AND notificationreads.user_id = " + this.args.user_id + " WHERE notificationreads.notification_id IS NULL")];
                    case 1: return [4, (_a.sent()).rows];
                    case 2:
                        db_res = _a.sent();
                        if (!db_res || db_res.length === 0)
                            return [2, null];
                        return [2, db_res];
                }
            });
        });
    };
    Notification.prototype.sendMail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var u, data, mail, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        u = new Users_1.Users("");
                        return [4, u.AllEMail()];
                    case 1:
                        data = _a.sent();
                        mail = [];
                        for (i = 0; i < data.length; i++) {
                            mail.push(data[i].email);
                        }
                        return [4, this.transporter.sendMail({
                                from: config_json_1.default.config_mail.auth.user,
                                to: mail,
                                subject: this.args.titlenotif,
                                html: this.args.msgnotif
                            })];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return Notification;
}());
exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map