import { Tech } from "../../components/ui/tech";
import user from "../../assets/user.svg"
import { Title } from "../../components/ui/title";
import { Destaque } from "../../components/ui/destaque";

export function Sobre() {

  function getAge(dateString: any) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return Number(age);
}
    return (
        
        <section id="sobre" className="w-full h-[1280px] sm:h-svh py-28 flex items-center justify-center">
          <div className="w-full sm:max-w-[1080px] h-[1000px] m-auto p-10 flex flex-col gap-8">
            <Title title="Sobre" />
            <div className=" flex flex-col sm:flex-row gap-8 p-5 text-black">
              <div className="w-full sm:w-1/2 flex items-center justify-center">
                <img src={user} alt="Foto perfil" className="w-[300px]" />
              </div>
              <div className="w-full sm:w-1/2 flex flex-col justify-center font-JMH gap-4 text-gray-600">
                <p>
                  Me chamo <Destaque text="Bruno" />, Cristão, tenho {getAge('1989/01/16')} anos, sou casado e pai da <Destaque text="Manu"/>!
                </p>
                <p>
                  Sou estudante de <Destaque text="Sistemas para Internet" />, e focado em <Destaque text="Desenvolvimento Web frontend" />.
                </p>
                <p>
                  Ao longo da minha trajetória profissional, já exerci a função de líder de equipe, onde fui responsável pelo gerenciamento de processos em uma assistência técnica
                   de smartphones. Essa experiência fortaleceu minhas habilidades em liderança, gestão de projetos e resolução de problemas. Atualmente, meu foco está no aprofundamento
                    em desenvolvimento web, especialmente no front-end, utilizando tecnologias como: <Destaque text="React, Tailwind, JS, TS" />.
                </p>
                <p>Além disso, atuo com desenvolvimento em <Destaque text="Wordpress" />, criando páginas que aliam desempenho e design para uma experiência de usuário otimizada.
                   Estou em constante aprendizado e atualização para acompanhar as melhores práticas e inovações no campo da tecnologia e do desenvolvimento web.</p>
              </div>
            </div>
            <div className=" w-full h-20 ">
                <Tech />
            </div>
          </div>
          
        </section>
        
      
    )
}