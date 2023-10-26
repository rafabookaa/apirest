import {Autor} from "../models/Autor.js";

class autorController {
  //requisição para ver livros no banco
  static async listarAutores(req, res) {
    try {
      const listaAutores = await Autor.find({});
      res.status(200).json(listaAutores);
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha na requisição`});
    }
  };

  //listando livro
  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await Autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha na requisição`});
    }
  };

  //criar livros no banco
  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await Autor.create(req.body);
      res
        .status(201)
        .json({ message: "Livro cadastrado com sucesso!", livro: novoAutor });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar livro` });
    }
  };

  //atualizando o livro 
  static async AtualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await Autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "Livro atualizado!"});
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha na requisição`});
    }
  };

  static async excluirAutor(req, res) {
    try {
      const id = req.params.id;
      await Autor.findByIdAndDelete(id);
      res.status(200).json({message: "Livro excluido"});
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha na exclusao`});
    }
  };

  
}

export default autorController;
