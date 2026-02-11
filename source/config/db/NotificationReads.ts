import { DBase, getDB } from "./DBase";
import { generateToken, verifyToken } from '../func/jwt'
import crypto from 'crypto'
import nodemailer from 'nodemailer'

import config from '../config.json'
import { dateTimeToSQL } from "./DateStr";

export class NotificationReads {
    db: DBase;
    args: any;
    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }

    async Add() {
        var db_res = await (await this.db.query("INSERT INTO notificationreads(notification_id, user_id, datereadnotif) " +
            "VALUES (" + this.args.notification_id + ", " + this.args.user_id + ", '" + dateTimeToSQL(new Date()) + "') RETURNING id")).rows;

        if (!db_res || db_res.length === 0) { return null;}
        return db_res;
    }
}