import { InjectionEnum } from '../entity/Injection.enum';
import { injectable, inject } from 'inversify';
import { IAddSubjectToMatterUseCase } from './interface/AddSubjectToMatter.usecase.interface';
import { IExamRepository } from '../repository/interface/IExamRepository.interface';

@injectable()
export class AddSubjectToMatterUseCase implements IAddSubjectToMatterUseCase {
  constructor(
    @inject(InjectionEnum.ExamRepositoryImpl)
    private readonly examRepository: IExamRepository,
  ) {
    console.log('Entrou no usecase');
  }

  async execute(examId: string, matterId: string, subjectName: string) {
    return await this.examRepository.addSubjectToMatter(examId, matterId, subjectName);
  }
}
