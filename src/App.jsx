
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
   <div>
    <Header/>
    <Home/>
     

    
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    
   
</div>
  )
}

export default App
