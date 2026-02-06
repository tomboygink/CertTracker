"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert_dept = exports.dept_table = void 0;
exports.dept_table = {
    sql: "DROP TABLE IF EXISTS dept;\n    CREATE TABLE dept(\n        ID                      BIGSERIAL NOT NULL PRIMARY KEY,\n        DeptName                VARCHAR(250) DEFAULT('')\n    );\n\n    COMMENT ON TABLE dept IS '\u041E\u0442\u0434\u0435\u043B\u044B';\n    COMMENT ON COLUMN dept.ID IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043E\u0442\u0434\u0435\u043B\u0430';\n    COMMENT ON COLUMN dept.DeptName IS '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043E\u0442\u0434\u0435\u043B\u0430';\n    ",
    args: new Array()
};
exports.insert_dept = {
    sql: "INSERT INTO dept(DeptName)\n    VALUES('\u041E\u0442\u0434\u0435\u043B IT')",
    args: new Array()
};
//# sourceMappingURL=dept.js.map