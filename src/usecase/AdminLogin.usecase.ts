import { InjectionEnum } from '../entity/Injection.enum';
import { injectable, inject } from 'inversify';
import { IAdminLoginUseCase } from './interface/AdminLogin.usecase.interface';
import { IAdminRepository } from '../repository/interface/IAdminRepository.interface';

@injectable()
export class AdminLoginUseCase implements IAdminLoginUseCase {
  constructor(
    @inject(InjectionEnum.AdminRepositoryImpl)
    private readonly adminRepository: IAdminRepository,
  ) {
    console.log('Entrou no usecase');
  }

  async execute(email: string, password: string) {
    return await this.adminRepository.findByEmailAndPassword(email, password);
  }
}
