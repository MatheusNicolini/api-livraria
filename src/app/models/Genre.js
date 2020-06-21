import Sequelize, { Model } from 'sequelize';

class Genre extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        url: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'genres'
      }
    );

    return this;
  }
}

export default Genre;