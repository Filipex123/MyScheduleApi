import { ExpressInvesify } from './infra/express-inversify/ExpressInversify';
import { Mongoose } from './infra/mongoose/Mongoose';
import * as dotenv from 'dotenv';

export * from './controller/User.controller';
export * from './controller/Admin.controller';
export * from './controller/Exam.controller'

function normalizePort(val: string) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

dotenv.config();

(async () => {
  const mongoose = new Mongoose(process.env.MONGO_CONNECTION_STRING || '');

  await mongoose.connect();

  const expressInversify = new ExpressInvesify();

  const port = normalizePort(process.env.PORT || '3001');
  expressInversify.application.listen(port);

  console.log(`Listening on ${port}`);
})();
