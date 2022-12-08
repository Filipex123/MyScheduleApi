export interface ICheckUserExam {
  execute(examId: string, userId: string, newValue: boolean): Promise<void>;
}
