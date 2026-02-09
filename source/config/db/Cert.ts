import { DBase, getDB } from "./DBase";
import { generateToken, verifyToken } from '../func/jwt'
import crypto from 'crypto'

import config from '../config.json'
import { dateTimeToSQL } from "./DateStr";

export class Cert {
    db: DBase;
    args: any;
    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }


    //Добавление категории
    async Add() {
        var db_res = await (await this.db.query("INSERT INTO cert(user_id, certname, certnumber, statuscert_id, category_id, issuedate, certvalidityperiod, docs) "+
            "VALUES ("+this.args.user_id+", '"+this.args.certname+"', '"+this.args.certnumber+"', 1, "+this.args.category_id+", "+
            "'"+dateTimeToSQL(new Date(this.args.issuedate))+"', '"+dateTimeToSQL(new Date(this.args.certvalidityperiod))+"', '"+this.args.docs+"') RETURNING id")).rows;
        if (!db_res || db_res.length === 0) { return null }
        return db_res
    }
}