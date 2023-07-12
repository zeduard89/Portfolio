import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='flex justify-center py-10  space-x-20 bg-slate-800 rounded-br-[80px] rounded-bl-[80px]  mx-40 '>
      <button className='btnNav bg-green-600 hover:bg-green-700 text-white font-bold py-2 w-64  rounded-tl-3xl rounded-br-3xl '>
        <NavLink className="text-4xl" to='/'>About Me</NavLink>
      </button>
      <button className='btnNav bg-green-600 hover:bg-green-700 text-white font-bold py-2 w-64 rounded-tl-3xl rounded-br-3xl'>
        <NavLink className="text-4xl" to='/Projects'>Projects</NavLink>
      </button>
      <button className='btnNav bg-green-600 hover:bg-green-700 text-white font-bold py-2 w-64 rounded-tl-3xl rounded-br-3xl'>
        <NavLink className="text-4xl" to='/TechSkills'>TechSkills</NavLink>
      </button>
    </div>
  );
};

export default NavBar;