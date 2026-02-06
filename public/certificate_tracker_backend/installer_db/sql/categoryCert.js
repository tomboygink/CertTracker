"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryCert_table = void 0;
exports.categoryCert_table = {
    sql: "DROP TABLE IF EXISTS categoryCert;\n    CREATE TABLE categoryCert(\n        ID                      BIGSERIAL NOT NULL PRIMARY KEY,\n        CategoryName            VARCHAR(250) DEFAULT('')\n    );\n\n    COMMENT ON TABLE categoryCert IS '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438';\n    COMMENT ON COLUMN categoryCert.ID IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438';\n    COMMENT ON COLUMN categoryCert.CategoryName IS '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438';\n    ",
    args: new Array()
};
//# sourceMappingURL=categoryCert.js.map