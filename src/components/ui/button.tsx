import { Coffee } from "@phosphor-icons/react"
interface buttonType {
    title: string
}


export function Button({title, ...rest}:buttonType ){
    return (
        <button className="flex gap-2 items-center text-gray-900 rounded-full bg-slate-200 p-3 w-40 " {...rest}>
            <Coffee size={24} />
           {title}
        </button>

    )
}