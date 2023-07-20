import giftMen from '../utils/gift/Walk.gif'
import TypeWriterEffect from 'react-typewriter-effect';
import {useState} from 'react'
import styles from './AboutMe.module.css'


const AboutMe = () => {

  const [useToogle, setToogle] = useState (true)

  return (
    <div id="aboutMe"  className=" h-fit lg:h-fit  w-full">
      <div className="   w-fit grid grid-cols-1 mx-10 md:mx-20 ">
        {useToogle?
        <div className=" md:col-span-3 mb-1 ">
          <h1 className={styles.titulo}>Mi camino hasta aquí</h1>
          <div className="relative w-fit bg-white opacity-100 p-5 rounded-[1rem] border-2 border-green-500">
          <button className="absolute top-3 right-3 inline-block rounded-[99rem] border-2 border-green-500 px-3 pb-[6px] pt-2 text-xs  hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600" onClick={()=>{setToogle(!useToogle)}}>X</button>
            <h1 className="text-[2rem] mb-[2rem] h-10">
              <TypeWriterEffect
                textStyle={{
                  fontFamily: 'google',
                  color: '#3F3D56',
                  fontWeight: 1500,
                  fontSize: '2rem',
                }}
                startDelay={10}
                cursorColor="#3F3D56"
                hideCursorAfterText={true}
                multiText={[
                  'Bienvenido a mi Portfolio, por donde comienzo...',
                  'ya se!!',
                  '¿Quién soy?', 
                ]}
                multiTextDelay={1000}
                typeSpeed={100}
              />
              
            </h1>
            <p  className='animate-fadeIn '>
              Soy Guillermo E. Paez, un programador Junior "FullStack" graduado del BootCamp de Henry y estudiante de la carrera de Ingeniería en Sistemas de la Universidad de la Marina Mercante.
            </p>
            
            <h1  className="text-[2rem] mb-[2rem] mt-3 sm:mt-3 h-10">
              <TypeWriterEffect
              textStyle={{ 
                fontFamily: 'google',
                  color: '#3F3D56',
                  fontWeight: 1500,
                  fontSize: '2rem',
              }}
              startDelay={15500}
              cursorColor="black"
              text="¿Qué me caracteriza?"
              typeSpeed={100}
              />
            </h1>
            
            <p className='mt-14 sm:mt-0 pb-10 animate-fadeIn2'>Como desarrollador Full Stack, he adquirido habilidades que me han permitido trabajar de manera efectiva en equipo y mejorar mi eficiencia en la lectura de código. <br /> Poseo conocimientos en metodologías ágiles, control de versiones con Git, estructuras de datos, algoritmos y frameworks CSS. <br /> En cuanto al Front-end, tengo experiencia en el desarrollo de interfaces de usuario utilizando tecnologías como React.js, Redux y TypeScript. Estas herramientas me permiten crear aplicaciones web interactivas y versátiles. <br /> Por otro lado, en el Back-end, he trabajado con tecnologías como Node.js, Express, PostgresSQL y Azure para construir la lógica y funcionalidad del lado del servidor en aplicaciones web. <br /> Además de mis habilidades técnicas, también cuento con habilidades blandas en Scrum, liderazgo y gestión de crisis, lo que me permite colaborar eficientemente en equipos y enfrentar desafíos de manera. </p>
            <img className="animate-bounceMen  w-10 absolute bottom-[-16px] left-2" src={giftMen} alt="menWalking" draggable='false'/>
          </div>
        </div>
        :
        
        <div className=" md:col-span-2 mb-1 ">
          <h1 className={styles.titulo}>Mi camino hasta aquí</h1>
          <div className="relative w-fit bg-white opacity-100 p-5 rounded-[1rem] border-2 border-green-500">
          <button className="absolute top-3 right-3 inline-block rounded-[99rem] border-2 border-green-500 px-3 pb-[6px] pt-2 text-xs  hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600" onClick={()=>{setToogle(!useToogle)}}>X</button>
            <h1 className="text-[2rem] mb-[2rem] h-10">¿Quién soy?</h1>
            <p>
              Soy Guillermo E. Paez, un programador Junior "FullStack" graduado del BootCamp de Henry y estudiante de la carrera de Ingeniería en Sistemas de la Universidad de la Marina Mercante.
            </p>
            
            <h1 className="text-[2rem] mb-[2rem] mt-3 sm:mt-3 h-10">¿Qué me caracteriza?</h1>
            
            <p className='mt-14 sm:mt-0 pb-10'>Como desarrollador Full Stack, he adquirido habilidades que me han permitido trabajar de manera efectiva en equipo y mejorar mi eficiencia en la lectura de código. <br /> Poseo conocimientos en metodologías ágiles, control de versiones con Git, estructuras de datos, algoritmos y frameworks CSS. <br /> En cuanto al Front-end, tengo experiencia en el desarrollo de interfaces de usuario utilizando tecnologías como React.js, Redux y TypeScript. Estas herramientas me permiten crear aplicaciones web interactivas y versátiles. <br /> Por otro lado, en el Back-end, he trabajado con tecnologías como Node.js, Express, PostgresSQL y Azure para construir la lógica y funcionalidad del lado del servidor en aplicaciones web. <br /> Además de mis habilidades técnicas, también cuento con habilidades blandas en Scrum, liderazgo y gestión de crisis, lo que me permite colaborar eficientemente en equipos y enfrentar desafíos de manera. </p>
            <img className="animate-bounceMen  w-10 absolute bottom-[-16px] left-2" src={giftMen} alt="menWalking" draggable='false'/>
          </div>
        </div>
        }  
      </div>
      
    </div>
    

    
  )
}

export default AboutMe