import './App.css';
import Home from './HOME/Home';
import Skills from './Skills/Skills'
import Education from './Education/Education'
import Projects from './Projects/Projects'
import Experiences from './Experiences/Experiences';
import Contact from './Contact/Contact'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
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
