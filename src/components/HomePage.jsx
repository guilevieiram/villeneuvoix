import {useState} from 'react';
import { YoutubeEmbed } from './elements';

import displayInfo from '../data/carroussel-images.json';

import RightArrowImage from '../assets/arrow-r.svg';
import LeftArrowImage from '../assets/arrow-l.svg';

const arrowImages = {
    right: RightArrowImage,
    left: LeftArrowImage
}
const Arrow = (side, func) => {
    return (
        <div className={` cursor-pointer flex items-center justify-${side==='left' ? 'start' : 'end' } absolute px-2 h-full w-1/2 ${side}-0 transform transition-all hover:-translate-y-2 select-none`} onClick={func}>
            <img src={arrowImages[side]} alt={`${side} arrow`} className="h-14 shadow-xl" />
        </div>
    )
}
const RightArrow = ({func}) => Arrow("right", func)
const LeftArrow = ({func}) => Arrow("left", func)


function Label({name}) {
    return (
        <div className="max-w-2xl w-full absolute  bottom-0 flex justify-end" >
            <p className="text-light w-max mx-10 my-8 px-4 py-1 rounded-md shadow-md bg-dark bg-opacity-50 backdrop-blur-sm backdrop-filter ">{name}</p>
        </div>
    )
};

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
            <button className='button bg-yellow text-dark'>Journal Le Porc</button>
            <button className='button border border-blue text-blue'>Soirée d'Adieu</button>
            <button className='button border border-blue text-blue'>Des photos</button>
        </div>
    )
};

// Main page components
function WelcomeBanner(){
    return (
        <div className='flex flex-col justify-around items-start '>
            <h1 className='mt-10'>X21 en Villeneuve-Sur-Lot!</h1>
            <h2 className='my-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, fuga?</h2>
            <p className='my-4 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, commodi. Ipsum at praesentium sed possimus exercitationem dolorem assumenda, facere id voluptate consequatur dolorum similique ab, nihil, laboriosam aliquid dicta minima?</p>
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
        return <img src={item.image} alt={displayList[index].name} className="object-cover h-screen w-full "></img>
    });
    const mod = (number, modulo) => ((number % modulo) + modulo ) % modulo;

    return (
        <div className="relative flex justify-around my-10 ">
            <div className="h-screen w-full overflow-y-hidden flex justify-center items-center ">
                {imageComponents[imageIndex]}
                <CarrousselBalls numberBalls={numImages} selectedBall={imageIndex} changeImage={changeToImage}/>
                <RightArrow func={() => setImageIndex(mod(imageIndex + 1, numImages))}/>
                <LeftArrow func={() => setImageIndex(mod(imageIndex - 1, numImages))}/>
                <Label name={displayList[imageIndex].name}/>
            </div>
        </div>
    )
};

function Player(){
    return (
        <div className='w-full my-8'>
            <h2 className='my-4'>Regardez-nous!</h2>
            <YoutubeEmbed embedId="rokGy0huYEA"/>
        </div>
    )
}
export default function HomePage() {
    return (
        <div className='mb-20'> 
            <WelcomeBanner />
            <Carroussel displayList={displayInfo}/>
            <Player />
        </div>
    )
};