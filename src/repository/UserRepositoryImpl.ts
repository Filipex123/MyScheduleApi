import { injectable } from 'inversify';
import { IUserRepository } from './interface/IUserRepository.interface.ts';
import UserModel from '../repository/model/User.model';
import mongoose, { Document } from 'mongoose';
import examsDone from '../models/examsDone.json';

@injectable()
export class UserRepositoryImpl implements IUserRepository {
  constructor() {
    console.log('Entrou no repository');
  }

  async checkExam(examId: string, userId: string, newValue: boolean) {
    console.log(`EXAM ID = ${examId} | USER ID = ${userId} | NEW VALUE = ${newValue}`);

    await UserModel.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(userId) },
      { $set: { ['vestibulares.$[item].isChecked']: newValue } },
      {
        arrayFilters: [{ 'item._id': new mongoose.Types.ObjectId(examId) }],
      },
    );
  }

  checkMatter(matterId: string, userId: string) {
    throw new Error('Method not implemented.');
  }
  checkSubject(subId: string, userId: string) {
    throw new Error('Method not implemented.');
  }

  async findByEmailAndPassword(email: string, password: string): Promise<Document> {
    try {
      const user = await UserModel.findOne({ email: email, senha: password });

      if (!user) {
        return {} as unknown as Document;
      }

      return user;
    } catch (err: any) {
      console.log(JSON.stringify(err));
      throw err;
    }
  }

  create() {
    throw new Error('Method not implemented.');
  }
  delete(): boolean {
    throw new Error('Method not implemented.');
  }
  update() {
    throw new Error('Method not implemented.');
  }
  findById() {
    throw new Error('Method not implemented.');
  }

  getFinishedExams() {
    return examsDone;
  }
}
