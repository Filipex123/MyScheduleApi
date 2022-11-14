import mongoose, { Schema } from 'mongoose';
import { ISubject, SubjectSchema } from './Subject.model';

export interface IMatter extends mongoose.Document {
  nome: string
  assuntos: ISubject
};

export const MatterSchema = new Schema({
  nome: { type: String, required: true },
  assuntos: { type: [SubjectSchema], required: true },
});
