import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './Calculator.js'
import Counter from './Counter.js';
import Todolist from './Todolist.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes > 
          <Route path='/' element={<App />}/>
          <Route path="/counter" element={<Counter />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/todolist" element={<Todolist />} />
        </Routes>
    </BrowserRouter>
);

