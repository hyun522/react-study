import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Counter from './pages/Counter';
import Todolist from './pages/ToDoList';
import Star from './pages/star';
import Practice from './Practice';
import Drag from './pages/Drag';
import StopWatch from './pages/StopWatch';
import OpenWeather from './pages/OpenWeather';
import './scss/global.module.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/calculator' element={<Calculator />} />
      <Route path='/todolist' element={<Todolist />} />
      <Route path='/star' element={<Star />} />
      <Route path='/drag' element={<Drag />} />
      <Route path='/stopwatch' element={<StopWatch />} />
      <Route path='/practice' element={<Practice />} />
      <Route path='/openweather' element={<OpenWeather />} />
    </Routes>
  </BrowserRouter>
);
