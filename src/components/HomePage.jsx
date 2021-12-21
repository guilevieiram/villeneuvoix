import banner from '../assets/globe.jpg';
import castleBanner from '../assets/castle.jpg';

function NavButtons(){
    return (
        <div className='flex flex-wrap justify-around items-center my-4'>
            <button className='button bg-yellow text-dark'>Journal Le Porc</button>
            <button className='button border border-blue text-blue'>Soirée d'Adieu</button>
            <button className='button border border-blue text-blue'>Des photos</button>
        </div>
    )
};

function WelcomeBanner(){
    return (
        <div className='flex flex-col justify-around items-center '>
            <h1 className='mt-10'>X21 en Villeneuve-Sur-Lot!</h1>
            <h2 className='my-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, fuga?</h2>
            <p className='my-4 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, commodi. Ipsum at praesentium sed possimus exercitationem dolorem assumenda, facere id voluptate consequatur dolorum similique ab, nihil, laboriosam aliquid dicta minima?</p>
            <NavButtons />
        </div>
    )
};
export default function HomePage() {
    return (
        <div className=''> 
            <WelcomeBanner />
        </div>
    )
};