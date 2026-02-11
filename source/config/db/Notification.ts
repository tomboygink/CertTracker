import { DBase, getDB } from "./DBase";
import { generateToken, verifyToken } from '../func/jwt'
import crypto from 'crypto'
import nodemailer from 'nodemailer'

import config from '../config.json'
import { dateTimeToSQL } from "./DateStr";

export class Notification {
    db: DBase;
    args: any;
    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }

    async Add() {
        await (await this.db.query("INSERT INTO notification (titlenotif, msgnotif, datecreatenotif) " +
            "VALUES ('" + this.args.titlenotif + "', '" + this.args.msgnotif + "', '" + dateTimeToSQL(this.args.datecreatenotif) + "')"))
    }

    async All() {
        var db_res = await (await this.db.query("SELECT notification.id, notification.titlenotif, notification.msgnotif, notification.datecreatenotif FROM notification " +
            "LEFT JOIN notificationreads ON notification.id = notificationreads.notification_id AND notificationreads.user_id = " + this.args.user_id + " WHERE notificationreads.notification_id IS NULL")).rows;
        if (!db_res || db_res.length === 0) return null;
        return db_res;
    }



    async sendMail() {
        await this.transporter.sendMail({
            from: config.config_mail.auth.user,
            //Получение email от пользователя
            to: 'letovaltseva@burvodstroy45.ru',
            subject: this.args.titlenotif,
            //Отправка ссылки с кодом для подтверждения
            html: this.args.msgnotif
        });
    }

    transporter: nodemailer.Transporter = nodemailer.createTransport({
        host: config.config_mail.host,
        port: config.config_mail.port,
        secure: config.config_mail.secure,
        auth: {
            user: config.config_mail.auth.user,
            pass: config.config_mail.auth.pass
        },
    });
}