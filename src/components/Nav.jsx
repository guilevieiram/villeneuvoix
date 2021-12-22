import {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import { useOnClickOutside } from './funcitons';
import icon from '../assets/icon.svg';

function Hamburguer({toggleAction, close}) {
    return(
        <div className="flex flex-col justify-around items-end h-4 w-6 cursor-pointer md:hidden" onClick={toggleAction}>
            <span className={"h-px w-full bg-light  transition-all duration-500" + (close ? " transform -rotate-45 translate-y-2": "")}></span>
            <span className={"h-px w-2 bg-light transition-all duration-500" + (close ? " transform rotate-45 -translate-x-3 -translate-y-0.5 scale-0" : "")}></span>
            <span className={"h-px w-4 bg-light transition-all duration-500" + (close ? " transform rotate-45 scale-x-150 -translate-y-1 -translate-x-1": "")}></span>
        </div>
    )
};

function NavLink({text, link, closeAction}) {
    return (
        <div onClick={closeAction} className='py-2 hover:text-yellow'>
            <Link to={link} >
                {text}
            </Link>
        </div>
    )
};

export default function Nav(){
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMobileMenu = () => setMobileMenu(!mobileMenu);
    const closeMobileMenu = () => setMobileMenu(false)
    const ref = useRef();

    useOnClickOutside(ref, () => setMobileMenu(false))

    return (
        <div ref={ref} className={`flex justify-around items-center flex-col fixed top-0 right-0 w-screen text-sm  transform translate-y-0 translate-x-0 border-yellow backdrop-filter bg-opacity-70 md:bg-dark md:shadow-md  md:backdrop-blur-md md:bg-opacity-70 z-50 md:border-b `}>
            <div className="flex justify-around items-center flex-col md:flex-row max-w-4xl w-full">
                <span className="flex items-center justify-around w-full backdrop-blur-md backdrop-filter bg-opacity-70 bg-dark border-yellow border-b shadow-md md:shadow-none md:bg-transparent md:backdrop-blur-none md:bg-none md:border-none z-60">
                    <img src={icon} alt="" className="my-4 ml-4 mr-12 h-8 cursor-pointer  select-none" />
                    <Hamburguer toggleAction={toggleMobileMenu} close={mobileMenu}/>
                </span>
                <div className={(mobileMenu ? " backdrop-filter bg-dark backdrop-blur-md mt-6" : " -translate-y-96 ") + " flex transform justify-around items-center flex-col transition-all border-blue border-t border-b w-full py-4 z-10 bg-opacity-70 shadow-md md:shadow-none md:translate-y-0  md:flex-row md:w-full md:bg-transparent md:py-0 md:mt-0 md:backdrop-blur-none md:border-none"}>
                    <NavLink text={"Page d'accueil"} link='/' closeAction={closeMobileMenu}/>
                    <NavLink text={'Jornal Le Porc'} link='/journal' closeAction={closeMobileMenu}/>
                    <NavLink text={"Soirée d'Adieu"} link='/videos' closeAction={closeMobileMenu}/>
                    <NavLink text={'Des photos'} link='/photos' closeAction={closeMobileMenu}/>
                </div>
            </div>
        </div>
    )
};