import { Link } from "react-router-dom";
import logo from "../../assets/logoB.svg"

export function Header(){
    return (
        <header className="w-full h-20  shadow-zinc-750 shadow-md bg-white text-gray-800 text-lg font-bold z-10 fixed">
            <div className=" max-w-6xl m-auto flex items-center flex-row p-4 justify-between">
                <div>
                   <Link to="/home"><img src={logo} alt="" className="w-48" /></Link>
                </div>
                    <nav>
                        <ul className="flex gap-4">
                            <li><Link to="/sobre" className=" hover:border-b-2 hover:border-green transition-all">Sobre</Link></li>
                            <li><Link to="/projetos" className="hover:border-b-2 hover:border-green transition-all">Projetos</Link></li>
                            <li><Link to="/contato" className="hover:border-b-2 hover:border-green transition-all">Contato</Link></li>
                        </ul>
                    </nav>
             </div>
            
        </header>
    )
}