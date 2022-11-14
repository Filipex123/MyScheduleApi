import { IExam } from "repository/model/Exam.model";

export interface IExamRepository {
  create(name: string, completionDate: string): Promise<IExam>;
  findAll(): Promise<IExam[]>
  addMatterToExam(examId: string, matterName: string): Promise<IExam | null>
  addSubjectToMatter(examId: string, matterId: string, subjectName: string): Promise<IExam | null>
}
