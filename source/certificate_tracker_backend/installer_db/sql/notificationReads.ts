import crypto from 'crypto';
import config from '../../../config/config.json';
import { dateTimeToSQL } from '../../../config/db/DateStr'



export const notificationReads_table = {
    sql: `DROP TABLE IF EXISTS notificationReads;
    CREATE TABLE notificationReads(
        ID                          BIGSERIAL NOT NULL PRIMARY KEY,
        Notification_ID             BIGINT DEFAULT 0,
        User_ID                     BIGINT DEFAULT 0,
        DateReadNotif               TIMESTAMP DEFAULT(CURRENT_TIMESTAMP)
    );

    COMMENT ON TABLE notificationReads IS 'Таблица чтения уведомлений';
    COMMENT ON COLUMN notificationReads.ID IS 'Идентификатор чтения';
    COMMENT ON COLUMN notificationReads.Notification_ID IS 'Идентификатор уведомления';
    COMMENT ON COLUMN notificationReads.User_ID IS 'Идентификатор польщователя который прочитал';
    COMMENT ON COLUMN notificationReads.DateReadNotif IS 'Дата прочтения уведомления';
    `,
    args: new Array()
};

