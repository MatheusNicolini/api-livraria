import Author from '../models/Author';

class AuthorController {
  async store(req, res) {
    const { name, first_name, family_name, date_of_birth, date_of_death, lifespan, url } = req.body;

    const response = await Author.create({
      name,
      first_name,
      family_name,
      date_of_birth,
      date_of_death,
      lifespan,
      url
    });

    return res.status(200).json({ message: 'Autor cadastrado com sucesso!', author: response, success: true });
  }

  async index(req, res) {
    const response = await Author.findAll();

    return res.status(200).json(response);
  }

  async show(req, res) {
    const { id } = req.params;

    const response = await Author.findByPk(id);

    return res.status(200).json(response);
  }
  
  async update(req, res) {
    const { id } = req.params;
    const { name, first_name, family_name, date_of_birth, date_of_death, lifespan, url } = req.body;

    const author = await Author.findByPk(id);

    const response = await author.update({
      name,
      first_name,
      family_name,
      date_of_birth,
      date_of_death,
      lifespan,
      url
    });

    return res.status(200).json({ message: 'Autor atualizado com sucesso!', author: response, success: true });
  }

  async destroy(req, res) {
    const { id } = req.params;

    const IdList = id.split(',');

    IdList.map(async id => {
      await Author.destroy({ where: { id } });
    });

    return res.json({
      message: 'Autor(es) deletado(s) com sucesso!',
      success: true,
    });
  }
}

export default new AuthorController();