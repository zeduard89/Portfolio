import vidPerfil from '../utils/AboutMe/Rec 0011.mp4'
import RadarChart from './Radar'


 const Picture = () => {

  return (
    <div className='  grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 m-5 pt-[13rem] pb-[3rem]'>
        <div className='hidden lg:block col-span-2 text-center'>
            <h1 className="text-white text-6xl m-5 font-headerFont">Designer</h1>
            <p className="text-white text-lg m-5 font-headerFont">Front End apasionado <br />centrado en la experiencia <br />del usuario</p>
        </div>
        <div className=' drop-shadow-xl place-self-center my-5 md:col-span-1'>
            <div className=" sm:ml-0 rounded-[999rem] h-[16rem] w-[10rem] sm:w-[14rem]  overflow-hidden ">
              <video src={vidPerfil} autoPlay loop muted className='w-full h-full object-cover' />
            </div>         
        </div>
        <div className='lg:hidden col-span-2 sm:col-span-1'>
            <RadarChart/>
        </div>
        <div className="hidden lg:block col-span-2 text-center">
            <h1 className="text-white text-6xl m-5 font-headerFont">Coder</h1>
            <p className="text-white text-lg m-5 font-headerFont">Back End exigente <br />Enfocado en un codigo <br />limpio y eficiente</p>
            
        </div>
    </div>
    )
}

export default Picture