import 'reflect-metadata';
import { Application, json, urlencoded } from 'express';
import helmet from 'helmet';
import { interfaces } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Injection } from './Injection';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';

export class ExpressInvesify {
  public application: Application;
  private container: interfaces.Container;

  constructor() {
    this.container = new Injection().container;
    this.createServer();
  }

  private async createServer(): Promise<void> {
    const inversifyExpressServer = new InversifyExpressServer(this.container);

    inversifyExpressServer.setConfig((app: Application) => {
      app.use(urlencoded({ extended: true }));
      app.use(json());
      app.use(helmet());
      app.use(compression());
      app.use(cors());
      app.use(cookieParser());
    });

    this.application = inversifyExpressServer.build();
  }
}
