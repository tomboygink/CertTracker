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
var DBase_1 = require("../../config/db/DBase");
var config_json_1 = __importDefault(require("../../config/config.json"));
var createdb_1 = require("./sql/createdb");
var workPosition_1 = require("./sql/workPosition");
var users_1 = require("./sql/users");
var userAccesses_1 = require("./sql/userAccesses");
var statusCert_1 = require("./sql/statusCert");
var notificationReads_1 = require("./sql/notificationReads");
var notification_1 = require("./sql/notification");
var events_1 = require("./sql/events");
var dept_1 = require("./sql/dept");
var cert_1 = require("./sql/cert");
var categoryCert_1 = require("./sql/categoryCert");
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var db;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Запуск установщика");
                    console.log("Создание базы данных " + config_json_1.default.config_db.database);
                    return [4, (0, createdb_1.create_db)()];
                case 1:
                    _a.sent();
                    console.log("База данных успешно создана");
                    db = (0, DBase_1.getDB)();
                    console.log("Создание таблиц");
                    return [4, db.query(workPosition_1.workPosition_table.sql)];
                case 2:
                    _a.sent();
                    return [4, db.query(users_1.users_table.sql)];
                case 3:
                    _a.sent();
                    return [4, db.query(userAccesses_1.userAccesses_table.sql)];
                case 4:
                    _a.sent();
                    return [4, db.query(statusCert_1.statusCert_table.sql)];
                case 5:
                    _a.sent();
                    return [4, db.query(notificationReads_1.notificationReads_table.sql)];
                case 6:
                    _a.sent();
                    return [4, db.query(notification_1.notification_table.sql)];
                case 7:
                    _a.sent();
                    return [4, db.query(events_1.events_table.sql)];
                case 8:
                    _a.sent();
                    return [4, db.query(dept_1.dept_table.sql)];
                case 9:
                    _a.sent();
                    return [4, db.query(cert_1.cert_table.sql)];
                case 10:
                    _a.sent();
                    return [4, db.query(categoryCert_1.categoryCert_table.sql)];
                case 11:
                    _a.sent();
                    console.log("Таблицы успешно созданы");
                    console.log("Создание основных данных");
                    console.log("Создание отдела");
                    return [4, db.query(dept_1.insert_dept.sql)];
                case 12:
                    _a.sent();
                    console.log("Создание должности");
                    return [4, db.query(workPosition_1.insert_workPosition.sql)];
                case 13:
                    _a.sent();
                    console.log("Создание пользовательских ролей");
                    return [4, db.query(userAccesses_1.insert_userAccesses.sql)];
                case 14:
                    _a.sent();
                    console.log("Создание пользователя");
                    return [4, db.query(users_1.insert_admin.sql)];
                case 15:
                    _a.sent();
                    console.log("Создание статусов сертификата");
                    return [4, db.query(statusCert_1.insert_statusCert.sql)];
                case 16:
                    _a.sent();
                    console.log("Данные успешно созданы");
                    return [2];
            }
        });
    });
}
run();
//# sourceMappingURL=main.js.map