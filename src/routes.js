import { Router } from 'express';
import GenreController from './app/controllers/GenreController';
import AuthorController from './app/controllers/AuthorController';
import BookController from './app/controllers/BookController';
import BookInstanceController from './app/controllers/BookInstanceController';

const routes = new Router();

routes.post('/genres', GenreController.store); // Cadastrar Gênero
routes.get('/genres', GenreController.index); // Listar Gêneros
routes.get('/genres/:id', GenreController.show); // Listar um único Gênero
routes.put('/genres/:id', GenreController.update); // Atualizar Gênero
routes.delete('/genres/:id', GenreController.destroy); // Apagar Gênero(s)

routes.post('/authors', AuthorController.store); // Cadastrar Autor
routes.get('/authors', AuthorController.index); // Listar Autores
routes.get('/authors/:id', AuthorController.show); // Listar um único Autor
routes.put('/authors/:id', AuthorController.update); // Atualizar Autor
routes.delete('/authors/:id', AuthorController.destroy); // Apagar Autor(es)

routes.post('/books', BookController.store);  // Cadastrar Livro
routes.get('/books', BookController.index); // Listar Livros
// routes.get('/books/:id', BookController.show); // Listar um único Livro
routes.put('/books/:id', BookController.update); // Atualizar Livro
routes.delete('/books/:id', BookController.destroy); // Apagar Livro(s)

routes.post('/books-instances', BookInstanceController.store);  // Cadastrar Instância do Livro
routes.get('/books-instances', BookInstanceController.index); // Listar Instâncias dos Livros
// routes.get('/books-instances/:id', BookInstanceController.show); // Listar uma única Instância do Livro
routes.put('/books-instances/:id', BookInstanceController.update); // Atualizar Instância do Livro
routes.delete('/books-instances/:id', BookInstanceController.destroy); // Apagar Instância(s) do(s) Livro(s)

export default routes;