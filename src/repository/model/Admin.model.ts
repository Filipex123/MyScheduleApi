import mongoose, { Schema } from 'mongoose';

export interface IAdmin extends mongoose.Document {
  nome: string
  email: string
  senha: string
  matricula: string
};

const AdminSchema = new Schema({
  nome: { type: String, required: true, maxLength: 100 },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  matricula: { type: String, required: true },
});

const AdminModel = mongoose.model<IAdmin>('admins', AdminSchema);

export default AdminModel;
