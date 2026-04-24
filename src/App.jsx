
 import './style/globel.css'
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Home from './page/Home';
import Contact from './page/Contact';
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    
    // <div className="app">
    
    //   <Header />
    //   <IntroSection />
    //   <AboutSection />
    //   <SkillsSection />
    //   <ProjectsSection />
    //   <ContactSection />
    //   <Footer />
    // </div>
    <Routes>
      <Route path='/' element={< Home />} />
      <Route path='/contact' element={< Contact />} />


    </Routes>
    
  );
}
