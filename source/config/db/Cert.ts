import { DBase, getDB } from "./DBase";
import { dateTimeToSQL } from "./DateStr";

import { Events } from "./Events"


export class Cert {
    db: DBase;
    args: any;
    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }

    //Добавление серртификата
    async Add() {
        var db_res = await (await this.db.query("INSERT INTO cert(user_id, certname, certnumber, statuscert_id, category_id, issuedate, certvalidityperiod, docs) " +
            "VALUES (" + this.args.user_id + ", '" + this.args.certname + "', '" + this.args.certnumber + "', 1, " + this.args.category_id + ", " +
            "'" + dateTimeToSQL(new Date(this.args.issuedate)) + "', '" + dateTimeToSQL(new Date(this.args.certvalidityperiod)) + "', '" + this.args.docs + "') RETURNING id")).rows;
        if (!db_res || db_res.length === 0) { return null }

        //Занесения в таблицу событий
        var ev = new Events(this.args)
        await ev.AddCertEvent();

        return db_res
    }

    //Изменение сертификата 
    async Update() {
        var db_res = await (await this.db.query("UPDATE cert SET certname = '" + this.args.certname + "', certnumber = '" + this.args.certnumber + "', " +
            "category_id = " + this.args.category_id + ", issuedate = '" + dateTimeToSQL(new Date(this.args.issuedate)) + "', " +
            "certvalidityperiod = '" + dateTimeToSQL(new Date(this.args.certvalidityperiod)) + "', docs = '" + this.args.docs + "' WHERE id = " + this.args.id + " RETURNING id")).rows;
        if (!db_res || db_res.length === 0) { return null }

        //Занесения в таблицу событий
        var ev = new Events(this.args)
        await ev.UpdateCertEvent();

        return db_res
    }

    //Отправка в архив
    async ArchiveCert() {
        var db_res = await (await this.db.query("UPDATE cert SET statuscert_id = 4 WHERE id = " + this.args.id + " RETURNING id")).rows;
        if (!db_res || db_res.length === 0) { return null }

        //Занесения в таблицу событий
        var ev = new Events(this.args)
        await ev.ArchiveCertEvent();

        return db_res
    }

    //Запрос на все сертификаты
    async All() {
        var db_res = await (await this.db.query("SELECT id, user_id, certname, certnumber, statuscert_id, category_id, issuedate, certvalidityperiod FROM cert")).rows;
        if (!db_res || db_res.length === 0) { return null }
        return db_res
    }

    //Запрос на получение PDF-документа при нажатии на сертификат
    async Docs() {
        var db_res = await (await this.db.query("SELECT docs FROM cert WHERE id = " + this.args.id)).rows;
        if (!db_res || db_res.length === 0) { return null }
        return db_res
    }

    //Запрос на проверку данных
    async CheckAll() {
        var db_res = await (await this.db.query("SELECT id, statuscert_id, certvalidityperiod, certname FROM cert WHERE statuscert_id != 4")).rows
        if (!db_res || db_res.length === 0) { return null }
        return db_res
    }

    //Обновление statuscert_id данных при истечении или просрочке по времени 
    async UpdateStatus() {
        var db_res = await (await this.db.query("UPDATE cert SET statuscert_id = " + this.args.statuscert_id + " WHERE id = " + this.args.id + " RETURNING id")).rows;
        if (!db_res || db_res.length === 0) { return null }
        return db_res
    }

}