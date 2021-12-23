import { Link } from 'react-router-dom';

export default function Footer(){
    return (
        <div className={`w-screen bg-blue text-sm absolute bottom-0 left-0 py-6 flex justify-around items-center`}>
            <Link to="/login" className="text-black cursor-default">Tous les droits réservés.</Link>
            <p className="text-black">© <a href="https://guile.ga" className="transition-all underline hover:text-yellow">Guile Vieira</a> | 2021 </p>
        </div>
    )
};