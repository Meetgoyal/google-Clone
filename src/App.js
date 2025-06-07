import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import SearchPage from './components/searchPage';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<HomePage/>}/>
        <Route path = '/search' element = {<SearchPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
