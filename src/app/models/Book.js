import Sequelize, { Model } from 'sequelize';

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        summary: Sequelize.STRING,
        isbn: Sequelize.STRING,
        url: Sequelize.STRING,
        id_author: Sequelize.INTEGER,
        id_genre: Sequelize.INTEGER
      },
      {
        sequelize,
        tableName: "books"
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Author, { foreignKey: 'id_author', as: 'author' });
    this.belongsTo(models.Genre, { foreignKey: 'id_genre', as: 'genre' });
  }
}

export default Book;