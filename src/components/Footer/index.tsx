import { Redes } from "../ui/Redes";
import { Button } from "../ui/button";

export function Footer(){
    return(
        <div>
            <header>
                <span>Vamos conversar?</span>
                <p>
                    Tem alguma ideia que precisa tirar do papel, sinta-se a vontade para me mandar um mensagem, quem sabe eu possa ajudar!
                </p>
                
            </header> 
            <Button />
            <Redes />     
        </div>
    )
}