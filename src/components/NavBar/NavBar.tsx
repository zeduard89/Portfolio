import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import linkedIn from '../utils/AboutMe/linkedIn.png'
import gmail from '../utils/AboutMe/gmail.png'
import github from '../utils/AboutMe/github2.png'
import instagram from '../utils/AboutMe/instagram.png'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='opacity-95 animate-slideDown bg-slate-800 w-full fixed sm:flex flex-row h-[3.3rem] '>
      <button
        data-collapse-toggle="navbar-hamburger"
        type="button"
        className="sm:hidden inline-flex items-center justify-center p-2 w-10 h-9 ml-3 mt-2 mb-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-hamburger"
        aria-expanded={isMenuOpen}
        onClick={handleMenuToggle}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } ml-3 sm:ml-0 w-full sm:flex sm:items-center justify-center sm:w-full`}
        id="navbar-hamburger"
      >
        <ul className=" bg-slate-800 divide-gray-100 w-1/3 sm:bg-transparent  flex flex-col sm:flex-row text-center justify-center rounded-md border-2 sm:border-none border-slate-300">
          <li className='hover:bg-gray-500 sm:hover:bg-transparent w-full rounded-md '>
            <button
              className='btnNav text-white font-bold sm:w-48 w-24 h-8 sm:hover:text-blue-700 '
              onClick={closeMenu}
            >
              <NavLink className="sm:text-2xl font-headerFont" to='/'>Sobre Mi</NavLink>
            </button>
          </li>
          <li className='hover:bg-gray-500 sm:hover:bg-transparent w-full rounded-md '>
            <button
              className='btnNav text-white font-bold sm:w-48 w-24 h-8 sm:hover:text-blue-700'
              onClick={closeMenu}
            >
              <NavLink className="sm:text-2xl font-headerFont " to='/Projects'>Proyectos</NavLink>
            </button>
          </li>
          <li className='hover:bg-gray-500 sm:hover:bg-transparent w-full rounded-md '>
            <button
              className='btnNav text-white font-bold sm:w-48 w-24 h-8 sm:hover:text-blue-700'
              onClick={closeMenu}
            >
              <NavLink className="sm:text-2xl font-headerFont" to='/TechSkills'>TechSkills</NavLink>
            </button>
          </li>
        </ul>
      </div>
      <div className="hidden md:block h-[3.5rem] w-[14rem]  rounded-b-[2rem]">
                <div className=" grid grid-cols-4  ml-.5">
                    <a href="https://www.linkedin.com/in/guillermo-paez-9a40b7118/" target="_blank" rel="noopener noreferrer">
                    <img className="h-[2.2rem] mt-2 ml-3 bg-white rounded-lg" src={linkedIn} alt="linkedIn" />
                    </a>
                    <a href="mailto:zeduard89@gmail.com?subject=Te%20Contacto%20Por%20Medio%20de%20tu%20Porfolio&body=Hola%20Guillermo,%0D%0A%0D%0AEspero%20que%20te%20encuentres%20bien.%20Quisiera%20ponerme%20en%20contacto%20contigo%20para%20discutir%20oportunidades%20de%20colaboración.%0D%0A%0D%0A¡Saludos%20cordiales!">
                    <img className="h-[2.2rem] mt-[9px] ml-[5px] bg-white rounded-lg" src={gmail} alt="linkedIn" />
                    </a>
                    <a href="https://instagram.com/zeduard89?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer">
                    <img className="h-[2.3rem] mt-2 bg-white rounded-lg" src={instagram} alt="linkedIn" />
                    </a>
                    <a href="https://github.com/zeduard89" target="_blank" rel="noopener noreferrer">
                    <img className="h-[2.2rem]  mt-[10px]  bg-white rounded-lg" src={github} alt="linkedIn" />
                    </a>
                </div>
            </div>  
    </nav>
  );
};

export default NavBar;