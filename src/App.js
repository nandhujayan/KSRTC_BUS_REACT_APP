import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddTravel } from './components/AddTravel';
import { ViewTravel } from './components/ViewTravel';
import { Search } from './components/Search';
import { Delete } from './components/Delete';
import { Login } from './components/Login';
import { Registration } from './components/Registration';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='' element={<Login/>}/>
      <Route path='Registration' element={<Registration/>}/>
      <Route path='AddTravel' element={<AddTravel/>}/>
      <Route path='ViewTravel' element={<ViewTravel/>}/>
      <Route path='Search' element={<Search/>}/>
    
      <Route path='Delete' element={<Delete/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
