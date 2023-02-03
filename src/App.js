import './App.css';
import Home from './HOME/Home';
import Skills from './Skills/Skills'
import Education from './Education/Education'
import Projects from './Projects/Projects'
import Experiences from './Experiences/Experiences';
import Contact from './Contact/Contact'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import Social from './Social/Social';

function App() {

  useEffect(() => {
    AOS.init({
      easing: 'ease-in-sine',
      duration: 1000,
      once : 'true',
    });
  },[]);
  return (
    <div>
      <Social />
      <Navbar />
      <Home />
      <Skills />
      <Experiences />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
