import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  nome: { type: String, required: true, maxLength: 100 },
  dataNasc: { type: Date, required: true, maxLength: 10 },
  genero: { type: String },
  nivelEstudo: { type: String },
  moradia: {
    cidade: { type: String },
    estado: { type: String },
  },
  email: { type: String },
  senha: { type: String },
  vestibulares: [
    {
      _id: { type: String },
      nome: { type: String },
      materias: [
        {
          nome: { type: String },
          dataRealizacao: { type: Date },
          assuntos: [
            {
              nome: { type: String },
            },
          ],
        },
      ],
    },
  ],
});

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;
