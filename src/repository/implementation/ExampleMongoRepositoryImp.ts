import { injectable } from 'inversify';
import UserModel from '../model/User.model';
import { ExampleMongoRepositoryInterface } from '../interface/IExampleMongoRepository.interface';

@injectable()
export class ExampleMongoRepositoryImpl implements ExampleMongoRepositoryInterface {
  constructor() {
    console.log('Entrou no repository');
  }

  async findAll(): Promise<any[]> {
    return await UserModel.find().exec();
  }

  create() {
    throw new Error('Method not implemented.');
  }
  delete(): boolean {
    throw new Error('Method not implemented.');
  }
  update() {
    throw new Error('Method not implemented.');
  }
  findById() {
    throw new Error('Method not implemented.');
  }
}
