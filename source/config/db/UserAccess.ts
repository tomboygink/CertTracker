import { DBase, getDB } from "./DBase";
import { generateToken, verifyToken } from '../func/jwt'
import crypto from 'crypto'

import config from '../config.json'

export class UserAccess {
    db: DBase;
    args: any;
    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }

    //Полчение всех доступов
    async All() {
        var db_res = await (await this.db.query("SELECT * FROM useraccesses")).rows;
        if (!db_res || db_res.length === 0) { return null }
        return db_res
    }
}