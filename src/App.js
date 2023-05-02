import './App.css';
import Scrole_title from './components/Scrole/Scrole_title';
import Encient from './components/Encient/Encient';
import Servises from './components/Servises/Servises';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Tours from './components/Tours/Tours';
import Header from './components/Header/Header';
import Disnayland from './components/Obshiy/Disnayland/Disnayland';

function App() {
  return (
    <div className="App g-0">
      {/* <Header/>
      <Scrole_title/>
      <Encient/>
      <Tours/>
      <Servises/>
      <Contact/>
      <Footer/> */}
      <Disnayland/>
    </div>
  );
}

export default App;
