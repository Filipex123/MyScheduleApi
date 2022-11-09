export interface IExamRepository {
  create(name: string, completionDate: string): Promise<boolean>;
}
