import { Router } from 'express';
import GenreController from './app/controllers/GenreController';
import AuthorController from './app/controllers/AuthorController';
// import BookController from './app/controllers/BookController';

const routes = new Router();

routes.post('/genres', GenreController.store); // Cadastrar Gênero
routes.get('/genres', GenreController.index); // Listar Gêneros
routes.get('/genres/:id', GenreController.show); // Listar um único Gênero
routes.put('/genres/:id', GenreController.update); // Atualizar Gênero
routes.delete('/genres/:id', GenreController.destroy); // Apagar Gênero

routes.post('/authors', AuthorController.store); // Cadastrar Autor
routes.get('/authors', AuthorController.index); // Listar Autores
routes.get('/authors/:id', AuthorController.show); // Listar um único Autor
routes.put('/authors/:id', AuthorController.update); // Atualizar Autor
routes.delete('/authors/:id', AuthorController.destroy); // Apagar Autor

// routes.get('/books', BookController.index); // Listar Livros
// routes.post('/books', BookController.store);  // Cadastrar Livro
// routes.put('/books/:id', BookController.update); // Atualizar Livro
// routes.delete('/books/:id', BookController.destroy); // Apagar Livro

export default routes;