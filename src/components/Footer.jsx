export default function Footer({height}){
    return (
        <div className={`w-screen bg-blue text-sm absolute bottom-0 left-0 py-${height / 2} flex justify-around items-center`}>
            <p className="text-black">Tous les droits réservés.</p>
            <p className="text-black">© <a href="https://guile.ga" className="transition-all underline hover:text-yellow">Guile Vieira</a> | 2021 </p>
        </div>
    )
};