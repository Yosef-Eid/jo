import { jo } from "../jo/jo.js";
import choose from "./components/choose.js";
import crafted from "./components/crafted.js";
import header from "./components/header.js";
import modern from "./components/modern.js";
import product from "./components/products.js/product.js";
import testimonials from "./components/testimonials.js";

export default function Home() {
  return jo("div", { class:'pt-20 flex flex-col gap-20 bg-[#EFF2F1]',
    children:[
      header(),
      crafted(),
      choose(),
      modern(),
      product(),
      testimonials()
    ]
        
  },);
}
