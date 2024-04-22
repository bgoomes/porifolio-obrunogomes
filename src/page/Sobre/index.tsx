import img from "../../assets/manutencao.svg"
export function Sobre() {
    return (
        
        <section className="w-full h-svh flex bg-zinc-800">
          <div className="w-[1150px] m-auto p-4 shadow-zinc-750 shadow-md rounded-md  flex flex-row  gap-20">
            <div className="w-2/4">
              <div className="p-6">
                <p>Me chamo Bruno Gomes...</p>
                <p>Tenho 35 anos sou cristão, casado e pai da Manu!</p>
                <p>Durante muito tempo trabahando na área de manutenção, resolvi mudar para desenvolvimento, focado em fron</p>
              </div>
            </div>
            <div className="w-2/4 h-96 flex items-center">
              <img src={img} alt="Foto" className="w-[400px]" />
            </div>
          </div>
        </section>
        
      
    )
}