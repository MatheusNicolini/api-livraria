import { Router } from 'express';

// import ProviderController from './app/controllers/ProviderController';

const routes = new Router();

routes.get('/teste', (req, res) => {
  return res.json({ message: 'success' });
});

// routes.get('/providers', ProviderController.index);
// routes.post('/providers', ProviderController.store);
// routes.put('/providers/:id', ProviderController.update);
// routes.delete('/providers/:id', ProviderController.destroy);

export default routes;