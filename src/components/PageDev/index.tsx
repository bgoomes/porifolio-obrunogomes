import { Redes } from "../ui/Redes";
import img from "../../assets/manutencao.svg"

export function Dev() {
    return (
      <div className="flex flex-col items-center justify-center gap-4 my-8 fixed left-1/2  top-1/2 -translate-x-1/2 -translate-y-1/2 ">
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
  