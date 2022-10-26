export interface IAdminRepository {
    findByEmailAndPassword(email: string, password: string): Promise<boolean>;
}
  