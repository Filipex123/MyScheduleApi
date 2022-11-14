import { IExam } from '../../repository/model/Exam.model'

export interface IAddMatterToExamUseCase {
  execute(examId: string, matterName: string): Promise<IExam | null>;
}
