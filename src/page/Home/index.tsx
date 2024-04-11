import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/ui/button";

export function Home(){
    return (
      <main>
        <Header />
        <section className="w-full h-svh flex flex-col justify-center items-center gap-10 bg-white">
          <div className=" max-w-7xl p-2 text-slate-700 mb-3">
              <h1 className="text-2xl">Olá, eu sou o Bruno...</h1>
              <h2 className="text-6xl">Front End</h2>
              <h2 className="text-9xl">Web Developer</h2>
          </div>
          <div className="flex flex-row gap-6 p-5 items-center justify-center text-zinc-700">
            <Button title="Vamos conversar?"/>
            <Button iconBook bgcolor title="Baixar curriculo"/>
          </div>
        </section>
        <Footer />
      </main>
        
    )
}