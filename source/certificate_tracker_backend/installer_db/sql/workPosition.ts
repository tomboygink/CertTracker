import crypto from 'crypto';
import config from '../../../config/config.json';
import { dateTimeToSQL } from '../../../config/db/DateStr'



export const workPosition_table = {
    sql: `DROP TABLE IF EXISTS workPosition;
    CREATE TABLE workPosition(
        ID                      BIGSERIAL NOT NULL PRIMARY KEY,
        WorkPositionName        VARCHAR(250) DEFAULT(''),
        Dept_ID                 BIGINT DEFAULT 0
    );

    COMMENT ON TABLE workPosition IS 'Должности';
    COMMENT ON COLUMN workPosition.ID IS 'Идентификатор пользователя';
    COMMENT ON COLUMN workPosition.WorkPositionName IS 'Название должности';
    COMMENT ON COLUMN workPosition.Dept_ID IS 'Идентификатор отдела';
    `,
    args: new Array()
};


export const insert_workPosition = {
    sql: `INSERT INTO workPosition(WorkPositionName, Dept_ID)
    VALUES('Администратор', '1')`,
    args: new Array()
};

