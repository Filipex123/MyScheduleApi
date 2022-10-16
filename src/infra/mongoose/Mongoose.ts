import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

export class Mongoose {
  private url: string;

  constructor(connectionUrl: string) {
    this.url = connectionUrl;
  }

  public async connect() {
    let options: mongoose.ConnectOptions = { dbName: 'mySchedule' };

    try {
      await mongoose.connect(this.url, options);
    } catch (error) {
      console.log(`Error on mongo ${error}`);
      process.exit(1);
    }
  }

  public async disconnect() {
    try {
      await mongoose.disconnect();
    } catch (error) {
      console.log(`Error on mongo ${error}`);
      process.exit(1);
    }
  }
}
