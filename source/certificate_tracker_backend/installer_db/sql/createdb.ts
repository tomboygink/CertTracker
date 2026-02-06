import config from '../../../config/config.json';
import pg from 'pg';

const { Pool } = pg;

export const create_db = async () => {
    const pool = new Pool({
        user: config.config_db.user,
        host: config.config_db.host,
        password: config.config_db.password,
        port: config.config_db.port,
        database: "postgres" // подключаемся к postgres, а не к CRM
    });

    try {
        await pool.query("CREATE DATABASE \""+config.config_db.database+"\"");
        console.log("База данных "+config.config_db.database+" создана");
    } catch (err:any) {
        if (err.code === "42P04") {
            console.log("База данных "+config.config_db.database+" уже существует");
        } else {
            console.error("Ошибка при создании БД:", err);
        }
    } finally {
        await pool.end();
    }
};
