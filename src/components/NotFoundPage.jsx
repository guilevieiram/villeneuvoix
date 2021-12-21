export default function NotFoundPage(){
    return (
        <div className="my-10 flex flex-col justify-around items-start">
            <h1 className="my-4">404 Erreur</h1>
            <h2 className="my-4">La page que vous avez demandé ne peut pas être trouvé ...</h2>
            <p className="my-4">Revenir à page d'accueil <a href="/" className="underline">ici</a>.</p>
        </div>
    )
}