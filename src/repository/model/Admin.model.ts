import mongoose, { Schema } from 'mongoose';

const AdminSchema = new Schema({
  nome: { type: String, required: true, maxLength: 100 },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  matricula: { type: String, required: true },
});

const AdminModel = mongoose.model('admins', AdminSchema);

export default AdminModel;
