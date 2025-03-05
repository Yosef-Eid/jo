import { jo } from "../../jo/jo";

export default function Footer() {
    return jo("footer", { class: "relative bg-white text-gray-800 py-12 mt-10",
        children: [
            // Subscription Section
            jo('div', {class:'w-full flex justify-end px-[5%] mt-[-150px]', children:[
              jo('img', {src:'/img/sofa.svg', class:'w-77 '}),
            ]}),
            jo("div", {
                class: "max-w-6xl mx-auto px-4 text-center pb-6 mb-6",
                children: [
                    jo("h2", { class: "text-lg font-semibold flex justify-start items-center gap-2", t:"Subscribe to Newsletter"}),
                    jo("div", {
                        class: "flex flex-col md:flex-row justify-start items-start gap-4 mt-4",
                        children: [
                            jo("input", { type: "text", placeholder: "Enter your name", 
                                class: "px-4 py-2 rounded-lg border border-gray-400 focus:outline-none" 
                            }),
                            jo("input", { type: "email", placeholder: "Enter your e-mail", 
                                class: "px-4 py-2 rounded-lg border border-gray-400 focus:outline-none" 
                            }),
                            jo("button", { 
                                class: "bg-teal-600 p-3 rounded-full text-white hover:bg-teal-700", 
                                children: ["📩"] 
                            })
                        ]
                    })
                ]
            }),

            // Main Footer Content
            jo("div", {
                class: "max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-12 text-left",
                children: [
                    // FIN Section
                    jo("div", {
                        children: [
                            jo("h2", { class: "text-3xl font-bold text-teal-700 mb-2", children: ["FIN"] }),
                            jo("p", { class: "text-gray-600 text-sm", 
                                children: ["Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done."] 
                            }),
                            jo("p", { class: "text-gray-500 text-xs mt-2", 
                                children: ["This small text has to be placed here, since this is"] 
                            }),
                            // Social Icons
                            jo("div", {
                                class: "flex gap-3 mt-4",
                                children: [
                                    jo("a", { href: "#", class: "text-gray-600 hover:text-teal-600 text-xl", children: ["🔵"] }), // Facebook
                                    jo("a", { href: "#", class: "text-gray-600 hover:text-teal-600 text-xl", children: ["📷"] }), // Instagram
                                    jo("a", { href: "#", class: "text-gray-600 hover:text-teal-600 text-xl", children: ["🐦"] }), // Twitter
                                    jo("a", { href: "#", class: "text-gray-600 hover:text-teal-600 text-xl", children: ["💼"] })  // LinkedIn
                                ]
                            })
                        ]
                    }),

                      // Links Section
                    jo("div", {
                      children: [
                          jo("h3", { class: "text-lg font-semibold mb-2", children: ["About"] }),
                          jo("ul", {
                              class: "space-y-2 text-gray-600",
                              children: ["About us", "Services", "Blog", "Contact us"].map(item => 
                                  jo("li", { children: [jo("a", { href: "#", class: "hover:text-teal-600", children: [item] })] })
                              )
                          })
                      ]
                  }),

                  jo("div", {
                    children: [
                        jo("h3", { class: "text-lg font-semibold mb-2", children: ["Support"] }),
                        jo("ul", {
                            class: "space-y-2 text-gray-600",
                            children: ["Knowledge base", "Live chat"].map(item => 
                                jo("li", { children: [jo("a", { href: "#", class: "hover:text-teal-600", children: [item] })] })
                            )
                        })
                    ]
                }),
                jo("div", {
                    children: [
                        jo("h3", { class: "text-lg font-semibold mb-2", children: ["Support"] }),
                        jo("ul", {
                            class: "space-y-2 text-gray-600",
                            children: ["Knowledge base", "Live chat"].map(item => 
                                jo("li", { children: [jo("a", { href: "#", class: "hover:text-teal-600", children: [item] })] })
                            )
                        })
                    ]
                }),

                  jo("div", {
                      children: [
                          jo("h3", { class: "text-lg font-semibold mb-2", children: ["Company"] }),
                          jo("ul", {
                              class: "space-y-2 text-gray-600",
                              children: ["Jobs", "Our team", "Leadership", "Privacy Policy"].map(item => 
                                  jo("li", { children: [jo("a", { href: "#", class: "hover:text-teal-600", children: [item] })] })
                              )
                          })
                      ]
                  })
                    
                ]
            }),

            // Bottom Footer
            jo("div", {
                class: "max-w-6xl mx-auto px-4 text-center border-t border-gray-300 mt-6 pt-6",
                children: [
                    jo("div", {
                        class: "flex flex-wrap justify-center gap-4 mb-4",
                        children: ["Nordic Chair", "Kruzo Aero", "Ergonomic"].map(item => 
                            jo("a", { href: "#", class: "text-gray-600 hover:text-teal-600", children: [item] })
                        )
                    }),
                    
                    jo("p", { class: "text-gray-500 text-sm", children: ["Copyright 2022 zainali00769@gmail.com. All Rights Reserved."] })
                ]
            })
        ]
    });
}
