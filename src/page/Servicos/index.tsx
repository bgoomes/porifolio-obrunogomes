
import { services } from '../../data/services.json'
import { CardServicos } from "../../components/ui/cardServicos";
import { Title } from "../../components/ui/title";

export function Servicos(){
    return (
        <section id="servicos" className="w-full h-svh flex items-center justify-center">
            <div className="w-full sm:w-[1080px] m-auto flex flex-col gap-10">
                <Title title="Serviços" />
                <div className="w-full gap-4 flex justify-between mt-10"> 
                    {services.map((servicos) => (
                        <CardServicos 
                            key={servicos.id}
                            title={servicos.title}
                            item={servicos.item}
                            item2={servicos.item2}
                            item3={servicos.item3}    
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}