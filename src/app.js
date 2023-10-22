
import express from "express";

const app = express();

//convertendo a string recebida no post em json
app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis"
  },
  {
    id: 2,
    titulo: "O Hobbit"
  }
]

//criando o get, com status 200 e enviando para a pagina http
app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

//transdo a resposta do array livros em json
app.get("/livros", (req, res) => {
  res.status(220).json(livros)
});

//rota para cadastro de novos livros.
app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso!")
});

export default app;

