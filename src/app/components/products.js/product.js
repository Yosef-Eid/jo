import { jo } from "../../../jo/jo";
import { data } from "./data"; 
export default function product() {
    
  return (
    jo('div', {class:'grid grid-cols-3 max-[1110px]:grid-cols-2 max-[700px]:grid-cols-1 items-center justify-between gap-10 px-[5%]', children:[
        ...data.map((item) => jo('div', {class:'flex items-center justify-start gap-6 border border-transparent hover:border-[#7FB6B1] p-1 rounded-lg cursor-default', children:[
            jo('div', {class:'min-w-[90px] min-h-[80px] rounded-2xl bg-[#B7CCCA] flex justify-center items-center', children:[jo('img', {src:item.img, width:'80px', class:'mt-[-40px]'})]}),
            jo('div', {class:'', children:[
                jo('h3', {class:'font-bold ', t:item.name}),
                jo('p', {class:'text-[#6A6A6A]', t:item.description}),
                jo('a', {href:`/${item.id}` , onclick:() => history.pushState({}, '', `/${item.id}`) , t:'Show more', class:'text-[#6A6A6A] font-bold text-sm hover:text-[#35736E]',})
            ]})
        ]})),
    ]})
  )
}
