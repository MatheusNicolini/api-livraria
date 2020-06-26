import BookInstance from '../models/BookInstance';
import { validDate, transformDate } from '../../util/date';

class BookInstanceController {
  async store(req, res) {
    const { imprint, status, due_back, url, id_book } = req.body;

    if(!validDate(due_back))
      return res.status(400).json({ message: 'O formato aceito: dd/mm/yyyy'});
    
    if(status != 'disponivel' && status != 'alugado' && status != 'vendido')
      return res.status(400).json({ message: 'Valor de status inválido'});

    const response = await BookInstance.create({
      imprint,
      status,
      due_back: transformDate(due_back),
      url,
      id_book
    });

    return res.status(200).json({ message: 'Instância do livro cadastrada com sucesso!', book_instance: response, success: true });
  }

  async index(req, res) {
    const response = await BookInstance.findAll();

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
    const { imprint, status, due_back, url, id_book } = req.body;

    if(due_back) {
      if(!validDate(due_back))
        return res.status(400).json({ message: 'O formato aceito: dd/mm/yyyy'});
    }

    if(status != 'disponivel' && status != 'alugado' && status != 'vendido')
      return res.status(400).json({ message: 'Valor de status inválido'});

    const book_instance = await BookInstance.findByPk(id);

    const response = await book_instance.update({
      imprint,
      status,
      due_back: (due_back) ? transformDate(due_back) : due_back,
      url,
      id_book
    });

    return res.status(200).json({ message: 'Instância do livro atualizada com sucesso!', book_instance: response, success: true });
  }

  async destroy(req, res) {
    const { id } = req.params;

    const IdList = id.split(',');

    IdList.map(async id => {
      await BookInstance.destroy({ where: { id } });
    });

    return res.json({
      message: 'Instancia(s) do(s) livro(s) deletado(s) com sucesso!',
      success: true,
    });
  }
}

export default new BookInstanceController();