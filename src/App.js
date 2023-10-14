
import './App.css';
import { Element } from "react-scroll";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div >
      <Navbar/>
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About/>
      </Element>
      <Element name="menu">
        <Menu/>
      </Element>
      <Element name="gallery">
        <Gallery/>
      </Element>
      <Element name="contact">
        <Contact/>
      </Element>
    </div>
  );
}

export default App;
