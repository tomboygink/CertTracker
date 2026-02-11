import { DBase, getDB } from "./DBase";
import { generateToken, verifyToken } from '../func/jwt'
import crypto from 'crypto'

import config from '../config.json'
import { dateTimeToSQL } from "./DateStr";

export class Events {
    db: DBase;
    args: any;
    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }


    async AddCertEvent() {
        await this.db.query("INSERT INTO events(user_id, msg, datecreatemsg) " +
            "VALUES (" + this.args.user_id + ", 'Добавил(а) сертификат " + this.args.certname + "', '" + dateTimeToSQL(new Date()) + "')")
    }

    async UpdateCertEvent() {
        await this.db.query("INSERT INTO events(user_id, msg, datecreatemsg) " +
            "VALUES (" + this.args.user_id + ", 'Изменил(а) сертификат " + this.args.certname + "', '" + dateTimeToSQL(new Date()) + "')")
    }
    async ArchiveCertEvent() {
        var db_res = await (await this.db.query("SELECT certname FROM cert WHERE id = " + this.args.id)).rows
        
        await this.db.query("INSERT INTO events(user_id, msg, datecreatemsg) " +
            "VALUES (" + this.args.user_id + ", 'Отправил(а) сертификат " + db_res[0].certname + " в архив', '" + dateTimeToSQL(new Date()) + "')")
    }

    async All() {
        var db_res = await (await this.db.query("SELECT * FROM events")).rows
        if (!db_res || db_res.length === 0) { return null }
        return db_res
    }


}