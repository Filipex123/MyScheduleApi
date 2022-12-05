import { injectable } from 'inversify';
import { IExamRepository } from './interface/IExamRepository.interface'
import Exam from '../repository/model/Exam.model';

@injectable()
export class ExamRepositoryImpl implements IExamRepository {
  constructor() {
    console.log('Entrou no repository');
  }

  async create(name: string, completionDate: string) {
    const exam = await Exam.create({ nome: name, dataRealizacao: completionDate });
    return exam;
  }

  async delete(examId: string) {
    await Exam.deleteOne({ _id: examId });
  }

  async findAll() {
    const exams = await Exam.find();
    return exams;
  }

  async addMatterToExam(examId: string, matterName: string) {
    return await Exam.findOneAndUpdate(
      { 
        _id: examId
      },
      {
        $push: { materias: { nome: matterName }}
      }, 
      {
        new: true
      }
    )
  }

  async addSubjectToMatter(examId: string, matterId: string, subjectName: string) {
    return await Exam.findOneAndUpdate(
      {
        _id: examId, "materias._id": matterId
      }, 
      {
        $push: {
          "materias.$.assuntos": {
            nome: subjectName
          }
        }
      },
      {
        new: true
      }
    )
  }
}
