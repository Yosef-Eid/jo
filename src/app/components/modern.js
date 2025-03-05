import { jo } from '../../jo/jo'

export default function modern() {
    return (
        jo('div', { class: 'overflow-hidden w-full flex justify-between  max-[1250px]:gap-y-[60px] gap-[5%] p-[5%] max-[1250px]:flex-col-reverse max-[1250px]:items-center max-[1250px]:justify-center  ', children: [
            // catalog
                jo('div', { class: ' overflow-hidden relative flex items-start gap-4 pl-20', children: [
                        jo('img', { src: '/img/Dotted (2).svg', class: 'absolute top-[-80px] left-0' }),
                        jo('img', { src: '/img/Mask group.svg', class: 'min-w-88 z-10  hover:scale-[1.1] transition' }),
                        jo('div', { class: 'min-w-[200px] flex flex-col gap-4 z-[222] ', children: [
                                jo('img', { src: '/img/lamp.svg', class: ' hover:scale-[1.1] transition' }),
                                jo('img', { src: '/img/chair.svg', class: ' hover:scale-[1.1] transition ml-[-50px]' }),
                            ]
                        }),
                    ]
                }),

                jo('div', {class:'flex flex-col gap-[26px]  max-[1250px]:items-center max-[1250px]:justify-center', children:[
                    jo('h1', {class:'font-bold text-[34px] text-[2F2F2F] max-[1250px]:text-center', t:"We help  you make Modern Interior Design"}),
                    jo('p', {class:'text-[#6A6A6A] text-sm max-[1250px]:w-[60%] max-[560px]:w-full max-[1250px]:text-center ',t:"Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the this is a long  post for the text.`This small text has to be place here, since this is a place holder. You can also chane it."}),
                    jo('div', {class:"grid grid-cols-2 gap-5 max-[520px]:grid-cols-1", children:[
                        jo('div', {class:'w-60 flex items-start justify-start gap-2', children:[
                            jo('div', {class:'min-w-2 min-h-2 border-2 border-[#3B5D50] rounded-full'}),
                            jo('p', {class:'mt-[-5px] text-[#6A6A6A]', t:'Donec mattis porta eros,let aliquet finibus '}),

                        ]}),
                        jo('div', {class:'w-60 flex items-start justify-start gap-2', children:[
                            jo('div', {class:'min-w-2 min-h-2 border-2 border-[#3B5D50] rounded-full'}),
                            jo('p', {class:'mt-[-5px] text-[#6A6A6A]', t:'Donec mattis porta eros,let aliquet finibus '}),

                        ]}),
                        jo('div', {class:'w-60 flex items-start justify-start gap-2', children:[
                            jo('div', {class:'min-w-2 min-h-2 border-2 border-[#3B5D50] rounded-full'}),
                            jo('p', {class:'mt-[-5px] text-[#6A6A6A]', t:'Donec mattis porta eros,let aliquet finibus '}),

                        ]}),
                        jo('div', {class:'w-60 flex items-start justify-start gap-2', children:[
                            jo('div', {class:'min-w-2 min-h-2 border-2 border-[#3B5D50] rounded-full'}),
                            jo('p', {class:'mt-[-5px] text-[#6A6A6A]', t:'Donec mattis porta eros,let aliquet finibus '}),

                        ]}),
                    ]}),
                    jo('button', {class:'w-[160px] h-10 bg-[#35736E] text-white rounded-full mt-2 cursor-pointer hover:bg-[#3B5D50] transition ', t:'Explore'}),

                ]})
            ]
        })
    )
}
