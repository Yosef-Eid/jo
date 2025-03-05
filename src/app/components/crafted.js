import { jo } from "../../jo/jo"

function crafted() {
    const data = [
        {
            img:'/img/product-1.svg',
            name:'Modern Chair',
            price:'$60.00'
        },
        {
            img:'/img/product-2.svg',
            name:'Kruzo Aero Chair',
            price:'$78.00'
        },
        {
            img:'/img/product-3.svg',
            name:'Ergonomic Chair',
            price:'$88.00'
        },
    ]
  return (
    jo("div", {class: "w-full flex flex-wrap  items-center justify-between px-[5%]  max-[1110px]:justify-center max-[1110px]:gap-y-[130px] max-[1110px]:gap-5 ", children:[
        jo('div', {class:'w-[214px] max-[560px]:w-full max-[560px]:text-center', children:[
            jo('h1', {class:'w-full text-[#2F2F2F] font-bold text-[34px]', t:'Crafted with excellent material'}),
            jo('p', {class:'w-full text-[#6A6A6A] text-sm', t:'Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done.'}),
            jo('button', {class:'w-[160px] h-10 bg-[#35736E] text-white rounded-full mt-2 cursor-pointer hover:bg-[#3B5D50] transition ', t:'Explore'}),
        ]} ),

        // jo('div', {class:'w-full flex items-center justify-between flex-wrap gap-4', children:[
            ...data.map((item) => jo('div', {class:'card relative w-[260px] h-[289px] bg-[#DCE5E4] text-center flex flex-col items-center justify-center rounded-2xl cursor-pointer hover:shadow-xl transition', children:[
                jo('img', {src:item.img, class:'mt-[-130px]'}),
                jo('h1', {class:'w-full text-[#2F2F2F] font-bold text-[18px]', t:item.name}),
                jo('p', {class:'w-full text-[#2F2F2F] text-sm font-bold ', t:item.price}),
                jo('button', {class:'s w-[35px] h-[35px] scale-0 bg-[#2F2F2F]  rounded-full  absolute bottom-[-15px] transition-[all_.3s] '}),
            ]}))
        ]})
    // ] })
  )
}

export default crafted
