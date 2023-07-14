import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='animate-slideDown  flex justify-center  py-3  space-x-1 sm:space-x-10 bg-slate-800 rounded-br-[80px] rounded-bl-[80px]  mx-5 '>
      <button className='btnNav bg-green-600 hover:bg-green-700 text-white font-bold sm:w-36 w-24 rounded-tl-3xl rounded-br-3xl '>
        <NavLink className="lg:text-2xl" to='/'>About Me</NavLink>
      </button>
      <button className='btnNav bg-green-600 hover:bg-green-700 text-white font-bold sm:w-36 w-24 rounded-tl-3xl rounded-br-3xl'>
        <NavLink className="lg:text-2xl" to='/Projects'>Projects</NavLink>
      </button>
      <button className='btnNav bg-green-600 hover:bg-green-700 text-white font-bold sm:w-36 w-24  rounded-tl-3xl rounded-br-3xl'>
        <NavLink className="lg:text-2xl" to='/TechSkills'>TechSkills</NavLink>
      </button>
    </div>
  );
};

export default NavBar;