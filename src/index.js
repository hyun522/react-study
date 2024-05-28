import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './pages/Calculator.js';
import Counter from './pages/Counter.js';
import Todolist from './pages/ToDoList.js';
import Star from './pages/star.tsx';
import Practice from './Practice.js';
import Drag from './pages/Drag.js';
import StopWatch from './pages/StopWatch.js';
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
    </Routes>
  </BrowserRouter>
);
