import { jo } from '../../jo/jo'

export default function choose() {
  return (
    jo('div', {class:'w-full px-[5%] flex justify-between max-[1110px]:flex-col gap-12 ', children:[
        jo('div', {class:'w-full flex flex-col gap-5 ', children:[
            jo('div', {class:'flex flex-col gap-2', children:[
                jo('h1', {class:'w-full text-[#2F2F2F] font-bold text-[34px]', t:'Why Choose Us'}),
                jo('p', {class:'w-[70%] text-[#6A6A6A] text-sm', t:'Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the'}),
            ]}),
            jo('div', {class:'grid grid-cols-2 gap-14 ', children:[
                jo('div', {class:'flex flex-col gap-1', children:[
                    jo('img', {src:'/img/care.svg', width:'40px'}),
                    jo('h3', {class:'text-[#2F2F2F] font-bold ', t:'Fast  & Free Shipping '}),
                    jo('p', {class:'text-[#6A6A6A]', t:'Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was'})

                ]}),
                jo('div', {class:'flex flex-col gap-1', children:[
                    jo('img', {src:'/img/care.svg', width:'40px'}),
                    jo('h3', {class:'text-[#2F2F2F] font-bold ', t:'Fast  & Free Shipping '}),
                    jo('p', {class:'text-[#6A6A6A]', t:'Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was'})

                ]}),
                jo('div', {class:'flex flex-col gap-1', children:[
                    jo('img', {src:'/img/care.svg', width:'40px'}),
                    jo('h3', {class:'text-[#2F2F2F] font-bold ', t:'Fast  & Free Shipping '}),
                    jo('p', {class:'text-[#6A6A6A]', t:'Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was'})

                ]}),
                jo('div', {class:'flex flex-col gap-1', children:[
                    jo('img', {src:'/img/care.svg', width:'40px'}),
                    jo('h3', {class:'text-[#2F2F2F] font-bold ', t:'Fast  & Free Shipping '}),
                    jo('p', {class:'text-[#6A6A6A]', t:'Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was'})

                ]}),
                ]})
        ]}),

        jo('div', {class:'w-full flex items-center justify-end max-[1110px]:justify-center relative', children:[
            jo('div', {class:'overflow-hidden z-10 mt-10', children:[
                jo('img', {src:'/img/Mask-group.svg', width:'500px', class:' hover:scale-[1.2] transition'}),
            ]}),
            jo('img', {src:'/img/Dotted (1).svg', class:'absolute top-0 left-0'}),
        ]}),
    ]})
  )
}
