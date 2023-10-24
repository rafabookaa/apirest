//importando mongoose
import mongoose from "mongoose";

//montando esquema de como os dados serão organizados no DB
const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    pagina: { type: Number },
  },
  { versionKey: false }
);

//criando o modelo.. "livros" é a coleção no DB e livroSchema é o que vai pra dentro da coleção
const livro = mongoose.model("livros", livroSchema);

//exportando livro
export default livro;
