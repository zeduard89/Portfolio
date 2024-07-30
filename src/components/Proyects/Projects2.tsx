import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import crew from '../utils/projects/Crew.png';
import crewDetail from '../utils/projects/crewDetail.png';
import crewDashBoard from '../utils/projects/crewDashboard.png'
import EcoHome from '../utils/imgEcoPlantas/Home.jpg';
import EcoCatalogo from '../utils/imgEcoPlantas/Catalogo.jpg'
import EcoForm from '../utils/imgEcoPlantas/Formulario.jpg'
import style from '../AboutMe/AboutMe.module.css'
import { useRef } from 'react';
import fDerecha from '../utils/projects/flecha.png'

const Projects2 = () => {

  const sliderRef = useRef<Slider | null>(null); // Use explicit typing

    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, // Tiempo en milisegundos (3 segundos en este ejemplo)
        responsive: [
            {
              breakpoint: 768, // Punto de quiebre para el ancho de la pantalla
              settings: {
                slidesToShow: 1, // Cambiar el número de slides a mostrar
              },
            },
          ],
      };

  return (
    <div id="projects" className="mt-[5rem]  h-[30rem] w-full overflow-x-hidden">
        <h1 className={style.titulo}>Mis Proyectos</h1>
      <Slider {...settings} ref={sliderRef}>
        <div className='relative object-cover '>
            <div className=" hidden md:flex justify-center gap-3 px-5">
                <img src={crew} alt="Crew" className='h-[18rem] w-1/3  rounded-md'/>
                <img src={crewDetail} alt="Crew" className='h-[18rem] w-1/3  rounded-md'/>
                <img src={crewDashBoard} alt="Crew" className='h-[18rem] w-1/3  rounded-md'/>
            </div>
            <div className=" md:hidden flex justify-center gap-1  ">
                <img src={crew} alt="Dogs" className='h-[18rem]  w-full sm:px-[.5rem] md:w-full  rounded-sm'/>
            </div>
          <div className="absolute bottom-[1rem] left-0 right-0 bg-black bg-opacity-60 h-[6rem] carousel-caption flex justify-center items-center text-center flex-col text-white">
            <a href="https://crew-xi.vercel.app/">
              <h5 className='  text-2xl  hover:text-blue-600 active:text-blue-700 focus:outline-none focus:ring focus:ring-violet-300'>Crew "CrowdFunding"</h5>
            </a>
            <p className='text-white'>Tecnologias: Node | Express | SequelizeSQL | Azure | React | React Query | TypeScript.</p>
          </div>
        </div>
        <div id="projects" className='relative object-cover'>
            <div className="hidden md:flex justify-center gap-3 px-5  ">
                <img src={EcoHome} alt="Dogs" className='h-[18rem] w-1/3  rounded-md'/>
                <img src={EcoCatalogo} alt="Dogs" className='h-[18rem] w-1/3  rounded-md'/>
                <img src={EcoForm} alt="Dogs" className='h-[18rem] w-1/3  rounded-md'/>
            </div>
            <div className=" md:hidden flex justify-center  gap-1 ">
                <img src={EcoHome} alt="Dogs" className='h-[18rem]  w-full sm:px-[.5rem] md:w-full  rounded-sm'/>
            </div>
          <div  className="absolute bottom-[1rem] left-0 right-0 bg-black bg-opacity-60 h-[6rem] carousel-caption  flex justify-center  items-center text-center flex-col text-white">
            <a className='w-[10rem]' href="https://www.ecoplantas.com.ar/">
              <h5 className='  text-2xl  hover:text-blue-600 active:text-blue-700 focus:outline-none focus:ring focus:ring-violet-300'>Eco Plantas</h5>
            </a>
            <p className='text-white'>Tecnologias: Ract | React ToolKit | Redux Persist | Tailwind.</p>
          </div>
        </div>
      </Slider>
      <div className="flex justify-center mt-4 relative">
        <button className="button text-white absolute left-3 top-[-15rem]" onClick={() => sliderRef.current?.slickPrev()}>
          <img className='h-20 scale-x-[-1] ' src={fDerecha} alt="flecha" />
        </button>
        <button className="button text-white absolute right-3 top-[-15rem]" onClick={() => sliderRef.current?.slickNext()}>
          <img className='h-20' src={fDerecha} alt="flecha" />
        </button>
      </div>
    </div>
  );
};

export default Projects2;