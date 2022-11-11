import cors from 'cors';
import express, { Application } from 'express';

import { fuelRouter } from '../routes';

export class Server {
    #app: Application;
    #port: string;

    #appRoutes = {
        fuel: '/api/fuel',
    };

    constructor() {
        this.#app = express();
        this.#port = process.env.PORT || '8080';

        this.#middlewares();
        this.#routes();
    }

    #middlewares() {
        this.#app.use(cors());

        // Convert data of the body to JSON
        this.#app.use(express.json());
    }

    #routes() {
        this.#app.use(this.#appRoutes.fuel, fuelRouter);
    }

    listen() {
        this.#app.listen(this.#port, () => {
            console.log(`Server launched at http://localhost:${this.#port}`);
        });
    }
}
