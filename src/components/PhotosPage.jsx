import { useRef, useState } from 'react';
import { useOnClickOutside } from './funcitons';


function importAll(r) {
  const l = r.keys().map(r);
  return l.map( obj => obj.default)
}

const photosList = importAll(require.context('../data/main-photos', false, /\.(png|jpeg|jpg|svg|heic)$/));
const photosPrivateList = importAll(require.context('../data/secret-main-photos', false, /\.(png|jpeg|jpg|heic|svg)$/));


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

function PhotoTable({photos}){
    return (
        <div className="flex flex-wrap my-10 justify-center ">
            {
                photos.map((link, index) => <Photo key={index} link={link} description=""/>)
            }
        </div>
    )
};

export default function PhotosPage({privateMode}){
    const photos = privateMode ? photosPrivateList : photosList;

    return( 
        <div className="flex flex-col justify-around items-start my-10">
            <h1>Album de photos</h1>
            {
                privateMode ?
                <h2>Ce sont des photos ... simplement ça</h2>:
                <h2>Vous pouvez trouvez quelques photos que nous avons fait pendant notre période à Villeneuve.</h2>
            }
            <PhotoTable photos={photos}/>
        </div>
    )
};