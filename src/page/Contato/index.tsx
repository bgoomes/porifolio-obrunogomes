import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function Contato() {
    return (
        <main>
        <Header />
        <section className="w-full h-svh flex items-center justify-center">
          <h1 className="text-slate-800 font-bold">CONTATO</h1>
        </section>
        <Footer />
      </main>
    )
}