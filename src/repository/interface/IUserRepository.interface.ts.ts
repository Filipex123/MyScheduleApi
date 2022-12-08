import { Document } from 'mongoose';

export interface IUserRepository {
  findByEmailAndPassword(email: string, password: string): Promise<Document>;
  create(object: any): any;
  delete(id: number): boolean;
  update(object: any): any;
  findById(id: number): any;
  checkExam(examId: string, userId: string, newValue: boolean): any;
  checkMatter(matterId: string, userId: string): any;
  checkSubject(subId: string, userId: string): any;
}
