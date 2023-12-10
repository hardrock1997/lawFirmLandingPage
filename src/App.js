import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import PracticeAreas from './components/PracticeAreas';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <Routes>
            <Route path='*' element={<h1>Not found</h1>}/>
            <Route path='/' element={<Main/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/practiceareas' element={<PracticeAreas/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
      </Routes>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
