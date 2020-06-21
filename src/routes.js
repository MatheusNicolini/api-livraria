import { Router } from 'express';
import GenreController from './app/controllers/GenreController';
// import BookController from './app/controllers/BookController';

const routes = new Router();

routes.post('/genres', GenreController.store); // Cadastrar Gênero
routes.get('/genres', GenreController.index); // Listar Gêneros
routes.get('/genres/:id', GenreController.show); // Listar um único Gênero
routes.put('/genres/:id', GenreController.update); // Atualizar Gênero
routes.delete('/genres/:id', GenreController.destroy); // Apagar Gênero

// routes.get('/books', BookController.index); // Listar Livros
// routes.post('/books', BookController.store);  // Cadastrar Livro
// routes.put('/books/:id', BookController.update); // Atualizar Livro
// routes.delete('/books/:id', BookController.destroy); // Apagar Livro

export default routes;