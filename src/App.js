import logo from './logo.svg';
import './App.css';
import Addshop from './components/Addshop';
import SearchShop from './components/SearchShop';
import ViewShop from './components/ViewShop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Addshop/>}/>
      <Route  path='/search' element={<SearchShop/>}/>
      <Route  path='/view' element={<ViewShop/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
