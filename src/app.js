
import express from "express";

//conectando o arquivo da base de dados
import conectaNaDatabase from "./config/dbConnect.js";

//importando o arquivo livros
import livro from "../models/livro.js"

//criando uma conexao
const conexao = await conectaNaDatabase();

//evento de erro caso haja erro na conexao 
conexao.on("erro", (erro) => {
  console.error("Erro de conexao", erro);
})

//evento para validar conexao
conexao.once("open" , () => {
  console.log("Conexao com o banco feita com sucesso.")
})

const app = express();

//convertendo a string recebida no post em json
app.use(express.json());

//criando o get, com status 200 e enviando para a pagina http
app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

//consultando livros contidos no mongodb
app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find({});
  res.status(220).json(listaLivros);
});

//get para procurar um livro especifico pelo ID
app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
})


//rota para cadastro de novos livros.
app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso!")
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro excluido!")

})

export default app;



