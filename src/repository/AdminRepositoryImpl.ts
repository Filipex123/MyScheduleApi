import { injectable } from 'inversify';
import { IAdminRepository } from './interface/IAdminRepository.interface';
import Admin from '../repository/model/Admin.model';

@injectable()
export class AdminRepositoryImpl implements IAdminRepository {
  constructor() {
    console.log('Entrou no repository');
  }

  async findByEmailAndPassword(email: string, password: string) {
    const user = await Admin.findOne({ email: email, senha: password });
    return user;
  }
}
