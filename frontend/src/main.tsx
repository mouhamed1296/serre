import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import App from './App';
import Dashboard from '../pages/Dashboard';
import Connexion from '../pages/Connexion';
import { Historique } from './components/Historique/Historique';
import Parametrage from './components/Parametrage/Parametrage';

/* Routeur pour la navigation entre les différents interfaces */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="history" element={<Historique />} />
        <Route path="parametrage" element={<Parametrage />} />
      </Route>
      <Route index element={<Connexion />} />
      <Route path="*" element={<div>Not found</div>} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
