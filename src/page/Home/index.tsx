import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Redes } from "../../components/ui/Redes";
import { Button } from "../../components/ui/button";
import { Contato } from "../Contato";
import { Projetos } from "../Projetos";
import { Sobre } from "../Sobre";

export function Home(){
    return (
      <main>
        <Header />
        <section className="relative w-full h-svh flex flex-col justify-center items-center gap-10 bg-white">
          
          <div className="absolute top-80 max-w-7xl p-2 text-slate-700 mb-3">
              <h1 className="text-2xl">Olá, eu sou o Bruno...</h1>
              <h2 className="text-6xl">Front End</h2>
              <h2 className="text-9xl">Web Developer</h2>
          </div>
          <div className="absolute max-w-7xl right-[270px] top-[340px] flex flex-row gap-6 p-5 items-center justify-center text-zinc-700">
            <Redes />
          </div>
          <div className="absolute bottom-20">
            <Button  title="Vamos conversar..." />
          </div>
        </section>
        <Sobre />
        <Projetos />
        <Contato />
        <Footer />
      </main>
        
    )
}