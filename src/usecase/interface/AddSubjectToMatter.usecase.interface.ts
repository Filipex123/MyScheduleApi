import { IExam } from '../../repository/model/Exam.model'

export interface IAddSubjectToMatterUseCase {
  execute(examId:string, matterId: string, subjectName: string): Promise<IExam | null>;
}
