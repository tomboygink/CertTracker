import crypto from 'crypto';
import config from '../../../config/config.json';
import { dateTimeToSQL } from '../../../config/db/DateStr'



export const cert_table = {
    sql: `DROP TABLE IF EXISTS cert;
    CREATE TABLE cert(
        ID                                BIGSERIAL NOT NULL PRIMARY KEY,
        User_ID                           BIGINT DEFAULT 0,
        CertName                          VARCHAR(250) DEFAULT(''),
        CertNumber                        VARCHAR(250) DEFAULT(''),
        StatusCert_ID                     BIGINT DEFAULT 0,
        Category_ID                       BIGINT DEFAULT 0,
        IssueDate                         TIMESTAMP DEFAULT(CURRENT_TIMESTAMP),
        CertValidityPeriod                TIMESTAMP DEFAULT(CURRENT_TIMESTAMP),
        Docs                              TEXT DEFAULT ('')
    );

    COMMENT ON TABLE cert IS 'Информация о сертификате';
    COMMENT ON COLUMN cert.ID IS 'идентификтаор сертификата';
    COMMENT ON COLUMN cert.User_ID IS 'Идентификатор юзера который добавил сертификат';
    COMMENT ON COLUMN cert.CertName IS 'Название сертификата';
    COMMENT ON COLUMN cert.CertNumber IS 'Номер сертификата';
    COMMENT ON COLUMN cert.StatusCert_ID IS 'Идентификатор статуса сертификата ';
    COMMENT ON COLUMN cert.Category_ID IS 'Категория сертификата';
    COMMENT ON COLUMN cert.IssueDate IS 'Дата выдачи сертификата';
    COMMENT ON COLUMN cert.CertValidityPeriod IS 'Срок действия сертификата';
    COMMENT ON COLUMN cert.Docs IS 'Прикрепленный сертификат';
    `,
    args: new Array()
};
