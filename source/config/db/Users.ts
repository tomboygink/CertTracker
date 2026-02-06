import { DBase, getDB } from "./DBase";
import { generateToken, verifyToken } from '../func/jwt'
import crypto from 'crypto'

import config from '../config.json'

export class Users {
    db: DBase;
    args: any;
    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }


    async Auth() {
        //логин пароль 
        if (this.args.auth === "not_jwt") {

            const pass = crypto.createHmac('sha256', config.crypto_code).update(this.args.password).digest('hex');
            var db_res = await (await this.db.query("SELECT id, lastname, firstname, avatar, access_id, email, sendmail, workposition_id, deleted FROM users " +
                "WHERE login = '" + this.args.login + "' AND password = '" + pass + "'")).rows;

            if (!db_res || db_res.length === 0) { return null }

            const token = generateToken(db_res[0]);

            return {
                id: db_res[0].id,
                lastname: db_res[0].lastname,
                firstname: db_res[0].firstname,
                avatar: db_res[0].avatar,
                access_id: db_res[0].access_id,
                email: db_res[0].email,
                sendmail: db_res[0].sendmail,
                workposition_id: db_res[0].workposition_id,
                deleted: db_res[0].deleted,
                token
            };
        }
        //токен JWT
        else if (this.args.auth === "jwt") {
            try {
                const decoded: any = verifyToken(this.args.token);
                const db_res = await (await this.db.query(
                    "SELECT lastname, firstname, avatar, access_id, email, sendmail, workposition_id, deleted FROM users " +
                    "WHERE id = " + decoded.id + " AND deleted = false"
                )).rows;

                if (!db_res || db_res.length === 0) {
                    return null;
                }

                return {
                    user: db_res[0]
                };

            } catch (e) {
                return null;
            }
        }

    }

}