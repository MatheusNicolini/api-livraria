import Book from '../models/Book';

class BookController {
  async store(req, res) {
    const { title, summary, isbn, url, id_author, id_genre } = req.body;
    
    const response = await Book.create({
      title,
      summary,
      isbn,
      url,
      id_author,
      id_genre
    });

    return res.status(200).json({ message: 'Livro cadastrado com sucesso!', book: response, success: true });
  }

  async index(req, res) {
    const response = await Book.findAll();

    return res.status(200).json(response);
  }

  // Não funciona
  async show(req, res) {
    const { id } = req.params;

    const response = await Book.findByPk(id);

    return res.status(200).json(response);
  }
  
  async update(req, res) {
    const { id } = req.params;
    const { title, summary, isbn, url, id_author, id_genre } = req.body;

    const book = await Book.findByPk(id);

    const response = await book.update({
      title,
      summary,
      isbn,
      url,
      id_author,
      id_genre
    });

    return res.status(200).json({ message: 'Livro atualizado com sucesso!', book: response, success: true });
  }

  async destroy(req, res) {
    const { id } = req.params;

    const IdList = id.split(',');

    IdList.map(async id => {
      await Book.destroy({ where: { id } });
    });

    return res.json({
      message: 'Livro(s) deletado(s) com sucesso!',
      success: true,
    });
  }
}

export default new BookController();