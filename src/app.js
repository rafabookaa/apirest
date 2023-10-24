
import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js"


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
routes(app);

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro excluido!")

})

export default app;



