import {Route , Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import 'tailwindcss/tailwind.css';
import Error from './components/Error/Error';
import Projects from './components/Proyects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';

function App() {
  

  return (
    <div className="bg-lime-200">
     <NavBar />
      <Routes>
        <Route path='/' element={<AboutMe/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/TechSkills' element={<Skills/>}/>
        <Route path=':error' element={<Error/>}/>
      </Routes>

    </div>
  )
}

export default App
