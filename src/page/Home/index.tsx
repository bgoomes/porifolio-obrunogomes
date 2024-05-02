
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Redes } from "../../components/ui/Redes";

import { Contato } from "../Contato";
import { Projetos } from "../Projetos";
import { Sobre } from "../Sobre";
import { EscreveTexto } from "../../components/ui/escrevenatela";

export function Home(){
  
    return (
      <main>
        <Header />
        <section className="relative w-full h-svh flex flex-col justify-center items-center gap-10 bg-white">
          
          <div className="absolute top-[250px] flex flex-col items-center  max-w-7xl p-2 text-slate-700 mb-3">
              <h1 className="text-2xl">Olá, eu sou o...</h1>
              <h2 className="text-6xl">Bruno Gomes</h2>        
          </div>
          <div className="text-slate-700 mt-20">
              <h2 className="text-9xl"><EscreveTexto /></h2>
          </div>
          
          <div className="absolute bottom-20 text-black">
            <Redes /> 
          </div>
        </section>
        <Sobre />
        <Projetos />
        <Contato />
        <Footer />
      </main>
        
    )
}