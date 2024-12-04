import { Card } from "../../components/ui/cardProjetos";
import { Title } from "../../components/ui/title";
import { projetos } from '../../data/projetos.json'


export function Projetos() {
    return (
      <section id="projetos" className="w-full py-28 flex items-center justify-center">
      <div className="w-full sm:w-[1080px] m-auto flex flex-col gap-10">
        <Title title="Projetos" />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4"> 

            {projetos.map((projeto) => (
              <Card
                key={projeto.id}
                title={projeto.title}
                description={projeto.description}
                cover={projeto.cover}
                tag1={projeto.tags.tag1}
                tag2={projeto.tags.tag2}
                tag3={projeto.tags.tag3}
                linkGit={projeto.linkGit}
                linkURL={projeto.linkURL}
              />
            ))}   
        </div>
      </div>
      
    </section>
    )
}