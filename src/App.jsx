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
        {/* <Route path='/SmiskisMiddleHeader' element={<SmiskisMiddleHeader/>}/>
        <Route path='/SmiskisLowMiddleHeader' element={<SmiskisLowMiddleHeader/>}/>
        <Route path='/SmiskisBottomMiddleHeader' element={<SmiskisBottomMiddleHeader/>}/>
        <Route path='/SmiskisBottomHeader' element={<SmiskisBottomHeader/>}/> */}
      </Routes>
      <Footer />
    </BrowserRouter>
    {/* <div className="App">
      <div>
        <NavBar />
        <Smiskis />
        <SmiskisMiddleHeader />
        <SmiskisLowMiddleHeader />
        <SmiskisBottomMiddleHeader />
        <SmiskisLowMiddleHeader />
        <Footer />
      </div>
    </div> */}
    </>
  );
}

export default App;
