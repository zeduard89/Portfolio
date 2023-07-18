
import vidPerfil from '../utils/AboutMe/Rec 0011.mp4'

const Picture = () => {
  return (
    <div className='  grid grid-cols-5 mt-5 pt-[13rem]'>
        <div className='col-span-2'>
            <h2>hola</h2>
        </div>
        <div className=' drop-shadow-xl place-self-center m-5 col-span-1'>
            <div className="  rounded-[999rem] h-[16rem] w-[14rem]  overflow-hidden ">
              <video src={vidPerfil} autoPlay loop muted className='w-full h-full object-cover' />
            </div>       
        </div>
        <div className="col-span-2">
            <h2>hola</h2>
        </div>
    </div>
    )
}

export default Picture