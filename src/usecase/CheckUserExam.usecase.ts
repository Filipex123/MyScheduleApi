import { InjectionEnum } from '../entity/Injection.enum';
import { inject, injectable } from 'inversify';
import { IUserRepository } from '../repository/interface/IUserRepository.interface.ts';
import { ICheckUserExam } from '../usecase/interface/CheckUserExam.usecase.interface';

@injectable()
export class CheckUserExamUseCase implements ICheckUserExam {
  constructor(
    @inject(InjectionEnum.UserRepositoryImpl)
    private readonly userRepository: IUserRepository,
  ) {
    console.log('Entrou no CheckUserExamUseCase');
  }
  async execute(examId: string, userId: string, newValue: boolean): Promise<void> {
    try {
      return this.userRepository.checkExam(examId, userId, newValue);
    } catch (err: any) {
      throw new Error('Erro to check exam on the database');
    }
  }
}
