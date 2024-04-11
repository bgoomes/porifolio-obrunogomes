import { Link } from "react-router-dom";

export function Header(){
    return (
        <header className="w-full h-20 border-b-2 border-black/10 bg-zinc-800 text-slate-300 fixed">
            <div className=" max-w-6xl m-auto flex flex-row p-6 justify-between">
                <div>
                    <h1>obrunogomesreal</h1>
                </div>
                    <nav>
                        <ul className="flex gap-8">
                            <li>Sobre</li>
                            <li>Projetos</li>
                            <li><Link to="#footer">Contato</Link></li>
                        </ul>
                    </nav>
             </div>
            
        </header>
    )
}