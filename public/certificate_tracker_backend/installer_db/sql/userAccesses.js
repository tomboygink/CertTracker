"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert_userAccesses = exports.userAccesses_table = void 0;
exports.userAccesses_table = {
    sql: "DROP TABLE IF EXISTS userAccesses;\n    CREATE TABLE userAccesses(\n        ID                      BIGSERIAL NOT NULL PRIMARY KEY,\n        AccessName                VARCHAR(250) DEFAULT('')\n    );\n\n    COMMENT ON TABLE userAccesses IS '\u0420\u043E\u043B\u0435\u0432\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u0432 \u041F\u041E \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430';\n    COMMENT ON COLUMN userAccesses.ID IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0440\u043E\u043B\u0438';\n    COMMENT ON COLUMN userAccesses.AccessName IS '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0440\u043E\u043B\u0438';\n    ",
    args: new Array()
};
exports.insert_userAccesses = {
    sql: "INSERT INTO userAccesses(AccessName)\n    VALUES('\u041F\u043E\u043B\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F'), ('\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F'), ('\u0411\u0435\u0437 \u0434\u043E\u0441\u0442\u0443\u043F\u0430')",
    args: new Array()
};
//# sourceMappingURL=userAccesses.js.map