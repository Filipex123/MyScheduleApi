import { injectable } from 'inversify';
import { IExamRepository } from './interface/IExamRepository.interface'
import Exam from '../repository/model/Exam.model';

@injectable()
export class ExamRepositoryImpl implements IExamRepository {
  constructor() {
    console.log('Entrou no repository');
  }

  async create(name: string, completionDate: string): Promise<boolean> {
    const exam = await Exam.create({ nome: name, dataRealizacao: completionDate });
    return !!exam;
  }
}
