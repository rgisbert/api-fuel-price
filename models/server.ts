import cors from 'cors';
import express, { Application } from 'express';

export class Server {
    #app: Application;
    #port: string;

    constructor() {
        this.#app = express();
        this.#port = process.env.PORT || '8080';

        this.#middlewares();
    }

    #middlewares() {
        this.#app.use(cors());

        // Convert data of the body to JSON
        this.#app.use(express.json());
    }

    listen() {
        this.#app.listen(this.#port, () => {
            console.log(`Server launched at http://localhost:${this.#port}`);
        });
    }
}
