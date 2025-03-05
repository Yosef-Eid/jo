import { jo } from "../../jo/jo"


function header() {
    return (
        jo('header', {
            class: 'w-full h-[87vh] max-[1000px]:h-auto max-[1000px]:pt-20 bg-[#35736E] grid grid-cols-2 px-[3%] px-[5%] max-[1000px]:grid-cols-1 max-[1000px]:text-center', children: [
                jo('div', {
                    class: 'flex flex-col items-start justify-center gap-[83px] max-[1000px]:items-center ', children: [
                        // h1 title
                        jo('h1', { class: 'w-[75%] max-[560px]:w-full text-5xl font-bold font-sans text-white leading-[70px] max-[600px]:text-4xl max-[600px]:leading-[50px] max-[600px]:w-full', t: '"Transform your space with elegance."' }, { fontFamily: 'Gill Sans' }),

                        // buttons
                        jo('div', {
                            class: 'flex gap-[5%]',
                            children: [
                                jo('button', { class: 'w-[160px] max-[560px]:w-[140px] h-10 rounded-full bg-[#FFD748] text-lg text-black cursor-pointer hover:bg-[#FECA11] transition ', t: 'Shop Now' }),
                                jo('button', { class: 'w-[160px] max-[560px]:w-[140px] h-10 rounded-full bg-transparent border border-white text-lg text-black cursor-pointer hover:bg-[#FFD748] transition', t: 'Explore' })
                            ]
                        })]
                }),

                // image
                jo('div', {
                    class: 'w-full flex items-center justify-center gap-[111px] relative', children: [
                        jo('img', { src: '/img/couch.svg', class: 'z-10' }),
                        jo('img', { src: '/img/Dotted.svg', class: 'absolute top-24 right-0' })
                    ]
                })]
        })
    )
}

export default header
