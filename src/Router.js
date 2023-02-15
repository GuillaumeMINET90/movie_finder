import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Catalog from './pages/Catalog.js';
import './Router.css';

export default function Router() {
  return (
    <BrowserRouter className="App">
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/catalogue' element={<Catalog />} />
    </Routes>
    </BrowserRouter>
  );
}

