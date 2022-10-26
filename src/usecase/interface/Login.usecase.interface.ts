export interface ILogineUseCase {
  execute(email: string, password: string): Promise<boolean>;
}
