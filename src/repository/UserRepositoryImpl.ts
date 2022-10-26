import { injectable } from 'inversify';
import { IUserRepository } from './interface/IUserRepository.interface.ts';
import UserModel from '../repository/model/User.model';

@injectable()
export class UserRepositoryImpl implements IUserRepository {
  constructor() {
    console.log('Entrou no repository');
  }

  async findByEmailAndPassword(email: string, password: string): Promise<boolean> {
    const user = await UserModel.findOne({ email: email, senha: password });
    return !!user;
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
