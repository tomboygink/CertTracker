import crypto from 'crypto';
import config from '../../../config/config.json';
import { dateTimeToSQL } from '../../../config/db/DateStr'



export const events_table = {
    sql: `DROP TABLE IF EXISTS events;
    CREATE TABLE events(
        ID                          BIGSERIAL NOT NULL PRIMARY KEY,
        User_ID                     BIGINT DEFAULT 0,
        Msg                         VARCHAR(250) DEFAULT(''),
        DateCreateMsg               TIMESTAMP DEFAULT(CURRENT_TIMESTAMP)
    );

    COMMENT ON TABLE events IS 'Таблица событий';
    COMMENT ON COLUMN events.ID IS 'Идентификатор событйи';
    COMMENT ON COLUMN events.User_ID IS 'Идентификатор юзера который выполнил операцию';
    COMMENT ON COLUMN events.Msg IS 'Сообщение события';
    COMMENT ON COLUMN events.DateCreateMsg IS 'Дата создания события';
    `,
    args: new Array()
};

