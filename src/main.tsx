import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import Home from '../app/page';
import '../app/globals.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Elemento raiz não encontrado.');
}

const app = (
  <StrictMode>
    <Home />
  </StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
