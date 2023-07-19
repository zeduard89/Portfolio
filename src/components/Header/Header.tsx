import TypeWriterEffect from 'react-typewriter-effect';
import header from '../utils/Header/Smaller Network Connection Background.mp4'
import TextEffect1 from '../TextEffect/TextEffect';
import {useState,useEffect} from 'react'

const Header = () => {

    const [isActive, setIsActive] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsActive(false);
        }, 3000);
    
        return () => {
          clearTimeout(timer);
        };
      }, []);

  return (
    <header className='h-[25rem]'>
        <div className="relative w-full h-[35rem] overflow-hidden top-0 left-0 z-[-5]">
            <div className="absolute inset-0 border-b-[0.2rem] border-gray-500">
                <video src={header} autoPlay loop muted className='w-full h-full object-cover' />
            </div>
        </div>


        {isActive && (
        <div className='animate-fadeOut relative top-[-20rem] md:top-[-22rem]'>
          <TextEffect1 />
        </div>
        )}

        {isActive || (    
        <div className="animate-fadeInHeader ml-5 pt-3 pl-5 w-[22rem] lg:w-[28rem] h-[16rem] lg:h-[13rem] relative z-[-5] top-[-23rem]  hidden md:block bg-slate-300 bg-opacity-60
        rounded-lg border-white border-[.2rem]">
            
            <TypeWriterEffect
                    textStyle={{
                    fontFamily: 'headerFont',
                    color: '#00f134',
                    fontWeight: 1500,
                    fontSize: '1.2rem',
                    }}
                    startDelay={3010}
                    cursorColor="#3F3D56"
                    hideCursorAfterText={true}
                    multiText={[
                    'Hola, estimado visitante. Te invito a adentrarte en mi mundo digital',
                    'Soy Guillermo Paez, un creador de códigos y artífice de experiencias digitales',
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={100}
                />
            <TypeWriterEffect
                    textStyle={{
                    fontFamily: 'headerFont',
                    color: '#00f134',
                    fontWeight: 1500,
                    fontSize: '1.2rem',
                    }}
                    startDelay={23000}
                    cursorColor="#3F3D56"
                    hideCursorAfterText={true}
                    multiText={[
                        'Espero sea de tu agrado 👨‍💻',
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={100}
                    />
            <div className='pt-5'>
                <TypeWriterEffect
                            textStyle={{
                            fontFamily: 'headerFont',
                            color: '#00f134',
                            fontWeight: 1500,
                            fontSize: '.8rem',
                        }}
                        startDelay={27000}
                        hideCursorAfterText={true}
                        cursorColor="transparent"
                        text=" 01000010 01101001 01100101 01101110 01110110 01100101 01101110 01101001 01100100 01101111 "
                        typeSpeed={100}
                        />
            </div>
        </div>
        )}
        {isActive || (
        <div className="ml-5 p-5 w-[14rem] relative z-[-5] top-[-20rem] visible md:invisible bg-slate-300 bg-opacity-60
        rounded-lg border-white border-[.2rem]">
            <TypeWriterEffect
                            textStyle={{
                            fontFamily: 'headerFont',
                            color: '#00f134',
                            fontWeight: 1500,
                            fontSize: '1rem',
                        }}
                        startDelay={800}
                        cursorColor="black"
                        hideCursorAfterText={true}
                        text="Todo un mundo en"
                        typeSpeed={100}
                        />
            <TypeWriterEffect
                            textStyle={{
                            fontFamily: 'headerFont',
                            color: '#00f134',
                            fontWeight: 1500,
                            fontSize: '1rem',
                        }}
                        startDelay={2800}
                        cursorColor="black"
                        hideCursorAfterText={true}
                        text="*  Nuestas manos  *"
                        typeSpeed={100}
                        />
        </div>
        )}
    
    </header>
  )
}

export default Header