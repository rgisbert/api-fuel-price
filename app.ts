import * as dotenv from 'dotenv';

import { Server } from './models';

// Load environment properties
dotenv.config();

const server = new Server();

server.listen();
