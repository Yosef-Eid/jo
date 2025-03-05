import { jo } from "../../jo/jo";

export default function Home() {

  return jo("div", {
    
    children: [
      jo("div", { class:'pt-40 h-[88vh] flex items-center justify-center font-bold text-4xl',
         children: [
        
          jo('h1', {t:'Contact Page'})
        
      ] },),
    ]
  },);
}
