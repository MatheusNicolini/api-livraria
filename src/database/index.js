import Sequelize from 'sequelize';

import Genre from '../app/models/Genre';
import Author from '../app/models/Author';

import databaseConfig from '../config/database';

const models = [Genre, Author];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();