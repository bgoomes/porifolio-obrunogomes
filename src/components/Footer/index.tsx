
import { Redes } from "../ui/Redes";
import { Button } from "../ui/button";

export function Footer(){
    return(
        <footer id="fotter" className="w-full bg-zinc-800 text-slate-300">
            <div className=" max-w-6xl m-auto p-6">
                <header className="flex flex-col mb-4">
                    <span>Vamos conversar?</span>
                    <p>
                        Tem alguma ideia que precisa tirar do papel, sinta-se a vontade para me mandar um mensagem, quem sabe eu possa ajudar!
                    </p>
                </header> 
                <Button title="Fale comigo!"/>
                <div className="flex flex-col items-center">
                   <Redes />
                   <div className="w-full flex justify-between">
                        <span className="text-xs text-zinc-400">© 2024 - Todos direitos reservados</span>
                        <span className="text-xs text-zinc-400">Desenvolvido por @obrunogomesreal</span>
                   </div>
                   
                </div>
            </div>
                
        </footer>
    )
}