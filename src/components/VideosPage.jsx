function importAll(r) {
  const l = r.keys().map(r);
  return l.map( obj => obj.default)
}

const videosList = importAll(require.context('../data/videos', false, /\.(mp4|MOV|mov)$/));
const videosPrivateList = importAll(require.context('../data/secret-videos', false, /\.(mp4|MOV|mov)$/));

function Video ({link}) {
    return (
        <div className="flex flex-col justify-around items-center my-6">
            <span className="w-full h-px bg-yellow my-4"></span>
            <video className=" max-h-screen" controls>
                <source src={link} type="video/mp4"/>
            </video>
        </div>
    )
};

export default function VideosPage ({privateMode}){
    const videos = privateMode ? videosPrivateList : videosList;
    return (
        <div className="my-10">
            <h1>Les Videos</h1>
            {
                privateMode ?
                <h2>Regarde les videos les plus drôles qu'on avait besoin de cacher.</h2>:
                <h2>Vous allez trouver quelque video que nous avons fait pendent ces 4 mois.</h2>

            }
            <p className="py-4">On a préparé cette compilation pour célébré nos temps ici à Villeneuve-Sur-Lot!</p>
            {
                videos.map((link, index) => <Video key={index} link={link}/>)
            }
        </div>
    )
};