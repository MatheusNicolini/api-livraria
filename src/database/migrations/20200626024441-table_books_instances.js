'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('books_instances', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      imprint: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM,
        values: ['disponivel', 'alugado', 'vendido'],
        allowNull: false
      },
      due_back: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      id_book: {
        type: Sequelize.INTEGER,
        references: { model: 'books', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('books_instances');
  }
};