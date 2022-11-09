export interface ICreateExamUseCase {
  execute(name: string, completionDate: string): Promise<boolean>;
}
