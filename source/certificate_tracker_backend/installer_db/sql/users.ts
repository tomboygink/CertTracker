import crypto from 'crypto';
import config from '../../../config/config.json';
import { dateTimeToSQL } from '../../../config/db/DateStr'



export const users_table = {
    sql: `DROP TABLE IF EXISTS users;
    CREATE TABLE users(
        ID                      BIGSERIAL NOT NULL PRIMARY KEY,
        Login                   VARCHAR(250) DEFAULT(''),
        Password                VARCHAR(250) DEFAULT(''),
        LastName                VARCHAR(250) DEFAULT(''),
        FirstName               VARCHAR(250) DEFAULT(''),
        Avatar                  TEXT DEFAULT(''),
        Access_ID               BIGINT DEFAULT 0,
        Email                   VARCHAR(250) DEFAULT(''),
        SendMail                BOOLEAN DEFAULT (false),
        WorkPosition_ID         BIGINT DEFAULT 0,
        Deleted                 BOOLEAN DEFAULT (false)
    );

    COMMENT ON TABLE users IS 'Пользователи системы';
    COMMENT ON COLUMN users.ID IS 'Идентификатор пользователя';
    COMMENT ON COLUMN users.Login IS 'Логин для авторизации';
    COMMENT ON COLUMN users.Password IS 'Пароль для авторизации';
    COMMENT ON COLUMN users.LastName IS 'Фамилия';
    COMMENT ON COLUMN users.FirstName IS 'Имя';
    COMMENT ON COLUMN users.Avatar IS 'Аватарка пользователя';
    COMMENT ON COLUMN users.Access_ID IS 'Права доступа пользователя';
    COMMENT ON COLUMN users.Email IS 'Почта пользователя для отправки уведомлдений';
    COMMENT ON COLUMN users.WorkPosition_ID IS 'Идентификатор должности';
    COMMENT ON COLUMN users.Deleted IS 'Статус блокировки пользователя';
    `,
    args: new Array()
};

export const insert_admin = {
    sql: "INSERT INTO users(Login, Password, LastName, FirstName, Avatar, Access_ID, Email, SendMail, WorkPosition_ID, Deleted) "+
    "VALUES('admin', '"+crypto.createHmac('sha256', config.crypto_code).update('admin').digest('hex')+"', 'admin', 'admin', '', '1', 'noreplay@bvs45.ru', true, '1', false)",
    args: new Array()
};

