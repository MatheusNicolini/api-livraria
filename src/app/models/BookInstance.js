import Sequelize, { Model } from 'sequelize';

class BookInstance extends Model {
  static init(sequelize) {
    super.init(
      {
        imprint: Sequelize.STRING,
        status: Sequelize.ENUM('disponivel', 'alugado', 'vendido'),
        due_back: Sequelize.DATEONLY,
        url: Sequelize.STRING,
        id_book: Sequelize.INTEGER
      },
      {
        sequelize,
        tableName: "books_instances"
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Book, { foreignKey: 'id_book', as: 'book' });
  }
}

export default BookInstance;