import { ExpressInvesify } from './infra/express-inversify/ExpressInversify';
export * from './controller/Example.controller';
import { Mongoose } from './infra/mongoose/Mongoose';

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

(async () => {
  const mongoose = new Mongoose('connectionUrlHere');

  await mongoose.connect();

  const expressInversify = new ExpressInvesify();

  const port = normalizePort('3001');
  expressInversify.application.listen(port);

  console.log(`Listening on ${port}`);
})();
