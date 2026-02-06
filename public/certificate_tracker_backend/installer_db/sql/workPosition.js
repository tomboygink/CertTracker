"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert_workPosition = exports.workPosition_table = void 0;
exports.workPosition_table = {
    sql: "DROP TABLE IF EXISTS workPosition;\n    CREATE TABLE workPosition(\n        ID                      BIGSERIAL NOT NULL PRIMARY KEY,\n        WorkPositionName        VARCHAR(250) DEFAULT(''),\n        Dept_ID                 BIGINT DEFAULT 0\n    );\n\n    COMMENT ON TABLE workPosition IS '\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438';\n    COMMENT ON COLUMN workPosition.ID IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F';\n    COMMENT ON COLUMN workPosition.WorkPositionName IS '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438';\n    COMMENT ON COLUMN workPosition.Dept_ID IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043E\u0442\u0434\u0435\u043B\u0430';\n    ",
    args: new Array()
};
exports.insert_workPosition = {
    sql: "INSERT INTO workPosition(WorkPositionName, Dept_ID)\n    VALUES('\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440', '1')",
    args: new Array()
};
//# sourceMappingURL=workPosition.js.map