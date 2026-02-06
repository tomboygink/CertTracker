import crypto from 'crypto';
import config from '../../../config/config.json';
import { dateTimeToSQL } from '../../../config/db/DateStr'



export const notification_table = {
    sql: `DROP TABLE IF EXISTS notification;
    CREATE TABLE notification(
        ID                          BIGSERIAL NOT NULL PRIMARY KEY,
        TitleNotif                  VARCHAR(250) DEFAULT(''),
        MsgNotif                    VARCHAR(250) DEFAULT(''),
        DateCreateNotif             TIMESTAMP DEFAULT(CURRENT_TIMESTAMP)
    );

    COMMENT ON TABLE notification IS 'Таблица уведомлений';
    COMMENT ON COLUMN notification.ID IS 'Идентификатор уведомления';
    COMMENT ON COLUMN notification.TitleNotif IS 'Заголовок уведомления';
    COMMENT ON COLUMN notification.MsgNotif IS 'Сообщение уведомления';
    COMMENT ON COLUMN notification.DateCreateNotif IS 'Дата создания уведомления';
    `,
    args: new Array()
};

