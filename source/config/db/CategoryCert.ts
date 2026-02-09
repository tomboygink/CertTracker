import { DBase, getDB } from "./DBase";
import { generateToken, verifyToken } from '../func/jwt'
import crypto from 'crypto'

import config from '../config.json'

export class CategoryCert {
    db: DBase;
    args: any;
    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }


    //Добавление категории
    async Add() {
        var db_res = await (await this.db.query("INSERT INTO categorycert(categoryname) VALUES ('" + this.args.categoryname + "') RETURNING id")).rows;
        if (!db_res || db_res.length === 0) { return null }
        return db_res
    }
    //Изменение категории 
    async Update() {
        var db_res = await (await this.db.query("UPDATE categorycert SET categoryname = '" + this.args.categoryname + "' WHERE id = " + this.args.id + " RETURNING id ")).rows
        if (!db_res || db_res.length === 0) { return null }
        return db_res
    }

    //Полчение всех отделов
    async All() {
        var db_res = await (await this.db.query("SELECT * FROM categorycert")).rows;
        if (!db_res || db_res.length === 0) { return null }
        return db_res
    }

}