import { Users } from "../../config/db/Users"
import { UserAccess } from "../../config/db/UserAccess"
import { WorkPosition } from "../../config/db/WorkPosition"

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
        //Все роли
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
            return buildResponse(body.cmd, data, data?null : "Ошибка добавления должности")
        }
        //Изменение должности 
        case "ChangeWorkPosition":{
            var wp = new WorkPosition(body.args);
            data = await wp.Update();
            return buildResponse(body.cmd, data, data?null: "Ошибка изменения должности")
        }
        //Все должности
        case "AllWorkPosition":{
            var wp = new WorkPosition(body.args);
            data = await wp.All();
            return buildResponse(body.cmd, data, data? null: "Ошибка получения должностей")
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