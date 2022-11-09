import { InjectionEnum } from '../entity/Injection.enum';
import { injectable, inject } from 'inversify';
import { ICreateExamUseCase } from './interface/CreateExam.usecase.interface';
import { IExamRepository } from '../repository/interface/IExamRepository.interface';

@injectable()
export class CreateExamUseCase implements ICreateExamUseCase {
  constructor(
    @inject(InjectionEnum.ExamRepositoryImpl)
    private readonly examRepository: IExamRepository,
  ) {
    console.log('Entrou no usecase');
  }

  async execute(email: string, completionDate: string): Promise<boolean> {
    return await this.examRepository.create(email, completionDate);
  }
}
