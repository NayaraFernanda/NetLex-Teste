import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Login from './pages/Login';
import Metodo1 from './pages/Metodo1';
import Metodo2 from './pages/Metodo2';
import Metodo3 from './pages/Metodo3';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Login />} />
                    <Route path='/metodo1' element={<Metodo1 />} />
                    <Route path='/metodo2' element={<Metodo2 />} />
                    <Route path='/metodo3' element={<Metodo3 />} />
                </Route>
            </Routes>
        </BrowserRouter>
        
    );
}

export default App;
