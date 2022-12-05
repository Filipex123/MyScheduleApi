import { InjectionEnum } from '../entity/Injection.enum';
import { injectable, inject } from 'inversify';
import { IDeleteExamUseCase } from './interface/DeleteExam.usecase.interface';
import { IExamRepository } from '../repository/interface/IExamRepository.interface';

@injectable()
export class DeleteExamUseCase implements IDeleteExamUseCase {
  constructor(
    @inject(InjectionEnum.ExamRepositoryImpl)
    private readonly examRepository: IExamRepository,
  ) {
    console.log('Entrou no usecase');
  }

  async execute(examId: string) {
    await this.examRepository.delete(examId);
  }
}
