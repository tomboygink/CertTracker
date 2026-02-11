import { Cert } from "../../config/db/Cert"
import { Notification } from "../../config/db/Notification"
import { dateTimeToSQL } from "./../../config/db/DateStr";


export async function notif() {
    var c = new Cert(null);
    var data = await c.CheckAll();

    for (var i: number = 0; i < data.length; i++) {

        var titlenotif = 'Внимание'
        var msgnotif = '';


        if (data[i].statuscert_id === "1") { continue }
        else if (data[i].statuscert_id === "2") { msgnotif += 'У сертификата ' + String(data[i].certname) + ' истекает срок действия' }
        else if (data[i].statuscert_id === "3") { msgnotif += 'У сертификата ' + String(data[i].certname) + ' просрочен срок действия' }

        var datecreatenotif = new Date();

        const body = {
            titlenotif: titlenotif,
            msgnotif: msgnotif,
            datecreatenotif: datecreatenotif
        }

        //Добавление в бд
        var n = new Notification(body)
        await n.Add();

        //отправка на почту

        await n.sendMail();


    }

}
