import projects from '../utils/projects/proyects.json';
import styles from './Projects.module.css'
import crew from '../utils/projects/Crew.png'
import dogs from '../utils/projects/HenryDogs.png'


const Projects = () => {

  return (
    <div className="bg-transparent sm:hidden">
      <div className="  sm:mx-auto mx-1 py-5">
        <h1 className={styles.titulo}>Mis Proyectos</h1>
        <div className=" grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
            <div key={projects[0].id} className=" rounded-md   mx-auto ">
              <div className="  group cursor-pointer w-full">
                <div className="relative transform transition ease-in-out  [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000 " >
                  <img
                    src={crew}
                    alt="foto del proyecto"
                    className={`w-[30rem] h-[450px]  rounded-t-md mb-0`}
                  />
                  <div className=" bg-lime-100 rounded-b-md opacity-80  h-[5rem] ">
                    <h1 className=' text-white text-[2rem] text-center pt-3 '>{projects[0].title}</h1>
                  </div>
                  <div className="font-headerFont rounded-md  pl-5 pt-2 absolute  inset-0 h-full w-full bg-neutral-100 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="text-2xl  underline underline-offset-1 mb-2 mt-2">Front-End: </p>
                      <p className= {styles.texto}>{projects[0].FrontEnd}</p>
                    <p className="text-2xl underline underline-offset-1 mb-2 mt-2">Back-End: </p>
                      <p className= {styles.texto}>{projects[0].BackEnd}</p>
                    <p className="text-2xl underline underline-offset-1 mb-2 mt-2">Base de Datos: </p>
                      <p className= {styles.texto}>{projects[0].DB}</p>
                    <div className=' grid grid-row-3'>
                      <a href={projects[0].github1} className="text-blue-600 hover:underline mt-2" target="_blank" rel="noopener noreferrer">-Enlace al repositorio de GitHub Front</a>
                      {projects[0].github2 && (
                        <a href={projects[0].github2} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">-Enlace al repositorio de GitHub Back</a>
                      )}
                      <a href={projects[0].link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">-Enlace al Deploy</a>
                      <div>
                        <p className= {styles.texto2}>{projects[0].description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        

        <div key={projects[1].id} className=" rounded-md   mx-auto ">
                  <div className="  group cursor-pointer w-full">
                    <div className="relative transform transition ease-in-out  [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000 " >
                      <img
                        src={dogs}
                        alt="foto del proyecto"
                        className={`w-[30rem] h-[450px]  rounded-t-md mb-0`}
                        
                      />
                      <div className=" bg-lime-100 rounded-b-md opacity-80  h-[5rem] ">
                        <h1 className=' text-white text-[2rem] text-center pt-3 '>{projects[0].title}</h1>
                      </div>
                      <div className="font-headerFont rounded-md  pl-5 pt-2 absolute  inset-0 h-full w-full bg-neutral-100 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <p className="text-2xl  underline underline-offset-1 mb-2 mt-2">Front-End: </p>
                          <p className= {styles.texto}>{projects[1].FrontEnd}</p>
                        <p className="text-2xl underline underline-offset-1 mb-2 mt-2">Back-End: </p>
                          <p className= {styles.texto}>{projects[1].BackEnd}</p>
                        <p className="text-2xl underline underline-offset-1 mb-2 mt-2">Base de Datos: </p>
                          <p className= {styles.texto}>{projects[1].DB}</p>
                        <div className=' grid grid-row-3'>
                          <a href={projects[1].github1} className="text-blue-600 hover:underline mt-2" target="_blank" rel="noopener noreferrer">-Enlace al repositorio de GitHub Front</a>
                          {projects[1].github2 && (
                            <a href={projects[0].github2} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">-Enlace al repositorio de GitHub Back</a>
                          )}
                          <a href={projects[1].link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">-Enlace al Deploy</a>
                          <div>
                            <p className= {styles.texto2}>{projects[1].description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        
      </div>    

  );
};

export default Projects;

