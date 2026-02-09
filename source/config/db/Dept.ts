import { DBase, getDB } from "./DBase";
import { generateToken, verifyToken } from '../func/jwt'
import crypto from 'crypto'

import config from '../config.json'

export class Dept {
    db: DBase;
    args: any;
    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }

    //Добавление отдела
    async Add() {
        var db_res = await (await this.db.query("INSERT INTO dept(deptname) VALUES ('" + this.args.deptname + "') RETURNING id")).rows;
        if (!db_res || db_res.length === 0) { return null }
        return db_res
    }

    //Изменение отдела 
    async Update() {
        var db_res = await (await this.db.query("UPDATE dept SET deptname = '" + this.args.deptname + "' WHERE id = "+this.args.id+" RETURNING id ")).rows
        if (!db_res || db_res.length === 0) { return null }
        return db_res
    }

    //Полчение всех отделов
    async All() {
        var db_res = await (await this.db.query("SELECT * FROM dept")).rows;
        if (!db_res || db_res.length === 0) { return null }
        return db_res
    }
}