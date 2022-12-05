
export interface IDeleteExamUseCase {
  execute(examId: string): Promise<void>;
}
