import crypto from 'crypto';
import config from '../../../config/config.json';
import { dateTimeToSQL } from '../../../config/db/DateStr'

export const statusCert_table = {
    sql: `DROP TABLE IF EXISTS statusCert;
    CREATE TABLE statusCert(
        ID                      BIGSERIAL NOT NULL PRIMARY KEY,
        StatusName              VARCHAR(250) DEFAULT('')
    );

    COMMENT ON TABLE statusCert IS 'Статусы актуальности сертификатов';
    COMMENT ON COLUMN statusCert.ID IS 'Идентификатор статуса';
    COMMENT ON COLUMN statusCert.StatusName IS 'Название статуса';
    `,
    args: new Array()
};

export const insert_statusCert = {
    sql: `INSERT INTO statusCert(StatusName)
    VALUES('Активен'), ('Истекает'), ('Просрочен'), ('Архив') `,
    args: new Array()
};

