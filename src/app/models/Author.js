import Sequelize, { Model } from 'sequelize';

class Author extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        first_name: Sequelize.STRING,
        family_name: Sequelize.STRING,
        date_of_birth: Sequelize.DATEONLY,
        date_of_death: Sequelize.DATEONLY,
        lifespan: Sequelize.STRING,
        url: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Author;