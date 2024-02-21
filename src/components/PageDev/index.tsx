import { Redes } from "../ui/Redes";
import img from "../../assets/manutencao.svg"

export function Dev() {
    return (
      <div className="flex flex-col items-center justify-center inset-0 gap-4 my-8">
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={img} alt="imagem de um dev codando" className="w-[400px] "/>
          <h1 className="font-medium text-gray-600">Pagina em desenvolvimento!</h1>
        </div>
        <div>
          <Redes />
        </div> 
      </div>
    
    )
  }
  