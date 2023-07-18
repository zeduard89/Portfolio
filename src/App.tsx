import {Route , Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import 'tailwindcss/tailwind.css';
import Error from './components/Error/Error';
import AboutMe from './components/AboutMe/AboutMe';
// import Projects from './components/Proyects/Projects';
// import Skills from './components/Skills/Skills';
import Header from './components/Header/Header';

function App() {
  
    return (
      <div className="flex flex-col h-screen w-full ">
        <div className='relative z-[0]'>
          <NavBar />
        </div>
        <div className="relative z-[-5]">
          <Header/>
        </div>
        <div className="relative z-[-10]">
          <AboutMe/>
          {/* <Projects/>
          <Skills/>  */}
          <Routes>
            <Route path=':error' element={<Error/>}/>
          </Routes>
        </div>
      </div>
    );
}

export default App
