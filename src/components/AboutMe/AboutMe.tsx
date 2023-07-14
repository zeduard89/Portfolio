import linkedIn from '../utils/linkedIn.png'
import gmail from '../utils/gmail.png'
import github from '../utils/github.png'
import instagram from '../utils/instagram.png'
import imgPerfil from '../utils/foto perfil2chica.jpg'
import giftMen from '../utils/gift/Walk.gif'
import TypeWriterEffect from 'react-typewriter-effect';
import {useState} from 'react'
import styles from './AboutMe.module.css'


const AboutMe = () => {

  const [useToogle, setToogle] = useState (true)

  return (
    <div className=" h-full lg:h-screen bg-lime-200 ">
      <div className="   w-fit grid grid-cols-1 lg:grid-cols-3 gap-5 mx-4 mt-[5rem] ">
        <div className=' drop-shadow-xl place-self-center '>
          <div className="  rounded-t-[2rem] h-[30rem] max-w-[25rem] min-w-[20rem] align-middle overflow-hidden ">
            <img className="  h-full w-full object-cover  " src={imgPerfil} alt="foto de Perfil" />
          </div>
          <div className=" bg-black bg-opacity-80  h-[5.5rem] max-w-[25rem] min-w-[20rem]  rounded-b-[2rem]">
            <div className=" grid grid-cols-4  ml-4">
              <a href="https://www.linkedin.com/in/guillermo-paez-9a40b7118/" target="_blank" rel="noopener noreferrer">
                <img className="h-[4rem] mt-3 ml-1" src={linkedIn} alt="linkedIn" />
              </a>
              <a href="mailto:zeduard89@gmail.com?subject=Te%20Contacto%20Por%20Medio%20de%20tu%20Porfolio&body=Hola%20Guillermo,%0D%0A%0D%0AEspero%20que%20te%20encuentres%20bien.%20Quisiera%20ponerme%20en%20contacto%20contigo%20para%20discutir%20oportunidades%20de%20colaboración.%0D%0A%0D%0A¡Saludos%20cordiales!">
                <img className="h-[3.5rem] mt-4 ml-1" src={gmail} alt="linkedIn" />
              </a>
              <a href="https://instagram.com/zeduard89?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer">
                <img className="h-[4rem] ml-5 mt-3" src={instagram} alt="linkedIn" />
              </a>
              <a href="https://github.com/zeduard89" target="_blank" rel="noopener noreferrer">
                <img className="h-[6rem] " src={github} alt="linkedIn" />
              </a>
            </div>
          </div>         
        </div>
        {useToogle?
        <div className=" md:col-span-2 mb-1 ">
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
            <p className='animate-fadeIn '>
              Soy Guillermo E. Paez, un programador Junior "FullStack" graduado del BootCamp de Henry y estudiante de la carrera de Ingeniería en Sistemas de la Universidad de la Marina Mercante.
            </p>
            
            <h1 className="text-[2rem] mb-[2rem] mt-3 sm:mt-3 h-10">
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