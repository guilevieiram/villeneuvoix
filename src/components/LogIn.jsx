import { useState } from "react";

export default function LogIn({setPrivateMode}) {
    const correctPassword = 'chicalajaune';
    const [password, setPassword] = useState("");
    const changePassword = (e) => setPassword(e.target.value);
    const [incorrect, setIncorrect] = useState(false);
    const loginUser = (e) => {
        e.preventDefault();
        password === correctPassword ? setPrivateMode(true) : setIncorrect (true);
    }
    return (
        <div className="my-32 w-full flex flex-col justify-around items-center">
            <form className=" max-w-lg w-full border border-blue rounded-xl flex flex-col justify-around items-start px-10 py-10 shadow-lg" action="">
                <span className="my-6 flex flex-col w-full">
                    <input onChange={changePassword} className={`w-full bg-light bg-opacity-5  border-b px-4 py-2 border-${incorrect ? 'red-500' : 'yellow'} filter`} type="password" name="Password" placeholder="Mot de Passe" />
                    <p className="text-red-600 text-xs">{incorrect ? "Mot de passe incorrect" : ""}</p>
                </span>
                <button onClick={loginUser} className="button border border-yellow text-yellow my-4">Entrée</button>
            </form>
        </div>
    )
}