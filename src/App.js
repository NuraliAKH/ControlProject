import './App.css';
import Main from './components/Header/Header';
import Scrole_title from './components/Scrole/Scrole_title';
import Encient from './components/Encient/Encient';
import Servises from './components/Servises/Servises'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Tours from './components/Tours/Tours';

function App() {
  return (
    <div className="App g-0">
      <Main/>
      <Scrole_title/>
      <Encient/>
      <Tours/>
      <Servises/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
