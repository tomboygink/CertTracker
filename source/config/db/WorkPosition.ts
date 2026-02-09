import { DBase, getDB } from "./DBase";
import { generateToken, verifyToken } from '../func/jwt'
import crypto from 'crypto'

import config from '../config.json'

export class WorkPosition {
    db: DBase;
    args: any;
    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }

    //Добавление должности
    async Add() {
        var db_res = await (await this.db.query("INSERT INTO workposition(workpositionname, dept_id) VALUES ('" + this.args.workpositionname + "', " + this.args.dept_id + ") RETURNING id")).rows;
        if (!db_res || db_res.length === 0) { return null }
        return db_res
    }

    //Изменение должности 
    async Update() {
        var db_res = await (await this.db.query("UPDATE workposition SET workpositionname = '" + this.args.workpositionname + "', dept_id = " + this.args.dept_id + " WHERE id = "+this.args.id+" RETURNING id ")).rows
        if (!db_res || db_res.length === 0) { return null }
        return db_res
    }

    //Полчение всех должностей
    async All() {
        var db_res = await (await this.db.query("SELECT * FROM workposition")).rows;
        if (!db_res || db_res.length === 0) { return null }
        return db_res
    }
}