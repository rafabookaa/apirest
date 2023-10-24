import livro from "../models/livro.js";

class LivroController {
  //requisição para ver livros no banco
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha na requisição`});
    }
  };

  //listando livro
  static async listarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha na requisição`});
    }
  };

  //criar livros no banco
  static async cadastrarLivro(req, res) {
    try {
      const novoLivro = await livro.create(req.body);
      res
        .status(201)
        .json({ message: "Livro cadastrado com sucesso!", livro: novoLivro });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar livro` });
    }
  };

  //atualizando o livro 
  static async AtualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "Livro atualizado!"});
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha na requisição`});
    }
  };

  static async excluirLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({message: "Livro excluido"});
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha na exclusao`});
    }
  };

  
}

export default LivroController;
