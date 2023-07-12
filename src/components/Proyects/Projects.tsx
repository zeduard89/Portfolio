import projects from '../utils/proyects.json';
import { IProject } from '../interfaces';
import { useState } from 'react';
import spinner from '../utils/Spinner-3.gif'
import styles from './Projects.module.css'


const Projects = () => {

  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="bg-lime-200 h-screen  ">
      <div className="container mx-auto py-20 ">
        <h1 className="text-8xl font-bold mb-[10rem] mt-[2rem] ml-20 flex justify-center hover:animate-vibrate">Mis Proyectos</h1>
        <div className=" flex flex-nowrap gap-10 h-fit">
          {projects.map((project: IProject)=> (
            <div key={project.id} className=" rounded-lg  w-[50rem] mx-auto ">
              <div className="  group cursor-pointer w-full">
                <div className="relative transform transition ease-in-out  [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000 " >
                  {loading && (
                    <div className="w-full h-[600px]  flex justify-center pt-[8rem] bg-white rounded-t-[2rem] ">
                      <img className="h-[250px]" src={spinner} alt="Loading" />
                    </div>
                  )}
                  <img
                    src={project.image}
                    alt="foto del proyecto"
                    className={`w-full h-[600px]  rounded-lg rounded-t-[2rem] mb-0  ${loading ? 'hidden' : ''}`}
                    onLoad={handleImageLoad}
                  />
                  <div className=" bg-black rounded-b-[2rem] opacity-80  h-[15rem] ">
                    <h1 className=' text-white text-[5rem] text-center '>{project.title}</h1>
                  </div>
                  <div className=" rounded-[2rem]  p-8 absolute  inset-0 h-full w-full bg-neutral-100 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="text-5xl  underline underline-offset-1 mb-2 mt-2">Front-End: </p>
                      <p className= {styles.texto}>{project.FrontEnd}</p>
                    <p className="text-5xl underline underline-offset-1 mb-2 mt-2">Back-End: </p>
                      <p className= {styles.texto}>{project.BackEnd}</p>
                    <p className="text-5xl underline underline-offset-1 mb-2 mt-2">Base de Datos: </p>
                      <p className= {styles.texto}>{project.DB}</p> <br />
                    <a href={project.github1} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Enlace al repositorio de GitHub Front</a> <br />
                    {project.github2 && (
                      <a href={project.github2} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Enlace al repositorio de GitHub Back</a>
                    )} <br />
                    <a href={project.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Enlace al Deploy</a>
                    <p className= {styles.texto2}>{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;

