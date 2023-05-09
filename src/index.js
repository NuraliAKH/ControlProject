import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Asia from './components/Obshiy/Asia/Asia';
import Disnayland from './components/Obshiy/Disnayland/Disnayland';
import {BrowserRouter , Routes ,Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/asia' element={<Asia/>}/>
      <Route path='/disnayland' element={<Disnayland/>}/>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

