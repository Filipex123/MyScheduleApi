import mongoose, { Schema } from 'mongoose';

const ExamSchema = new Schema({
  nome: { type: String, required: true },
  dataRealizacao: { type: String, required: true },
});

const ExamModel = mongoose.model('exams', ExamSchema);

export default ExamModel;
