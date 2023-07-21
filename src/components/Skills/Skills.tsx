import HTML from '../utils/Skils/HTML2.gif'

import PcCentro from '../utils/Skils/PcCentro.gif'
import PcDerecha from '../utils/Skils/PcDerecha.gif'
import PcIzquiera from '../utils/Skils/PcIzquierda.gif'

const Skills = () => {
  return (
    <div id="skills" className="h-full w-full my-[5rem]">
      
      <div className="row-span-1  mb-[5rem] flex flex-cols-3 justify-center items-center">
        <div className="h-2 w-1/3 col-span-1  bg-slate-700 rounded "></div>
        <div className="animate-pulse w-1/3  flex justify-center">
          <div className=' col-span-1 border-4 border-slate-700 '>
            <div className="h-2 bg-slate-700 rounded "></div>
            <div className="rounded-full h-3 w-3"></div>
            <div>
              <h1 className="text-[3rem] text-center animate-bounce text-white">My Skills</h1>
              <div className="hidden md:block rounded-full bg-slate-700 h-[.9rem] w-[.9rem]  animate-bounce2"></div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
        <div className="h-2 w-1/3 col-span-1  bg-slate-700 rounded "></div>
      </div>

      
      
        <div className= 'grid grid-cols-3 '>
          <img src={PcIzquiera} alt="pc" className=''/>
          <img src={HTML} alt="pc" className='-translate-y-4 sm:-translate-y-10'/>
          <img src={PcDerecha} alt="pc" className=''/>
          {/* <div className="flex flex-col items-center">
            <h2 className=' bg-green-600 text-[1.5rem] text-center text-white font-bold py-2 w-2/3  rounded-tl-3xl rounded-tr-3xl '>Front-end</h2>
            <div className="bg-white pt-4 w-2/3 rounded shadow  rounded-b-3xl grid grid-cols-1">
              <ul className="mt-2 flex flex-col items-center ">
                <img className="h-[5rem] w-[5rem]" src={html} alt="html" />
                <img className="h-[5rem] w-[5rem]" src={css} alt="css" />
                <img className="h-[5rem] w-[5rem]" src={javaScript} alt="javaScript" />
                <img className="h-[5rem] w-[5rem]" src={react} alt="react" />
                <img className="h-[5rem] w-[5rem]" src={redux} alt="redux" />
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center">
          <h2 className='btnNav bg-green-600 text-[1.5rem] text-center text-white font-bold py-2 w-2/3  rounded-tl-3xl rounded-tr-3xl '>Back-end</h2>
          <div className="bg-white pt-4 w-2/3 rounded shadow  rounded-b-3xl grid grid-cols-1">
            <ul className="mt-2 flex flex-col items-center">
              <img className="h-[5rem] w-[5rem]" src={node} alt="node" />
              <img className="h-[5rem] w-[5rem]" src={express} alt="express" />
              <img className="h-[5rem] w-[5rem]" src={postgres} alt="postgres" />
              <img className="h-[5rem] w-[5rem]" src={sequelize} alt="sequelize" />
              <img className="h-[5rem] w-[5rem]" src={azure} alt="azure" />
              <img className="h-[5rem] w-[5rem]" src={postman} alt="postman" />
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className='btnNav bg-green-600 text-[1.5rem] text-center  text-white font-bold py-2 w-2/3  rounded-tl-3xl rounded-tr-3xl '>Other</h2>
          <div className="bg-white pt-4 w-2/3 rounded shadow  rounded-b-3xl  grid grid-cols-1">
            <ul className="mt-2 flex flex-col items-center">
              <img className="h-[5rem] w-[5rem]" src={git} alt="css" />
              <img className="h-[5rem] w-[5rem]" src={github} alt="html" />
              <img className="h-[5rem] w-[5rem]" src={solvingProblem} alt="javaScript" />
              <img className="h-[5rem] w-[5rem]" src={scrum} alt="react" />
            </ul>
          </div>
        </div> */}

        </div>
    </div>
    
  );
};

export default Skills;