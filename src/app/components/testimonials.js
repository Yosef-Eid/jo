import { getId, jo } from "../../jo/jo";

/**
 * Testimonials component
 * a div with a slider of testimonials
 */
export default function testimonials() {
    return jo("div", { class: "p-6 pb-40", children: [
            jo("h1", { class: "text-2xl font-bold text-center mb-4", children: ["Testimonials"] }),
            jo("div", {
                class: "relative w-full max-w-4xl mx-auto overflow-hidden",
                children: [

                    // slider navigation back
                    jo("button", {
                        class: "absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white w-[40px] h-[40px] cursor-pointer hover:bg-[#FFD748] rounded-full shadow-md transition hover:scale-110",
                        onclick: () => scrollSlider(-1),
                        children: ["←"]
                    }),

                    // slider container
                    jo("div", {
                        id: "sliderContainer",
                        class: "w-full overflow-hidden",
                        children: [
                            // slider
                            jo("div", {
                                id: "slider",
                                class: "flex transition-transform duration-500 ease-in-out",
                                children: testimonialsData.map((text, index) =>
                                    jo("div", {
                                        class: "min-w-full p-6 flex items-center justify-center snap-center",
                                        children: [
                                            jo("p", { class: "text-md text-center max-w-lg", children: [text] })
                                        ]
                                    })
                                )
                            })
                        ]
                    }),

                    // slider navigation next
                    jo("button", {
                        class: "absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white w-[40px] h-[40px] cursor-pointer hover:bg-[#FFD748] rounded-full shadow-md transition hover:scale-110",
                        onclick: () => scrollSlider(1),
                        children: ["→"]
                    }),
                ]
            })
        ]
    });
}

//Testimonials data

const testimonialsData = [
    "‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas.’’",
    "‘’Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus.’’",
    "‘’Pellentesque in risus non dui venenatis sollicitudin sed vitae diam.’’",
    "‘’Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque malesuada et erat ut sodales.’’",
    "‘’Vivamus in justo nec nulla aliquet luctus non id eros. Curabitur malesuada purus non augue consectetur.’’"
];

// Current index of the slider
 
let currentIndex = 0;

// Scroll slider function -1 or 1
 
function scrollSlider(direction) {
    let slider = document.getElementById("slider");
    if (!slider) return;

    currentIndex += direction;

    if (currentIndex < 0) currentIndex = testimonialsData.length - 1;
    else if (currentIndex >= testimonialsData.length) currentIndex = 0;

    let offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

