import { Users } from "../../config/db/Users"

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

        case "AllUsers": {
            var u = new Users(body.args);
            data = await u.All();
            return buildResponse(body.cmd, data, data ? null : "Ошибка получения пользователей")
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