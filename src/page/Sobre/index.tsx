import { Tech } from "../../components/ui/tech";
import user from "../../assets/user.svg"
import { Title } from "../../components/ui/title";
import { Destaque } from "../../components/ui/destaque";

export function Sobre() {
    return (
        
        <section id="sobre" className="w-full h-[1280px] sm:h-svh py-28 flex items-center justify-center">
          <div className="w-full sm:max-w-[1080px] h-[600px] m-auto p-10 flex flex-col gap-8">
            <Title title="Sobre" />
            <div className=" flex flex-col sm:flex-row gap-8 p-5 text-black">
              <div className="w-full sm:w-1/2 flex items-center justify-center">
                <img src={user} alt="Foto perfil" className="w-[300px]" />
              </div>
              <div className="w-full sm:w-1/2 flex flex-col justify-center font-JMH gap-4 text-gray-600">
                <p>
                  Me chamo <Destaque text="Bruno" />, Cristão, tenho 35 anos, sou casado e pai da <Destaque text="Manu"/>!
                </p>
                <p>
                  Sou estudante de <Destaque text="Sistemas para Internet" />, e focado em <Destaque text="Desenvolvimento Web frontend" />.
                </p>
                <p>
                  Durante minha jornada, já atuei como lider de equipe, gerenciando toda parte de processos de uma assistencia técnica em smarphones, atualmete
                  estou focado nos estudos em desenvolvimento web com foco no front utilizando as tecnológias: <Destaque text="React, Tailwind, JS, TS" />.
                </p>
                <p>Atuo tambêm com desenvolvimento em Wordpress com criação de paginas!</p>
              </div>
            </div>
            <div className=" w-full h-20 ">
                <Tech />
            </div>
          </div>
          
        </section>
        
      
    )
}