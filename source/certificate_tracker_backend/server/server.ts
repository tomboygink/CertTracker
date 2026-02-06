import express from "express"
import http from 'http'
import bodyParser from 'body-parser';
import config from '../../config/config.json'

import cors from "cors"


import {router} from './router'

class Server {
    app: express.Express = null;
    server: http.Server = null;


    constructor() {
        this.app = express();
        this.server = http.createServer(this.app); //Создание сервера
    }

    //Маршрутизация по ссылкам
    route() {
        this.app.use(cors());
        this.app.use(bodyParser.json()) //Парсер для post запросов 
        this.app.post("/api", async (req: express.Request, res: express.Response) => {
            //console.log("req.body ", req.body);
            res.send(await router(req.body));
        })
    }

    //Запуск сервера 
    run() {
        this.route();
        this.server.listen(config.server_config.port, () => { console.log(`Сервер запушен: http://${config.server_config.host}:${config.server_config.port}`) })
    }
}

var srv = new Server();
srv.run();