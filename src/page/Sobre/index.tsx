import { Tech } from "../../components/ui/tech";

export function Sobre() {
    return (
        
        <section id="sobre" className="w-full h-svh py-28 flex items-center justify-center">
          <div className="max-w-[1080px] h-[600px] m-auto p-10 flex flex-col gap-8">
            <h1 className="text-black font-bold text-2xl underline">Sobre min</h1>
            <div className=" flex flex-row gap-8 p-5 text-black">
              <div className="w-1/2 rounded-xl border">
                <img src="#" alt="Foto perfil" />
              </div>
              <div className="w-1/2 flex flex-col  font-JMH gap-4 text-gray-600">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi omnis, a veritatis accusantium magnam 
                  distinctio autem itaque saepe fuga aperiam, explicabo magni quaerat non rerum ipsum vitae id, iste praesentium!
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi omnis, a veritatis accusantium magnam 
                  distinctio autem itaque saepe fuga aperiam, explicabo magni quaerat non rerum ipsum vitae id, iste praesentium!
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi omnis, a veritatis accusantium magnam 
                  distinctio autem itaque saepe fuga aperiam, explicabo magni quaerat non rerum ipsum vitae id, iste praesentium!
                </p>
              </div>
            </div>
            <div className="border w-full h-20 ">
                <Tech />
            </div>
          </div>
          
        </section>
        
      
    )
}