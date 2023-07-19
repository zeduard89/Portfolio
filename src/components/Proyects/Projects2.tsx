import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import crew from '../utils/projects/Crew.png';
import dogs from '../utils/projects/HenryDogs.png';


const Projects2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Tiempo en milisegundos (3 segundos en este ejemplo)
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
    <div className="relative mt-[5rem] lg:mt-[8rem] h-[35rem] w-full overflow-x-hidden">
        <h1 className="text-center mb-[2rem] text-5xl md:text-7xl text-white font-headerFont ">Mis Proyectos</h1>
      <Slider {...settings}>
        <div className='px-10'>
            <div className="hidden md:flex justify-center gap-5">
                <img src={crew} alt="Crew" className='h-[18rem] w-1/3  rounded-[5rem]'/>
                <img src={crew} alt="Crew" className='h-[18rem] w-1/3  rounded-[5rem]'/>
                <img src={crew} alt="Crew" className='h-[18rem] w-1/3  rounded-[5rem]'/>
            </div>
            <div className=" md:hidden justify-center gap-5  ">
                <img src={crew} alt="Dogs" className='h-[18rem] w-full  rounded-[5rem]'/>
            </div>
          <div className="carousel-caption mx-10 sm:mx-20 flex justify-center text-center flex-col text-white">
            <h5>First slide label</h5>
            <p className='text-white'>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className='px-10'>
            <div className="hidden md:flex justify-center gap-5  ">
                <img src={dogs} alt="Dogs" className='h-[18rem] w-1/3  rounded-[5rem]'/>
                <img src={dogs} alt="Dogs" className='h-[18rem] w-1/3  rounded-[5rem]'/>
                <img src={dogs} alt="Dogs" className='h-[18rem] w-1/3  rounded-[5rem]'/>
            </div>
            <div className=" md:hidden justify-center gap-5  ">
                <img src={dogs} alt="Dogs" className='h-[18rem] w-full  rounded-[5rem]'/>
            </div>
          <div className="carousel-caption mx-10 sm:mx-20 flex justify-center text-center flex-col text-white">
            <h5>Second slide label</h5>
            <p className='text-white'>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Projects2;