import { IExam } from "repository/model/Exam.model";

export interface ICreateExamUseCase {
  execute(name: string, completionDate: string): Promise<IExam>;
}
