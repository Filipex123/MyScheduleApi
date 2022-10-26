export interface IUserRepository {
  findByEmailAndPassword(email: string, password: string): Promise<boolean>;
  create(object: any): any;
  delete(id: number): boolean;
  update(object: any): any;
  findById(id: number): any;
}
