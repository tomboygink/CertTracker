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

    //Авторизация
    //логин пароль 
    async Auth() {

        const pass = crypto.createHmac('sha256', config.crypto_code).update(this.args.password).digest('hex');
        var db_res = await (await this.db.query("SELECT id, lastname, firstname, avatar, access_id, email, sendmail, workposition_id, deleted FROM users " +
            "WHERE login = '" + this.args.login + "' AND password = '" + pass + "'")).rows;

        if (!db_res || db_res.length === 0) { return null }
        return db_res
    }

    //Авторизация 
    //JWT
    async GetUser() {
        const db_res = await (await this.db.query(
            "SELECT lastname, firstname, avatar, access_id, email, sendmail, workposition_id, deleted FROM users " +
            "WHERE id = " + this.args + " AND deleted = false"
        )).rows;


        if (!db_res || db_res.length === 0) {
            return null;
        }

        return db_res
    }


    //Добалвение юзера только администратор
    async Add() {
        const pass = crypto.createHmac('sha256', config.crypto_code).update(this.args.password).digest('hex');
        var db_res = await (await this.db.query("INSERT INTO users (login, password, lastname, firstname, " +
            "avatar, access_id, email, sendmail, workposition_id, deleted) " +
            "VALUES ('" + this.args.login + "', '" + pass + "', '" + this.args.lastname + "', '" + this.args.firstname + "', " +
            "'', " + this.args.access_id + ", '" + this.args.email + "', " +
            "" + this.args.sendmail + ", " + this.args.workposition_id + ", " + this.args.deleted + ") RETURNING id"
        )).rows;

        if (!db_res || db_res.length === 0) { return null }
        return db_res;

    }
    //Обновление юзера 
    async Update() {
        //Действия со стороны админа на пользовтаеля
        if (this.args.change === "data_admin") {
            var db_res = await (await this.db.query("UPDATE users SET lastname = '" + this.args.lastname + "', firstname = '" + this.args.firstname + "', " +
                "access_id = " + this.args.access_id + ", email = '" + this.args.email + "', sendmail = " + this.args.sendmail + ", workposition_id = " + this.args.workposition_id + ", " +
                "deleted = " + this.args.deleted + " WHERE id = " + this.args.user_id + " RETURNING id")).rows;

            if (!db_res || db_res.length === 0) { return null }
            return db_res;
        }
        else if (this.args.change === "pass_admin") {
            const pass = crypto.createHmac('sha256', config.crypto_code).update(this.args.password).digest('hex');
            var db_res = await (await this.db.query("UPDATE users SET password = '" + pass + "' WHERE id = " + this.args.user_id + " RETURNING id")).rows;

            if (!db_res || db_res.length === 0) { return null }
            return db_res;
        }

        //Действия со стороны юзера самого на себя
        if (this.args.change === "ava_user") {
            var db_res = await (await this.db.query("UPDATE users SET avatar = '" + this.args.avatar + "' WHERE id = " + this.args.id + " RETURNING id")).rows;
            if (!db_res || db_res.length === 0) { return null }
            return db_res;
        }
        else if (this.args.change === "data_user") {
            var db_res = await (await this.db.query("UPDATE users SET lastname = '" + this.args.lastname + "', firstname = '" + this.args.firstname + "' WHERE id = " + this.args.id + " RETURNING id")).rows;
            if (!db_res || db_res.length === 0) { return null }
            return db_res;
        }
        else if (this.args.change === "pass_user") {
            const old_pass = crypto.createHmac('sha256', config.crypto_code).update(this.args.old_password).digest('hex');
            const new_pass = crypto.createHmac('sha256', config.crypto_code).update(this.args.new_password).digest('hex');

            var db_res_check = await (await this.db.query("SELECT password FROM users WHERE id = " + this.args.id)).rows;
            if (!db_res_check || db_res_check.length === 0) { return null }

            if (db_res_check[0].password !== old_pass) { return null; }

            var db_res = await (await this.db.query("UPDATE users SET password = '" + new_pass + "' WHERE id = " + this.args.id + " RETURNING id")).rows
            if (!db_res || db_res === null) return null

            return db_res;
        }
    }
    //Полчение всех юзеров
    async All() {
        var db_res = await (await this.db.query("SELECT id, lastname, firstname, avatar, access_id, email, sendmail, workposition_id, deleted FROM users")).rows;
        if (!db_res || db_res.length === 0) { return null }
        return db_res
    }

    //Полчение ящиков которым должно приходить сообщение 
    async AllEMail() {
        var db_res = await (await this.db.query("SELECT email FROM users WHERE sendmail = true")).rows;

        if (!db_res || db_res.length === 0) return null;
        return db_res
    }
}