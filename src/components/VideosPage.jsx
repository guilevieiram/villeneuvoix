import { YoutubeEmbed } from "./elements";
import videosList from '../data/videos.json';

function Video ({title, description, embedId}) {
    return (
        <div className="flex flex-col justify-around items-start my-6">
            <span className="w-full h-px bg-yellow my-4"></span>
            <h2 >{title}</h2>
            <p className="mb-2">{description}</p>
            <YoutubeEmbed embedId={embedId} />
        </div>
    )
};

export default function VideosPage (){
    return (
        <div className="my-10">
            <h1>La Soirée d'Adieu</h1>
            <h2>Malheureusement, en ligne ...</h2>
            <p className="py-4">On a preparé une compilation de videos pour célébré notre vie ici en Villeneuve-Sur-Lot!</p>
            {
                videosList.map(({title, description, id}, index) => <Video key={index} title={title} description={description} embedId={id}/>)
            }
        </div>
    )
};