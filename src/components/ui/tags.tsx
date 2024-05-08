interface Props{
    tag: string
}
export function Tags({tag}: Props){
   
    return (
        <div className=" flex items-center justify-center py-1 px-2 bg-green text-gray-600 cursor-pointer rounded-full text-xs font-semibold shadow-sm hover:scale-105">{tag}</div>
    )
}