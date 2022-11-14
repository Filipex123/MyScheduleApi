import mongoose, { Schema } from 'mongoose';
import { IMatter, MatterSchema } from './Matter.model';

export interface IExam extends mongoose.Document {
  nome: string
  dataRealizacao: string
  materias: IMatter
};

const ExamSchema = new Schema({
  nome: { type: String, required: true },
  dataRealizacao: { type: Date, required: true },
  materias: { type: [MatterSchema], required: true },
});

const ExamModel = mongoose.model<IExam>('exams', ExamSchema);

export default ExamModel;
