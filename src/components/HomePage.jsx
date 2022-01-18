import {useState} from 'react';
import {Link} from 'react-router-dom';

// import homePrivateVideo from "../data/secret-videos/projetfim.mp4"
// import homeVideo from "../data/videos/.mp4"

import RightArrowImage from '../assets/arrow-r.svg';
import LeftArrowImage from '../assets/arrow-l.svg';



function importAll(r) {
  const l = r.keys().map(r);
  return l.map( obj => obj.default)
}

const displayPhotos = importAll(require.context('../data/carroussel-photos', false, /\.(png|jpeg|jpg|heic|svg)$/));
const displayPhotosPrivate = importAll(require.context('../data/secret-carroussel-photos', false, /\.(png|jpeg|jpg|heic|svg)$/));

const arrowImages = {
    right: RightArrowImage,
    left: LeftArrowImage
}
const Arrow = (side, func) => {
    return (
        <div className={side === 'left'? " cursor-pointer flex items-center justify-start absolute px-2 h-full w-1/2 left-0 transform transition-all hover:-translate-y-2 select-none":" cursor-pointer flex items-center justify-end absolute px-2 h-full w-1/2 right-0 transform transition-all hover:-translate-y-2 select-none"} onClick={func}>
            <img src={arrowImages[side]} alt={`${side} arrow`} className="h-14 shadow-xl" />
        </div>
    )
}
const RightArrow = ({func}) => Arrow("right", func)
const LeftArrow = ({func}) => Arrow("left", func)


function Ball({selected, index, onClick}) {
    const func = index === selected ? ()=>{} : () => {onClick(index)};
    return (
        <div key={index} className="p-2" onClick={func}>
            <div  className={`w-3 h-3 cursor-pointer transition-all border rounded-full bg-${index === selected ? 'blue' : 'none'} border-light bg-opacity-100 transform hover:-translate-y-px select-none z-30`}></div>
        </div>
    )
};

function CarrousselBalls ({numberBalls, selectedBall, changeImage}){
    return(
        <div className="w-full flex justify-center z-20 items-center absolute bottom-0 left-0 backdrop-filter backdrop-blur-sm bg-opacity-50 bg-dark">
            {Array.from(Array(numberBalls), (_, index) => <Ball key={index} selected={selectedBall} onClick={changeImage} index={index}/> )}
        </div>
    )
};

function NavButtons(){
    return (
        <div className='flex flex-wrap justify-around items-center my-4 w-full'>
            <Link to="/journal" className='button bg-yellow text-dark'>Journal</Link>
            <Link to="/videos" className='button border border-blue text-blue'>Les Videos</Link>
            <Link to="/photos" className='button border border-blue text-blue'>Album de photos</Link>
        </div>
    )
};

// Main page components
function WelcomeBanner({privateMode}){
    return (
        privateMode ?
        // secret component
        <div className='flex flex-col justify-around items-start '>
            <h1 className='mt-10'>Finalement la fin de cette merde!</h1>
            <h2 className='my-6'>Ce sont fini les conneries de Valerie! Pour ne pas oublier tous qu'on a vécu cette ville nulle, on garde les meilleurs moments. Bien sûr, en secret</h2>
            <p className='my-4 text-justify'>Voyez notre journal alternatif, Le Porc, ou bien les meilleurs photos et videos, sans censure. Si quelqu'un a quelque chose qu'il veut mettre ici, contacte-moi (Guile). Relax et profite.</p>
            <NavButtons />
        </div>
        :
        // regular component
        <div className='flex flex-col justify-around items-start '>
            <h1 className='mt-10'>Les X21 à Villeneuve-Sur-Lot!</h1>
            <h2 className='my-6'>Malheureusement, on arrive a la fin. Donc on vous laisse ce site, puisqu'on peut rappeler les meilleurs moments!</h2>
            <p className='my-4 text-justify'>Ici vous pouvez trouver les photos, les videos et, bien sûr, le journal, que nous avons appelé Le VilleneuvoiX. C'était vraiment dure de choisir, entre tous nos très bons moments, quoi mettre sur le site. Donc, relaxez et profitez!</p>
            <NavButtons />
        </div>
    )
};

function Carroussel ({displayList}) {
    const numImages = displayList.length;
    const [imageIndex, setImageIndex] = useState(0);
    const changeToImage = (imageNumber) => setImageIndex(imageNumber);
    const imageComponents = displayList.map((item, index) => {
        new Image().src = item.image; 
        return <img src={item} alt={index} className="object-cover h-screen w-full "></img>
    });
    const mod = (number, modulo) => ((number % modulo) + modulo ) % modulo;

    return (
        <div className="relative flex justify-around my-10 ">
            <div className="h-screen w-full overflow-y-hidden flex justify-center items-center ">
                {imageComponents[imageIndex]}
                <CarrousselBalls numberBalls={numImages} selectedBall={imageIndex} changeImage={changeToImage}/>
                <RightArrow func={() => setImageIndex(mod(imageIndex + 1, numImages))}/>
                <LeftArrow func={() => setImageIndex(mod(imageIndex - 1, numImages))}/>
            </div>
        </div>
    )
};

export default function HomePage({privateMode}) {
    const photos = privateMode ? displayPhotosPrivate : displayPhotos
    return (
        <div className='mb-20'> 
            <WelcomeBanner privateMode={privateMode} />
            <Carroussel displayList={photos}/>
            {/* {
                privateMode ? 
                <video className=" max-h-screen" controls>
                    <source src={homePrivateVideo} type="video/mp4"/>
                </video> :
                <></>
                // <video className=" max-h-screen" controls>
                //     <source src={homeVideo} type="video/mp4"/>
                // </video>
            } */}
        </div>
    )
};