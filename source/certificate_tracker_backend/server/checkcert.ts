import { Cert } from "../../config/db/Cert"


export async function checkcert() {
    var c = new Cert(null);
    var data = await c.CheckAll();

    for (var i: number = 0; i < data.length; i++) {
        const currentDate = new Date;
        const certDate = new Date(data[i].certvalidityperiod)

        const diffDays =
            (certDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);

        var status: number;

        if (diffDays > 0 && diffDays < 30) {
            //console.log("ИСТЕКАЕТ")
            status = 2
        }
        if (diffDays <= 0) {
            //console.log("ПРОСРОЧЕН");
            status = 3
        }
        if (diffDays >= 30) {
            //console.log("АКТИВЕН"); 
            continue;
        }

        const body = {
            id: data[i].id,
            statuscert_id: status
        }
        var uc = new Cert(body)
        await uc.UpdateStatus();
    }
    
}