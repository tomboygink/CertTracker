import crypto from 'crypto';
import config from '../../../config/config.json';
import { dateTimeToSQL } from '../../../config/db/DateStr'



export const categoryCert_table = {
    sql: `DROP TABLE IF EXISTS categoryCert;
    CREATE TABLE categoryCert(
        ID                      BIGSERIAL NOT NULL PRIMARY KEY,
        CategoryName            VARCHAR(250) DEFAULT('')
    );

    COMMENT ON TABLE categoryCert IS 'Категории';
    COMMENT ON COLUMN categoryCert.ID IS 'Идентификатор категории';
    COMMENT ON COLUMN categoryCert.CategoryName IS 'Название категории';
    `,
    args: new Array()
};
