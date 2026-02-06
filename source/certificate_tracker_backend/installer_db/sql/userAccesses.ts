import crypto from 'crypto';
import config from '../../../config/config.json';
import { dateTimeToSQL } from '../../../config/db/DateStr'



export const userAccesses_table = {
    sql: `DROP TABLE IF EXISTS userAccesses;
    CREATE TABLE userAccesses(
        ID                      BIGSERIAL NOT NULL PRIMARY KEY,
        AccessName                VARCHAR(250) DEFAULT('')
    );

    COMMENT ON TABLE userAccesses IS 'Ролевая часть в ПО для доступа';
    COMMENT ON COLUMN userAccesses.ID IS 'Идентификатор роли';
    COMMENT ON COLUMN userAccesses.AccessName IS 'Название роли';
    `,
    args: new Array()
};


export const insert_userAccesses = {
    sql: `INSERT INTO userAccesses(AccessName)
    VALUES('Полный доступ'), ('Ограниченный доступ'), ('Без доступа')`,
    args: new Array()
};
