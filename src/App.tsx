import { Footer } from "./components/Footer";
import { Header } from "./components/Header";


export function App() {
  return (
    <main>
      <Header />
        <section className="w-full h-svh flex flex-col flex-1 bg-white">
          <div className=" max-w-7xl border-4 m-auto p-2 text-slate-700">
              <h1>Olá, eu sou o Bruno!</h1>
              <h2 className="text-6xl">Front End</h2>
              <h2 className="text-9xl">Desenvolvedor Web</h2>
          </div>
        </section>
        <Footer />
    </main>
    
  )
}


