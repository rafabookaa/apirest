import livro from "../models/livro.js";

class LivroController {
  
  //requisição para ver livros no banco 
  static async listarLivros (req, res) {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
  }; 

  //criar livros no banco 
  static async cadastrarLivro (req, res) {
    try {
      const novoLivro = await livro.create(req.body)
      res.status(201).json({message: "Livro cadastrado com sucesso!", livro: novoLivro})
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`})
    }
    
  }
}

export default LivroController;
