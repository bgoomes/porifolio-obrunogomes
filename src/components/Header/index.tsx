import { Link } from "react-router-dom";

export function Header(){
    return (
        <header className="w-full h-20 shadow-zinc-750 shadow-md bg-zinc-800 text-slate-300 z-10 fixed">
            <div className=" max-w-6xl m-auto flex flex-row p-6 justify-between">
                <div>
                   <Link to="/home"> <h1>obrunogomesreal</h1></Link>
                </div>
                    <nav>
                        <ul className="flex gap-8">
                            <li><Link to="/sobre" className="hover:text-slate-200">Sobre</Link></li>
                            <li><Link to="/projetos" className="hover:text-slate-200">Projetos</Link></li>
                            <li><Link to="/contato" className="hover:text-slate-200">Contato</Link></li>
                        </ul>
                    </nav>
             </div>
            
        </header>
    )
}