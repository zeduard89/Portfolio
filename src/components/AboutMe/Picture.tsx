
import vidPerfil from '../utils/AboutMe/Rec 0011.mp4'

const Picture = () => {
  return (
    <div className='  grid grid-cols-2 md:grid-cols-5 mt-5 pt-[13rem]'>
        <div className='hidden md:block col-span-2 text-center'>
            <h1>designer</h1>
            <p>UI/UX Diseñador apasionado</p>
            <p>enfoado en la experiencia</p>
            <p>de usuario</p>
        </div>
        <div className=' drop-shadow-xl place-self-center m-5 md:col-span-1'>
            <div className="  rounded-[999rem] h-[16rem] w-[14rem]  overflow-hidden ">
              <video src={vidPerfil} autoPlay loop muted className='w-full h-full object-cover' />
            </div>       
        </div>
        <div className="hidden md:block col-span-2 text-center">
            <h1>coder</h1>
            <p>Desarrollador</p>
            <p>Front End y Back End</p>
            <p>Enfocado en un codigo</p>
            <p>limpio y eficiente</p>
        </div>
    </div>
    )
}

export default Picture