import express from "express"
import http from 'http'
import bodyParser from 'body-parser';
import config from '../../config/config.json'

import cors from "cors"
import cron from "node-cron"


import { router } from './router'
import { notif } from './notif'
import { checkcert } from "./checkcert";

import cookieParser from 'cookie-parser'

class Server {
    app: express.Express = null;
    server: http.Server = null;


    constructor() {
        this.app = express();
        this.server = http.createServer(this.app); //Создание сервера
    }

    //Маршрутизация по ссылкам
    route() {

        //var url = config.front_config.ssl + config.front_config.host + ":" + config.front_config.port
        this.app.use(cors({
            origin: config.front_config.domain,
            credentials: true
        }));

        this.app.use(bodyParser.json()) //Парсер для post запросов 

        this.app.use(cookieParser()) //парсер куков

        this.app.post("/api", async (req: express.Request, res: express.Response) => {
            res.send(await router(req, res));
        })
    }

    check() {
        //в полночь
        cron.schedule('0 0 * * * *', async () => { await checkcert() });

        //10 сек
        // cron.schedule('*/10 * * * * *', async () => { await checkcert() });
    }
    notification() {
        //в полночь
        cron.schedule('0 0 * * * *', async () => { await notif() });

        //10 сек
        //cron.schedule('*/10 * * * * *', async () => { await notif() });
    }

    //Запуск сервера 
    run() {
        //Обработка API
        this.route();
        //Фоновый поток на изменение статуса сертификата истекает/просрочен
        this.check();
        //фоновый поток на отправку уведомлений и писем статуса сертификата истекает/просрочен
        this.notification();
        this.server.listen(config.server_config.port, () => { console.log(`Сервер запушен: ${config.server_config.protocol}${config.server_config.host}:${config.server_config.port}`) })
    }
}

var srv = new Server();
srv.run();