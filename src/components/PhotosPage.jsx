import { useState } from 'react';
import photosList from '../data/photos.json';
function PagePhoto({link, description, toggleSelected}) {
    return (
        <div onClick={toggleSelected} className='absolute h-screen w-screen top-0 left-0 bg-dark filter bg-opacity-75 flex justify-center items-center'>
            <img src={link} alt={description} className='object-fit max-h-screen'/>
        </div>
    )
}
function Photo ({link, description}) {
    const [selected, setSelected] = useState(false);
    const toggleSelected = () => setSelected(!selected);
    return (
        <div className='m-2 w-56'>
            <div className='h-44 w-56' onClick={toggleSelected}>
                {
                    selected ?
                    <PagePhoto link={link} description={description} toggleSelected={toggleSelected} /> :
                    <img src={link} alt={description} className='rounded-md shadow-md h-full w-full object-cover' />
                }
            </div>
            <p className='italic '>{description}</p>
        </div>
    )
}
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
        <div className="flex flex-col justify-around items-start">
            <h1>Des photos</h1>
            <h2>Vous pouvez trouvez un peau des photos qu'on a fait pendant notre periode en Villeneuve.</h2>
            <PhotoTable />
        </div>
    )
};