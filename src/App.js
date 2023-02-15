import { Outlet } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import './App.css';

export default function App() {
  return (
    <>
    <NavBar />
    <Outlet />
    </>
  );
}


