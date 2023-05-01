import './App.css';
import Scrole_title from './components/Scrole/Scrole_title';
import Encient from './components/Encient/Encient';
import Servises from './components/Servises/Servises';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Scrole_title/>
      <Encient/>
      <Servises/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
