import html from '../utils/html.png'
import css from '../utils/css.png'
import javaScript from '../utils/javaScript.png'
import react from '../utils/react.png'
import redux from '../utils/redux.png'
import node from '../utils/nodeJs.png'
import express from '../utils/express.png'
import postgres from '../utils/postgres.png'
import sequelize from '../utils/sequelize.png'
import postman from '../utils/postman.png'
import azure from '../utils/azure.png'
import github from '../utils/github.png'
import git from '../utils/git.png'
import solvingProblem from '../utils/solvingProblem.png'
import scrum from '../utils/scrum.png'

const Skills = () => {
  return (
    <div className="bg-lime-200 h-screen w-screen flex flex-col items-center mt-[2rem] ">
      
      <div className=" h-auto mb-[6rem] flex flex-col items-center">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-1 py-1">
            <div className="h-2 bg-slate-700 rounded "></div>
            <div className="rounded-full h-10 w-10"></div>
            <div className="space-y-3">
              <h1 className="text-[8rem] animate-bounce">My Skills</h1>
              <div className="rounded-full bg-slate-700 h-10 w-10  animate-bounce2"></div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 w-11/12" >
        <div>
          <h2 className=' bg-green-600 text-[3rem] text-center text-white font-bold py-2 w-1/2  rounded-tl-3xl rounded-tr-3xl '>Front-end</h2>
          <div className="bg-white p-4 rounded shadow rounded-tr-3xl rounded-b-3xl grid grid-cols-2">
            <ul className="mt-2 ml-5 text-[3rem]">
              <img className="h-[10rem] w-[10rem]" src={html} alt="html" />
              <img className="h-[10rem] w-[10rem]" src={css} alt="css" />
              <img className="h-[10rem] w-[10rem]" src={javaScript} alt="javaScript" />
              <img className="h-[10rem] w-[10rem]" src={react} alt="react" />
              <img className="h-[10rem] w-[10rem]" src={redux} alt="redux" />
            </ul>
            <ul className="text-[3rem]">
              <li className="mt-[4rem]">HTML</li>
              <li className="mt-[6rem]">CSS</li>
              <li className="mt-[7rem]">JavaScript</li>
              <li className="mt-[5rem]">React</li>
              <li className="mt-[7rem]">Redux</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className='btnNav bg-green-600 text-[3rem] text-center text-white font-bold py-2 w-1/2  rounded-tl-3xl rounded-tr-3xl '>Back-end</h2>
          <div className="bg-white p-4 rounded shadow rounded-tr-3xl rounded-b-3xl grid grid-cols-2">
            <ul className="mt-2 ml-5 text-[3rem]">
              <img className="h-[10rem] w-[10rem]" src={node} alt="node" />
              <img className="h-[10rem] w-[10rem]" src={express} alt="express" />
              <img className="h-[10rem] w-[10rem]" src={postgres} alt="postgres" />
              <img className="h-[10rem] w-[10rem]" src={sequelize} alt="sequelize" />
              <img className="h-[10rem] w-[10rem]" src={azure} alt="azure" />
              <img className="h-[10rem] w-[10rem]" src={postman} alt="postman" />
            </ul>
            <ul className="text-[3rem]">
              <li className="mt-[3.5rem]">Node.js</li>
              <li className="mt-[6rem]">Express</li>
              <li className="mt-[5rem]">PostgresSQL</li>
              <li className="mt-[7rem]">Sequelize</li>
              <li className="mt-[7rem]">Azure</li>
              <li className="mt-[7rem]">Postman</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className='btnNav bg-green-600 text-[3rem] text-center  text-white font-bold py-2 w-1/2  rounded-tl-3xl rounded-tr-3xl '>Other</h2>
          <div className="bg-white p-4 rounded shadow rounded-tr-3xl rounded-b-3xl  grid grid-cols-2">
            <ul className="mt-2 ml-5 text-[3rem]">
              <img className="h-[10rem] w-[10rem]" src={git} alt="css" />
              <img className="h-[10rem] w-[10rem]" src={github} alt="html" />
              <img className="h-[10rem] w-[10rem]" src={solvingProblem} alt="javaScript" />
              <img className="h-[10rem] w-[10rem]" src={scrum} alt="react" />
            </ul>
            <ul className="text-[3rem]">
              <li className="mt-[3.5rem]">Git</li>
              <li className="mt-[6rem]">GitHub</li>
              <li className="mt-[5rem]">Problem Solving</li>
              <li className="mt-[2rem]">Agile Methodologies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;