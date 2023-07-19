import vidPerfil from '../utils/AboutMe/Rec 0011.mp4'
import RadarChart from './Radar'
import style from '../AboutMe/AboutMe.module.css'

 const Picture = () => {

  return (
    <div className='  grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 m-5 pt-[13rem] pb-[3rem]'>
        <div className='hidden lg:block col-span-2 text-center pt-10'>
            <h1 className={style.titulo}>Designer</h1>
            <p className="text-white text-lg  font-headerFont">Front End apasionado <br />centrado en la experiencia <br />del usuario</p>
        </div>
        <div className='drop-shadow-xl place-self-center my-5 md:ml-[6rem] md:col-span-1'>
            <div className="absolute sm:ml-0 rounded-[999rem] h-[16rem] w-[10rem] sm:w-[14rem]  overflow-hidden lg:animate-fadePhoto ">
              <video src={vidPerfil} autoPlay loop muted className='w-full h-full object-cover' />
            </div>
            <div className='relative top-[-2rem] right-[2rem] invisible lg:visible lg:animate-fadeRadar'>
                <RadarChart/>
            </div>         
        </div>
        <div className='lg:hidden col-span-2 sm:col-span-1'>
            <RadarChart/>
        </div>
        <div className="hidden lg:block col-span-2 text-center pt-10">
            <h1 className={style.titulo}>Coder</h1>
            <p className="text-white text-lg font-headerFont">Back End exigente <br />Enfocado en un codigo <br />limpio y eficiente</p>
        </div>
    </div>
    )
}

export default Picture