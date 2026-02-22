import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Project from './sections/Project'
import Contact from './sections/Contact'

function App() {
  return (
    <BrowserRouter>
        <div className='w-full bg-[#0F111A]'>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<>
              <HeroSection></HeroSection>
              <About></About>
              <Skills></Skills>
              <Experience></Experience>
              <Project></Project>
            </>}/>
            <Route path='/contact' element={<Contact></Contact>}/>
          </Routes>
          
      </div>
    </BrowserRouter>
    
  )
}

export default App
