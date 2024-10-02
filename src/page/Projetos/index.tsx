import { Card } from "../../components/ui/cardProjetos";
import { Title } from "../../components/ui/title";
import fit from "../../assets/fitprotein.png"
import todo from "../../assets/todo.png"
import link from "../../assets/links.png"
import gio from "../../assets/gio.png"


export function Projetos() {
    return (
      <section id="projetos" className="w-full py-28 flex items-center justify-center">
      <div className="w-full sm:w-[1080px] m-auto flex flex-col gap-10">
        <Title title="Projetos" />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4"> 
        <Card
                title="GIO"
                description="Site da Agência de cultura de marca GIO"
                cover={gio}
                tag1="Wordpress"
                tag2="CSS"
                tag3="PHP"
                linkGit="https://github.com/bgoomes/"
                linkURL="https://gio.com.vc" 
          />
          <Card 
                title="FitProtein"
                description="Página para venda de produto de mix de proteínas."
                cover={fit}
                tag1="React"
                tag2="Tailwind"
                tag3="vite"
                linkGit="https://github.com/bgoomes/fitProtein"  
                linkURL="https://fit-protein.vercel.app"
                
          />  
          <Card
                title="to do"
                description="App criado como desafio da trilha de React da Rocketseat"
                cover={todo}
                tag1="React"
                tag2="CSS Module"
                tag3="Figma"
                linkGit="https://github.com/bgoomes/fundamentosReact-ignite-Desafio01/tree/main"
                linkURL="https://minhalistatarefas.vercel.app/" 
          />

          <Card
                title="Links"
                description="Página de link úteis criada em HTML e CSS."
                cover={link}
                tag1="HTML"
                tag2="CSS"
                tag3="JavaScript"
                linkGit="https://github.com/bgoomes/"
                linkURL="https://obrunogomesreal.vercel.app/" 
          />

          
        </div>
      </div>
      
    </section>
    )
}