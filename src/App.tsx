import {Route , Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import 'tailwindcss/tailwind.css';
import Error from './components/Error/Error';
import Picture from './components/AboutMe/Picture'
import AboutMe from './components/AboutMe/AboutMe';
import Projects2 from './components/Proyects/Projects2';
import Skills from './components/Skills/Skills';
import Header from './components/Header/Header';

function App() {

  const handleScroll = (sectionId: string) => { // Agrega el tipo explícito 'string' para sectionId
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 300;
      window.scrollTo({
        top: section.offsetTop + offset,
        behavior: 'smooth',
      });
    }
  };
  
    return (
      <div className="flex flex-col h-screen w-full ">
        <div className='relative z-[0]'>
          <NavBar onScroll={handleScroll}/>
        </div>
        <div className="relative z-[-5]">
          <Header/>
        </div>
        <div className="relative z-[-10]">
          <Picture/>
          <AboutMe />
          <Projects2 />
          <Skills />
        </div>
          <Routes>
            <Route path=':' element={<Error />} />
          </Routes>
      </div>
    );
}

export default App

// import {Route , Routes} from 'react-router-dom';
// import NavBar from './components/NavBar/NavBar';
// import 'tailwindcss/tailwind.css';
// import Error from './components/Error/Error';
// import Picture from './components/AboutMe/Picture'
// import AboutMe from './components/AboutMe/AboutMe';
// import Projects2 from './components/Proyects/Projects2';
// import Skills from './components/Skills/Skills';
// import Header from './components/Header/Header';

// function App() {
  
//     return (
//       <div className="flex flex-col h-screen w-full ">
//         <div className='relative z-[0]'>
//           <NavBar/>
//         </div>
//         <div className="relative z-[-5]">
//           <Header/>
//         </div>
//         <div className="relative z-[-10]">
//           <Picture/>
//           <AboutMe/>
//           <Projects2/>
//           <Skills/>
//           <Routes>
//             <Route path=':error' element={<Error/>}/>
//           </Routes>
//         </div>
//       </div>
//     );
// }

// export default App
