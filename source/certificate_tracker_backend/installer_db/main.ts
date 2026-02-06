import { dateTimeToStr } from '../../config/db/DateStr' //'../../config/xcore/dbase/DateStr'
import { DBase, endDB, getDB } from '../../config/db/DBase';
import config from '../../config/config.json'


//импорт функции создания базы данных 
import { create_db } from './sql/createdb';

//импорт функций создания таблиц
import { workPosition_table, insert_workPosition } from './sql/workPosition';
import { users_table, insert_admin } from './sql/users';
import { userAccesses_table, insert_userAccesses } from './sql/userAccesses';
import { statusCert_table, insert_statusCert } from './sql/statusCert';
import { notificationReads_table } from './sql/notificationReads';
import { notification_table } from './sql/notification';
import { events_table } from './sql/events';
import { dept_table, insert_dept } from './sql/dept';
import { cert_table } from './sql/cert';
import { categoryCert_table } from './sql/categoryCert';


//функция запуска установщика
async function run() {
    console.log("Запуск установщика")

    console.log("Создание базы данных " + config.config_db.database)
    await create_db();
    console.log("База данных успешно создана")

    var db: DBase = getDB();

    console.log("Создание таблиц")
    await db.query(workPosition_table.sql);
    await db.query(users_table.sql);
    await db.query(userAccesses_table.sql);
    await db.query(statusCert_table.sql);
    await db.query(notificationReads_table.sql);
    await db.query(notification_table.sql);
    await db.query(events_table.sql);
    await db.query(dept_table.sql);
    await db.query(cert_table.sql);
    await db.query(categoryCert_table.sql);
    console.log("Таблицы успешно созданы")


    //создание необходимых строк

    console.log("Создание основных данных")

    console.log("Создание отдела")
    await db.query(insert_dept.sql);
    console.log("Создание должности")
    await db.query(insert_workPosition.sql);
    console.log("Создание пользовательских ролей")
    await db.query(insert_userAccesses.sql);
    console.log("Создание пользователя")
    await db.query(insert_admin.sql);
    console.log("Создание статусов сертификата")
    await db.query(insert_statusCert.sql);

    console.log("Данные успешно созданы")

}

run();

//запуск установщика