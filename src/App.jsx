import './App.css';
import Smiskis from './components/Smiskis';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Smiskis/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
