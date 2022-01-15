import {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import { useOnClickOutside } from './funcitons';
import icon from '../assets/icon.svg';
import iconPrivate from '../assets/icon-private.svg';

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
        <div onClick={closeAction} className='py-2 px-4 hover:text-yellow'>
            <Link to={link} >
                {text}
            </Link>
        </div>
    )
};

export default function Nav({privateMode}){
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMobileMenu = () => setMobileMenu(!mobileMenu);
    const closeMobileMenu = () => setMobileMenu(false)
    const ref = useRef();

    useOnClickOutside(ref, () => setMobileMenu(false))

    return (
        <div ref={ref} className="w-full backdrop-filter backdrop-blur fixed top-0 left-0 bg-dark bg-opacity-70 z-50">
            <div className="w-full flex flex-col md:flex-row justify-between items-center">
                <span className="flex justify-between items-center w-full md:w-auto px-6">
                    <img src={privateMode ? iconPrivate : icon} alt="" className="my-4 ml-4 mr-12 h-8 cursor-pointer  select-none" />
                    <Hamburguer toggleAction={toggleMobileMenu} close={mobileMenu}/>
                </span>
                <div className={mobileMenu ? "flex items-center flex-col md:flex-row my-6" : "flex flex-col md:flex-row h-0 opacity-0 md:h-auto md:opacity-100"}>
                    <NavLink text={"Page d'accueil"} link='/' closeAction={closeMobileMenu}/>
                    <NavLink text={'Journal'} link='/journal' closeAction={closeMobileMenu}/>
                    <NavLink text={"Les Videos"} link='/videos' closeAction={closeMobileMenu}/>
                    <NavLink text={'Album de photos'} link='/photos' closeAction={closeMobileMenu}/>
                </div>
            </div>
            <div className='w-full h-px bg-yellow'> </div>
        </div>
    )
};