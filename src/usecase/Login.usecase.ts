import { InjectionEnum } from '../entity/Injection.enum';
import { injectable, inject } from 'inversify';
import { ILogineUseCase } from './interface/Login.usecase.interface';
import { IUserRepository } from '../repository/interface/IUserRepository.interface.ts';

@injectable()
export class LogineUseCase implements ILogineUseCase {
  constructor(
    @inject(InjectionEnum.UserRepositoryImpl)
    private readonly userRepository: IUserRepository,
  ) {
    console.log('Entrou no usecase');
  }
  async execute(email: string, password: string): Promise<boolean> {
    return await this.userRepository.findByEmailAndPassword(email, password);
  }
}
