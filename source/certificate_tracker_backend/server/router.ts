import {Users} from "../../config/db/Users"

export async function router(body: any) {

    console.log(body)

    var data: any;

    switch (body.cmd) {

        //Пользователи
        case "Auth": {
            var u = new Users(body.args);
            data = await u.Auth();
            return buildResponse(body.cmd, data, data ? null : "Ошибка авторизации")
        }

        case "AddUser":{}
        case "ChangeUser":{}

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