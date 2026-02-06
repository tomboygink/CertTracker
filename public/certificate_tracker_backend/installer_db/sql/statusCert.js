"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert_statusCert = exports.statusCert_table = void 0;
exports.statusCert_table = {
    sql: "DROP TABLE IF EXISTS statusCert;\n    CREATE TABLE statusCert(\n        ID                      BIGSERIAL NOT NULL PRIMARY KEY,\n        StatusName              VARCHAR(250) DEFAULT('')\n    );\n\n    COMMENT ON TABLE statusCert IS '\u0421\u0442\u0430\u0442\u0443\u0441\u044B \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0432';\n    COMMENT ON COLUMN statusCert.ID IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0441\u0442\u0430\u0442\u0443\u0441\u0430';\n    COMMENT ON COLUMN statusCert.StatusName IS '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u0430';\n    ",
    args: new Array()
};
exports.insert_statusCert = {
    sql: "INSERT INTO statusCert(StatusName)\n    VALUES('\u0410\u043A\u0442\u0438\u0432\u0435\u043D'), ('\u0418\u0441\u0442\u0435\u043A\u0430\u0435\u0442'), ('\u041F\u0440\u043E\u0441\u0440\u043E\u0447\u0435\u043D'), ('\u0410\u0440\u0445\u0438\u0432') ",
    args: new Array()
};
//# sourceMappingURL=statusCert.js.map