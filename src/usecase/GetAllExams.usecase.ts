import { InjectionEnum } from '../entity/Injection.enum';
import { injectable, inject } from 'inversify';
import { IGetAllExamsUseCase } from './interface/GetAllExams.usecase.interface';
import { IExamRepository } from '../repository/interface/IExamRepository.interface';
import { IExam } from 'repository/model/Exam.model';

@injectable()
export class GetAllExamsUseCase implements IGetAllExamsUseCase {
  constructor(
    @inject(InjectionEnum.ExamRepositoryImpl)
    private readonly examRepository: IExamRepository,
  ) {
    console.log('Entrou no usecase');
  }

  async execute(): Promise<IExam[]> {
    return await this.examRepository.findAll();
  }
}
