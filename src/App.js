
import './App.css';
import { Element } from "react-scroll";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import CustomerReview from './Components/CustomerReview/CustomerReview';

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
      <Element name="review">
        <CustomerReview/>
      </Element>
      <Element name="contact">
        <Contact/>
      </Element>
      <Footer/>
    </div>
  );
}

export default App;
