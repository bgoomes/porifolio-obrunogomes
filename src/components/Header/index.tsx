import logo from "../../assets/logoB.svg"
import { Navbar } from "../ui/navbar"



export function Header(){
    return (
        <header className="w-full h-20  shadow-zinc-750 shadow-md bg-white text-gray-800 text-lg font-bold z-10 fixed">
            <div className=" max-w-6xl m-auto flex items-center flex-row p-4 sm:justify-between justify-center">
                <div>
                  <a href="#home"><img src={logo} alt="Bruno Gomes" className="w-48" /></a>
                </div>
              <Navbar />
             </div>
            
        </header>
    )
}