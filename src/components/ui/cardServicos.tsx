interface serviceProps {
    title: string
    item: string
    item2: string
    item3: string
}

export function CardServicos({ title, item, item2, item3 }:serviceProps){
    return(
        <div className="w-[400px] h-[300px] rounded-xl shadow-xl">
            <div className="p-10 text-black flex flex-col gap-8">
                <h2 className="text-2xl font-bold">{title}</h2>
                <div>
                    <ul>
                        <li>{item}</li>
                        <li>{item2}</li>
                        <li>{item3}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}