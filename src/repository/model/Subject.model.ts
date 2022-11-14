import mongoose, { Schema } from 'mongoose';

export interface ISubject extends mongoose.Document {
  nome: string
};

export const SubjectSchema = new Schema({
  nome: { type: String, required: true },
});
