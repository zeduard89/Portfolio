import html from '../utils/Skils/html.png'
import css from '../utils/Skils/css.png'
import javaScript from '../utils/Skils/javaScript.png'
import react from '../utils/Skils/react.png'
import redux from '../utils/Skils/redux.png'
import node from '../utils/Skils/nodeJs.png'
import express from '../utils/Skils/express.png'
import postgres from '../utils/Skils/postgres.png'
import sequelize from '../utils/Skils/sequelize.png'
import postman from '../utils/Skils/postman.png'
import azure from '../utils/Skils/azure.png'
import github from '../utils/AboutMe/github.png'
import git from '../utils/Skils/git.png'
import solvingProblem from '../utils/Skils/solvingProblem.png'
import scrum from '../utils/Skils/scrum.png'

const Skills = () => {
  return (
    <div className="h-fit w-full flex flex-col items-cente">
      
      <div className=" h-auto mb-[3rem] flex flex-cols-3 justify-center items-center">
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

      <div className="grid grid-cols-1 mb-2 md:grid-cols-3  gap-4 w-11/12" >
        <div>
          <h2 className=' bg-green-600 text-[1.5rem] text-center text-white font-bold py-2 w-2/3  rounded-tl-3xl rounded-tr-3xl '>Front-end</h2>
          <div className="bg-white pt-4 rounded shadow rounded-tr-3xl rounded-b-3xl grid grid-cols-2">
            <ul className="mt-2 ml-5">
              <img className="h-[5rem] w-[5rem]" src={html} alt="html" />
              <img className="h-[5rem] w-[5rem]" src={css} alt="css" />
              <img className="h-[5rem] w-[5rem]" src={javaScript} alt="javaScript" />
              <img className="h-[5rem] w-[5rem]" src={react} alt="react" />
              <img className="h-[5rem] w-[5rem]" src={redux} alt="redux" />
            </ul>
            <ul className="text-[1.5rem]">
              <li className="animate-slideLeft mt-[2.5rem]">HTML</li>
              <li className="animate-slideLeft mt-[3rem]">CSS</li>
              <li className="animate-slideLeft mt-[4rem] text-[1.4rem]">JavaScript</li>
              <li className="animate-slideLeft mt-[4rem]">React</li>
              <li className="animate-slideLeft mt-[3rem]">Redux</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className='btnNav bg-green-600 text-[1.5rem] text-center text-white font-bold py-2 w-2/3  rounded-tl-3xl rounded-tr-3xl '>Back-end</h2>
          <div className="bg-white pt-4 rounded shadow rounded-tr-3xl rounded-b-3xl grid grid-cols-2">
            <ul className="mt-2 ml-5 text-[3rem]">
              <img className="h-[5rem] w-[5rem]" src={node} alt="node" />
              <img className="h-[5rem] w-[5rem]" src={express} alt="express" />
              <img className="h-[5rem] w-[5rem]" src={postgres} alt="postgres" />
              <img className="h-[5rem] w-[5rem]" src={sequelize} alt="sequelize" />
              <img className="h-[5rem] w-[5rem]" src={azure} alt="azure" />
              <img className="h-[5rem] w-[5rem]" src={postman} alt="postman" />
            </ul>
            <ul className="text-[1.5rem] text-justify">
              <li className="animate-slideLeft mt-[2rem]">Node.js</li>
              <li className="animate-slideLeft mt-[4rem]">Express</li>
              <li className="animate-slideLeft mt-[3rem]">Postgre SQL</li>
              <li className="animate-slideLeft mt-[2rem] lg:mt-[3.5rem]">Sequelize</li>
              <li className="animate-slideLeft mt-[4rem]">Azure</li>
              <li className="animate-slideLeft mt-[4rem]">Postman</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className='btnNav bg-green-600 text-[1.5rem] text-center  text-white font-bold py-2 w-2/3  rounded-tl-3xl rounded-tr-3xl '>Other</h2>
          <div className="bg-white pt-4 rounded shadow rounded-tr-3xl rounded-b-3xl  grid grid-cols-2">
            <ul className="mt-2 ml-3 text-[3rem]">
              <img className="h-[5rem] w-[5rem]" src={git} alt="css" />
              <img className="h-[5rem] w-[5rem]" src={github} alt="html" />
              <img className="h-[5rem] w-[5rem]" src={solvingProblem} alt="javaScript" />
              <img className="h-[5rem] w-[5rem]" src={scrum} alt="react" />
            </ul>
            <ul className="text-[1.5rem]">
              <li className="animate-slideLeft mt-[2rem]">Git</li>
              <li className="animate-slideLeft mt-[4rem]">GitHub</li>
              <li className="animate-slideLeft mt-[2rem] xl:mt-[3.5rem]">Problem Solving</li>
              <li className="animate-slideLeft mt-[2rem] md:mt-[3rem] xl:mt-[3.5rem] text-[1.2rem]">Scrum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;