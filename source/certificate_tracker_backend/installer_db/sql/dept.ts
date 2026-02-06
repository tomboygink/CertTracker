import crypto from 'crypto';
import config from '../../../config/config.json';
import { dateTimeToSQL } from '../../../config/db/DateStr'



export const dept_table = {
    sql: `DROP TABLE IF EXISTS dept;
    CREATE TABLE dept(
        ID                      BIGSERIAL NOT NULL PRIMARY KEY,
        DeptName                VARCHAR(250) DEFAULT('')
    );

    COMMENT ON TABLE dept IS 'Отделы';
    COMMENT ON COLUMN dept.ID IS 'Идентификатор отдела';
    COMMENT ON COLUMN dept.DeptName IS 'Название отдела';
    `,
    args: new Array()
};



export const insert_dept = {
    sql: `INSERT INTO dept(DeptName)
    VALUES('Отдел IT')`,
    args: new Array()
};