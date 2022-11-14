import { InjectionEnum } from '../entity/Injection.enum';
import { injectable, inject } from 'inversify';
import { IAddMatterToExamUseCase } from './interface/AddMatterToExam.usecase.interface';
import { IExamRepository } from '../repository/interface/IExamRepository.interface';

@injectable()
export class AddMatterToExamUseCase implements IAddMatterToExamUseCase {
  constructor(
    @inject(InjectionEnum.ExamRepositoryImpl)
    private readonly examRepository: IExamRepository,
  ) {
    console.log('Entrou no usecase');
  }

  async execute(examId: string, matterName: string) {
    return await this.examRepository.addMatterToExam(examId, matterName);
  }
}
