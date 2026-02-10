import { Users } from "../../config/db/Users"
import { UserAccess } from "../../config/db/UserAccess"
import { WorkPosition } from "../../config/db/WorkPosition"
import { Dept } from "../../config/db/Dept"
import { CategoryCert } from "../../config/db/CategoryCert"
import { StatusCert } from "../../config/db/StatusCert"
import { Cert } from "../../config/db/Cert"
import { Events } from "../../config/db/Events"


export async function router(body: any) {

    console.log(body)

    var data: any;

    switch (body.cmd) {

        //------------------------------------------------------------------------------------Пользователи
        //Авторизация
        case "Auth": {
            var u = new Users(body.args);
            data = await u.Auth();
            return buildResponse(body.cmd, data, data ? null : "Ошибка авторизации")
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

        //------------------------------------------------------------------------------------События
        //все события
        case "AllEvents": {
            var ev = new Events(body.args);
            data = await ev.All()
            return buildResponse(body.cmd, data, data ? null : "Ошибка получения событий")
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