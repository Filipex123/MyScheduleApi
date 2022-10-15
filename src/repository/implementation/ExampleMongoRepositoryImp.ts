import { injectable } from 'inversify';
import { ExampleMongoRepositoryInterface } from '../interface/IExampleMongoRepository.interface';

@injectable()
export class ExampleMongoRepositoryImpl implements ExampleMongoRepositoryInterface {
  constructor() {
    console.log('Entrou no repository');
  }

  findAll(): Promise<any>[] {
    throw new Error('Method not implemented.');
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
