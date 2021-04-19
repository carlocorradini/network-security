import path from 'path';
import express, { Request, Response } from 'express';
import requestIp from 'request-ip';
import favicon from 'serve-favicon';
import { BankController } from './controllers';

/**
 * ENVs
 */
const PORT: number = process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 8888;

/**
 * Express
 */
const app = express();
app.use(requestIp.mw());
app.use(express.json());
app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.post('/api/v1/withdraw', BankController.withdraw);
app.get('/', (_: Request, res: Response) => res.sendFile(path.join(__dirname, 'index.html')));

/**
 * Bootstrap express server
 */
app
  .listen(PORT, () => console.info(`Server running on port ${PORT}`))
  .on('error', (error) => console.error(`Server bootstrap error due to: ${error}`));
