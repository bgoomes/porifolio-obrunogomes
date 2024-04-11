import { AddressBook, Coffee } from "@phosphor-icons/react"
interface buttonType {
    title: string,
    iconBook?: boolean,
    bgcolor?: boolean
}


export function Button({title, iconBook, bgcolor, ...rest}:buttonType ){
    return (
        <button className={bgcolor ? "flex gap-2 items-center justify-center text-black rounded-full bg-cyan-500 p-3" : "flex gap-2 items-center justify-center text-gray-900 rounded-full bg-slate-200 p-3 "} {...rest}>
           {iconBook ? <AddressBook size={24} /> : <Coffee size={24} /> } 
           {title}
        </button>

    )
}