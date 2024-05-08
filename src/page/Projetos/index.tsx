import { Card } from "../../components/ui/cardProjetos";
import { Title } from "../../components/ui/title";
import { projetos } from "../../data/projetos.json"


export function Projetos() {
    return (
      <section id="projetos" className="w-full py-28 flex items-center justify-center">
      <div className="w-full sm:w-[1080px] m-auto flex flex-col gap-10">
        <Title title="Projetos" />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4"> 
         {projetos.map((proj) => {
            return(
              <Card 
                  key={proj.id}
                  title={proj.title}
                  description={proj.description}
                  cover={proj.cover} 
                  linkGit={proj.linkGit}  
                  linkURL={proj.linkIRL} 
                
              />
            )
         })}
        </div>
      </div>
      
    </section>
    )
}