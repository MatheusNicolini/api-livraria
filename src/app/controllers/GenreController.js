import Genre from '../models/Genre';

class GenreController {
  async store(req, res) {
    const { name, url } = req.body;

    const response = await Genre.create({
      name,
      url
    });

    return res.status(200).json({ message: 'Gênero cadastrado com sucesso!', genre: response, success: true });
  }

  async index(req, res) {
    const response = await Genre.findAll();

    return res.status(200).json(response);
  }

  async show(req, res) {
    const { id } = req.params;

    const response = await Genre.findByPk(id);

    return res.status(200).json(response);
  }
  
  async update(req, res) {
    const { id } = req.params;
    const { name, url } = req.body;

    const genre = await Genre.findByPk(id);

    const response = await genre.update({
      name,
      url
    });

    return res.status(200).json({ message: 'Gênero atualizado com sucesso!', genre: response, success: true });
  }

  async destroy(req, res) {
    const { id } = req.params;

    const IdList = id.split(',');

    IdList.map(async id => {
      await Genre.destroy({ where: { id } });
    });

    return res.json({
      message: 'Gênero(s) deletado(s) com sucesso!',
      success: true,
    });
  }
}

export default new GenreController();