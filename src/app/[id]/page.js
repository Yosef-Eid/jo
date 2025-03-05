import { jo } from "../../jo/jo";
import { data } from "../components/products.js/data";


export default function page() {

    const id = location.pathname.split('/').pop();
    const item = data.find((product) => product.id == id);

  return (
    jo('div', {class:'pt-40', children:[
        jo('div', {class:'flex items-center justify-start gap-6 border border-transparent hover:border-[#7FB6B1] p-1 rounded-lg cursor-default', children:[
            jo('div', {class:'min-w-[90px] min-h-[80px] rounded-2xl bg-[#B7CCCA] flex justify-center items-center', children:[jo('img', {src:item.img, width:'80px', class:'mt-[-40px]'})]}),
            jo('div', {class:'', children:[
                jo('h3', {class:'font-bold ', t:item.name}),
                jo('p', {class:'text-[#6A6A6A]', t:item.description}),
            ]}),
        ]})
    ]})
  )
}
