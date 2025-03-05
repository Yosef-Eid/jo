import { jo } from "../../jo/jo.js"
function nav() {
  return (
    jo("nav", {
      class: "w-full h-20 bg-[#35736E] z-[9999] fixed top-0 flex items-center justify-between text-white px-[3%]", children: [
        jo('img', {src:"/img/FIN.png"}),

       jo("div", {class:'flex items-center justify-center gap-[111px]', children: [
         // links
         jo('div', {
          class: 'flex gap-[34px] text-lg', children: [
            jo("a", { t: "Home", href: "/", class:'hover:text-[#FECA11]' }),
            jo("a", { t: "About Us", href: "/about", class:'hover:text-[#FECA11]' }),
            jo("a", { t: "Services", href: "/services", class:'hover:text-[#FECA11]' }),
            jo("a", { t: "Blog", href: "/blog", class:'hover:text-[#FECA11]' }),
            jo("a", { t: "Contact Us", href: "/contact", class:'hover:text-[#FECA11]' }),
          ]
        }),

        // user and cart
        jo('div', { 
          class: 'flex', children: [
            jo("a", {href: "/user", children:[jo('img', {src:'/img/uswer.svg'})] }),
            jo("a", {href: "/cart", children:[jo('img', {src:'/img/cart.svg'})] }),
          ]}
        )
       ]}),
      ]
    })
  )
}

export default nav
