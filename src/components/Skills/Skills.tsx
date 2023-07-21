import HTML from '../utils/Skils/HTML2.gif'
import tailwind from '../utils/Skils/Tailwind.gif'
import javascript from '../utils/Skils/JavaScript.gif'
import react from '../utils/Skils/React.gif'
import redux from '../utils/Skils/redux.gif'
import azure from '../utils/Skils/azure.gif'
import docker from '../utils/Skils/docker.gif'
import scrum from '../utils/Skils/scrum.gif'
import agiles from '../utils/Skils/agiles.gif'
import git from '../utils/Skils/git.gif'
import github from '../utils/Skils/github.gif'
import node from '../utils/Skils/node.gif'
import express from '../utils/Skils/express.gif'
import sequelize from '../utils/Skils/Sequelize.gif'
import postman from '../utils/Skils/postman.gif'
import { useState, useEffect } from 'react'


const Skills = () => {

  const pcCentro = [HTML,tailwind,javascript,react,redux]
  const pcDerecha =[azure,docker,scrum,agiles,git,github]
  const pcIzquierda = [node,express,sequelize,postman]

  // Define el estado para mantener el índice actual de las imágenes
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para cambiar las imágenes cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pcIzquierda.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="skills" className="h-fit w-full my-[5rem] absolute">
      
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

        <div className= 'grid grid-cols-3 mx-2 mb-[5rem] ml-5  '>
          <div className=' '>
            <img src={pcIzquierda[currentIndex]} alt="pc" className=''/>
          </div>
          <div>
            <img src={pcCentro[currentIndex]} alt="pc" className='-translate-y-4 sm:-translate-y-10'/>
          </div>
          <div>
            <img src={pcDerecha[currentIndex]} alt="pc" className=''/>
          </div>
        </div>
        
      <p className ='relative flex justify-end m-3 '>Creacion de zEduard89</p>
      
    </div>
    
  );
};

export default Skills;