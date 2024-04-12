import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function Sobre() {
    return (
        <main>
        <Header />
        <section className="w-full h-svh py-24  flex justify-center bg-zinc-800">
          <div className="max-w-7xl border rounded-md flex flex-row items-center justify-between gap-2">
            <div className=" w-2/4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos similique, et deleniti dicta earum veniam ducimus ab officia quibusdam beatae porro accusantium officiis quia voluptatum. Autem quia error nemo ducimus.</p>
            </div>
            <div>img</div>
          </div>
        </section>
        <Footer />
      </main>
    )
}