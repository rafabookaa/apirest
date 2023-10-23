
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

//função para retornar se existe o ID que foi buscado
function buscaLivro (id) {
  return livros.findIndex(livro => {
    return livro.id === Number(id)
  })
}

//criando o get, com status 200 e enviando para a pagina http
app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

//transdo a resposta do array livros em json
app.get("/livros", (req, res) => {
  res.status(220).json(livros)
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

