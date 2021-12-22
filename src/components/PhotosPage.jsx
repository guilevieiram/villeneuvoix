import { useRef, useState } from 'react';
import { useOnClickOutside } from './funcitons';
import photosList from '../data/photos.json';


function PagePhoto({reference, link, description}) {
    return (
        <div ref={reference} className='fixed h-screen w-screen top-0 left-0 bg-dark filter bg-opacity-90 flex justify-center items-center'>
            <img src={link} alt={description} className='object-fit max-h-screen shadow-lg'/>
        </div>
    )
};

function Photo ({link, description}) {
    const [selected, setSelected] = useState(false);
    const ref = useRef();
    const toggleSelected = () => setSelected(!selected);
    useOnClickOutside(ref, () => setSelected(false));
    return (
        <div className='m-2 w-56'>
            <div className='h-44 w-56' onClick={toggleSelected}>
                {
                    selected ?
                    <PagePhoto reference={ref} link={link} description={description} /> :
                    <img src={link} alt={description} className='rounded-md shadow-md h-full w-full object-cover' />
                }
            </div>
            <p className='italic '>{description}</p>
        </div>
    )
};

function PhotoTable(){
    return (
        <div className="flex flex-wrap">
            {
                photosList.map(({link, description}, index) => <Photo key={index} link={link} description={description}/>)
            }
        </div>
    )
};

export default function PhotosPage(){
    return( 
        <div className="flex flex-col justify-around items-start my-10">
            <h1>Des photos</h1>
            <h2>Vous pouvez trouvez un peau des photos qu'on a fait pendant notre periode en Villeneuve.</h2>
            <PhotoTable />
        </div>
    )
};