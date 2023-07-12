import linkedIn from '../utils/linkedIn.png'
import gmail from '../utils/gmail.png'
import github from '../utils/github.png'
import instagram from '../utils/instagram.png'
import imgPerfil from '../utils/foto perfil2chica.jpg'


const AboutMe = () => {
  return (
    <div className="h-screen flex flex-col bg-lime-200 ">
      <div className=" h-fit w-fit flex flex-row items-center justify-around px-[10rem] gap-20 mt-[10rem]  bg-lime-200">
        <div>
          <div className="rounded-t-[2rem] h-[55rem] w-[45rem] overflow-hidden shadow-xl shadow-black/40 ">
            <img className="  h-full w-full object-cover " src={imgPerfil} alt="foto de Perfil" />
          </div>
          <div className="bg-black bg-opacity-80 w-[45rem] rounded-b-[2rem]">
            <div className=" grid grid-cols-4 w-[45rem] ml-6">
              <a href="https://www.linkedin.com/in/guillermo-paez-9a40b7118/" target="_blank" rel="noopener noreferrer">
                <img className="h-[6rem] mt-5" src={linkedIn} alt="linkedIn" />
              </a>
              <a href="mailto:zeduard89@gmail.com?subject=Te%20Contacto%20Por%20Medio%20de%20tu%20Porfolio&body=Hola%20Guillermo,%0D%0A%0D%0AEspero%20que%20te%20encuentres%20bien.%20Quisiera%20ponerme%20en%20contacto%20contigo%20para%20discutir%20oportunidades%20de%20colaboración.%0D%0A%0D%0A¡Saludos%20cordiales!">
                <img className="h-[6rem] mt-5" src={gmail} alt="linkedIn" />
              </a>
              <a href="https://instagram.com/zeduard89?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer">
                <img className="h-[6.5rem] ml-8 mt-5" src={instagram} alt="linkedIn" />
              </a>
              <a href="https://github.com/zeduard89" target="_blank" rel="noopener noreferrer">
                <img className="h-[8rem] mt-2" src={github} alt="linkedIn" />
              </a>
            </div>
          </div>         
        </div>
        <div>
          <h1 className=" mb-[3rem] text-[6rem] font-bold flex flex-col items-center underline underline-offset-1">Mi camino hasta aquí</h1>
          <div className=" w-fit bg-white opacity-100 p-5 rounded-[1rem] border-8 border-cyan-950">
            <h1 className="text-[3rem] mb-[1rem]">¿Quién soy?</h1>
            <p>Soy Guillermo E. Paez, un programador Junior "FullStack" graduado del BootCamp de Henry y estudiante de la carrera de Ingeniería en Sistemas de la Universidad de la Marina Mercante.</p>
            <h1 className="text-[3rem] my-[1rem]">¿Qué me caracteriza?</h1>
            <p>Como desarrollador Full Stack, he adquirido habilidades que me han permitido trabajar de manera efectiva en equipo y mejorar mi eficiencia en la lectura de código. <br /> Poseo conocimientos en metodologías ágiles, control de versiones con Git, estructuras de datos, algoritmos y frameworks CSS. <br /> En cuanto al Front-end, tengo experiencia en el desarrollo de interfaces de usuario utilizando tecnologías como React.js, Redux y TypeScript. Estas herramientas me permiten crear aplicaciones web interactivas y versátiles. <br /> Por otro lado, en el Back-end, he trabajado con tecnologías como Node.js, Express, PostgresSQL y Azure para construir la lógica y funcionalidad del lado del servidor en aplicaciones web. <br /> Además de mis habilidades técnicas, también cuento con habilidades blandas en Scrum, liderazgo y gestión de crisis, lo que me permite colaborar eficientemente en equipos y enfrentar desafíos de manera efectiva. <br /><br /> Nivel de Inglés: B2 Intermedio</p>
          </div>
        </div>
      </div>
    </div>

    
  )
}

export default AboutMe