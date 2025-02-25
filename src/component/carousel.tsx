// import React, { useState } from 'react';
// import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';

// const slides = [
//     {
//         id: 1,
//         image: "../../images/1.JPG",
//         title: "GROCERIES DELIVERY",
//         description: "We know how large objects will act, but things on a small scale just do not act that way.",
//     },
//     {
//         id: 2,
//         image: "../../images/shopcard/6.PNG",
//         title: "DELIVERY",
//         description: "We know how large objects will act, but things on a small scale just do not act that way.",
//     },
// ];

// export const Carousel = () =>{

//     return (
//       <CCarousel controls indicators>
//             {slides.map((slide) => (
//                 <CCarouselItem key={slide.id} className="w-[1440px] h-[640px] rounded-md bg-[#00000059] opacity-80">

//                         <CImage className=" w-full h-full object-cover" src={slide.image} alt='slide' />


//                     <CCarouselCaption className="inset-y-56 justify-self-center w-[699px] h-[330px] px-[41px] gap-[24px]">
//                         <h1 className="font-montserrat text-6xl font-bold tracking-tight leading-36">
//                             {slide.title}
//                         </h1>
//                         <p className="font-montserrat w-[526px] h-[60px] text-2xl font-normal leading-10 tracking-tighter mb-5">
//                             {slide.description}
//                         </p>
//                         <button className="bg-primary w-[204px] h-[62px] rounded-xl text-2xl tracking-tighter leading-7 px-[40px] py-[15px]">
//                             Start Now
//                         </button>
//                     </CCarouselCaption>
//                 </CCarouselItem>
//             ))}
//         </CCarousel>
//     );
// };

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const slides = [
    {
        id: 1,
        image: "../../images/1.JPG",
        title: "GROCERIES DELIVERY",
        description: "We know how large objects will act, but things on a small scale just do not act that way.",
    },
    {
        id: 2,
        image: "../../images/shopcard/5.PNG",
        title: "DELIVERY",
        description: "Experience quick and reliable delivery services at your doorstep.",
    },
    {
        id: 3,
        image: "../../images/shopcard/8.PNG",
        title: "GROCERIES DELIVERY",
        description: "Experience quick and reliable delivery services at your doorstep.",
    },
];

export const Carousel = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="sm:w-[1257px] md:w-[1355px] lg:w-[1455px] xl:w-full h-[640px] overflow-hidden bg-black opacity-3">
            <AnimatePresence>
                <motion.img
                    key={index}
                    src={slides[index].image}
                    alt="carousel image"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 1, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.1 }}
                />
            </AnimatePresence>
            <div className="absolute inset-0 flex flex-col items-center sm:w-[1235px] md:w-[1115px] sm:mt-32 md:mt-40 md:mx-32  xl:mt-16 justify-center text-white  p-4">

                <h1 className="text-6xl md:text-5xl font-bold tracking-tight leading-36">
                    {slides[index].title}
                </h1>
                <p className="w-[526px] h-[60px] text-2xl font-normal leading-10 tracking-tighter mb-5">
                    {slides[index].description}
                </p>
                <button className="bg-[#23A6F0] w-[130px] h-[50px] rounded-xl text-lg tracking-tighter leading-7 px-[10px] py-[10px]">
                    Start Now
                </button>
            </div>


            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
                onClick={prevSlide}
            >
                <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6 text-gray-300" />
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
                onClick={nextSlide}
            >
                <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6 text-gray-300" />
            </button>

        </div>
    );
};


































