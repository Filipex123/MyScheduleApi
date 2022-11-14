import { IExam } from '../../repository/model/Exam.model'

export interface IGetAllExamsUseCase {
  execute(): Promise<IExam[]>;
}
