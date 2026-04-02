import { Users } from "../../config/db/Users"
import { UserAccess } from "../../config/db/UserAccess"
import { WorkPosition } from "../../config/db/WorkPosition"
import { Dept } from "../../config/db/Dept"
import { CategoryCert } from "../../config/db/CategoryCert"
import { StatusCert } from "../../config/db/StatusCert"
import { Cert } from "../../config/db/Cert"
import { Events } from "../../config/db/Events"
import { Notification } from "../../config/db/Notification"
import { NotificationReads } from "../../config/db/NotificationReads"



import { Response } from "express";

import { add_token, verif_token, delete_token } from "./token"



export async function router(req: any, res: Response) {

    const body = req.body;
    console.log(body)

    var data: any;

    switch (body.cmd) {

        //------------------------------------------------------------------------------------Пользователи
        //Авторизация
        case "Auth": {
            //авторизация логин пароль 
            var u = new Users(body.args);
            data = await u.Auth();
            //проверка на юзера
            if (!data || data.length === 0) { return buildResponse(body.cmd, null, "Ошибка авторизации") }
            //если проврка пройдена то генерация токена 

            add_token(data, res);

            //ответ данные авторизованного юзера
            return buildResponse(body.cmd, data, null)
        }
        //Авторизация
        //проверка юзера по JWT
        case "GetUser": {
            var token = req.cookies?.access_token;
            if (!token) { return buildResponse(body.cmd, null, "no_token"); }
            try {
                var decoded: any = verif_token(token)

                console.log(decoded)
                var u = new Users(decoded.id);
                data = await u.GetUser();

                console.log(data[0].deleted)

                if (data[0].deleted === true) {
                    // delete_token(res);
                    return buildResponse(body.cmd, null, "user_blocked")

                }
                console.log("user ok")
                return buildResponse(body.cmd, data, null);
            }
            catch {
                data = null;
                // delete_token(res);
                return buildResponse(body.cmd, null, "token_invalid");
            }
        }
        //Выход из аккаунта
        case "Logout": {
            delete_token(res);
            data = [{ "logout": true }]
            return buildResponse(body.cmd, data, null);
        }

        //Добавление пользователя только со стороны админа
        case "AddUser": {
            var u = new Users(body.args);
            data = await u.Add();
            return buildResponse(body.cmd, data, data ? null : "Ошибка добавления пользователя")
        }
        //Изменение пользователя со стороны админа и юзера
        case "ChangeUser": {
            var u = new Users(body.args);
            data = await u.Update();
            return buildResponse(body.cmd, data, data ? null : "Ошибка обновления данных пользователя")
        }
        //Все пользовтаели
        case "AllUsers": {
            var u = new Users(body.args);
            data = await u.All();
            return buildResponse(body.cmd, data, data ? null : "Ошибка получения пользователей")
        }

        //------------------------------------------------------------------------------------Уровни доступа
        //Все уровни доступа
        case "AllAccess": {
            var ua = new UserAccess(body.args);
            data = await ua.All();
            return buildResponse(body.cmd, data, data ? null : "Ошибка получения уровней доступа")
        }

        //------------------------------------------------------------------------------------Должности
        //Добавление доджности
        case "AddWorkPosition": {
            var wp = new WorkPosition(body.args);
            data = await wp.Add();
            return buildResponse(body.cmd, data, data ? null : "Ошибка добавления должности")
        }
        //Изменение должности 
        case "ChangeWorkPosition": {
            var wp = new WorkPosition(body.args);
            data = await wp.Update();
            return buildResponse(body.cmd, data, data ? null : "Ошибка изменения должности")
        }
        //Все должности
        case "AllWorkPosition": {
            var wp = new WorkPosition(body.args);
            data = await wp.All();
            return buildResponse(body.cmd, data, data ? null : "Ошибка получения должностей")
        }

        //------------------------------------------------------------------------------------Отделы
        //Добавление отдела
        case "AddDept": {
            var d = new Dept(body.args);
            data = await d.Add();
            return buildResponse(body.cmd, data, data ? null : "Ошибка добавления отдела")
        }
        //Изменение отдела 
        case "ChangeDept": {
            var d = new Dept(body.args);
            data = await d.Update();
            return buildResponse(body.cmd, data, data ? null : "Ошибка изменения отдела")
        }
        //Все отделы
        case "AllDept": {
            var d = new Dept(body.args);
            data = await d.All();
            return buildResponse(body.cmd, data, data ? null : "Ошибка получения отделов")
        }

        //------------------------------------------------------------------------------------Категории сертификатов
        //Добавление категории
        case "AddCategoryCert": {
            var cc = new CategoryCert(body.args);
            data = await cc.Add();
            return buildResponse(body.cmd, data, data ? null : "Ошибка добавления категории")
        }
        //Изменение категории 
        case "ChangeCategoryCert": {
            var cc = new CategoryCert(body.args);
            data = await cc.Update();
            return buildResponse(body.cmd, data, data ? null : "Ошибка изменения категории")
        }
        //Все категории
        case "AllCategoryCert": {
            var cc = new CategoryCert(body.args);
            data = await cc.All();
            return buildResponse(body.cmd, data, data ? null : "Ошибка получения категорий")
        }

        //------------------------------------------------------------------------------------Статусы сертификатов
        //Все статусы
        case "AllStatusCert": {
            var sc = new StatusCert(body.args);
            data = await sc.All();
            return buildResponse(body.cmd, data, data ? null : "Ошибка получения статусов сертификата")
        }

        //------------------------------------------------------------------------------------Сертификаты
        //Добавление сертификата 
        case "AddCert": {
            var c = new Cert(body.args);
            data = await c.Add();
            return buildResponse(body.cmd, data, data ? null : "Ошибка добавления сертификата")
        }
        //Изменение сертфиката
        case "ChangeCert": {
            var c = new Cert(body.args);
            data = await c.Update();
            return buildResponse(body.cmd, data, data ? null : "Ошибка изменения сертификата")
        }
        //Отправка сертификата в архив
        case "ArchiveCert": {
            var c = new Cert(body.args);
            data = await c.ArchiveCert();
            return buildResponse(body.cmd, data, data ? null : "Ошибка изменения сертификата")
        }
        //Все сертификаты
        case "AllCert": {
            var c = new Cert(body.args);
            data = await c.All();
            return buildResponse(body.cmd, data, data ? null : "Ошибка получения сертификатов")
        }
        //Запрос прикрепленного документа
        case "Docs": {
            var c = new Cert(body.args);
            data = await c.Docs();
            return buildResponse(body.cmd, data, data ? null : "Ошибка получения документа")
        }

        //Запрос прикрепленного документа
        case "Docs_prot": {
            var c = new Cert(body.args);
            data = await c.DocsProt();
            return buildResponse(body.cmd, data, data ? null : "Ошибка получения документа")
        }

        //------------------------------------------------------------------------------------События
        //Все события
        case "AllEvents": {
            var ev = new Events(body.args);
            data = await ev.All()
            return buildResponse(body.cmd, data, data ? null : "Ошибка получения событий")
        }

        //------------------------------------------------------------------------------------Уведомления
        //Получение всех не прочитанных уведомлений
        case "AllNotif": {
            var n = new Notification(body.args);
            data = await n.All();
            return buildResponse(body.cmd, data, data ? null : "Ошибка получения уведомлений")
        }

        case "NotifRead": {
            var nr = new NotificationReads(body.args);
            data = await nr.Add();
            return buildResponse(body.cmd, data, data ? null : "Ошибка прочтения уведомления")
        }


        default: {
            return buildResponse(body.cmd, data, data ? null : `Команда "${body.cmd}" не распознана`);
        }
    }

}



function buildResponse(cmd: string, data: any = null, err: string | null = null): string {
    return JSON.stringify({
        cmd,
        data: data ?? null,
        err,
    });
}