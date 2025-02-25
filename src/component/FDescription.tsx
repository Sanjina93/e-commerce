import React from "react";
import { useParams } from "react-router-dom";


type Feature = {
    id: number;
    image: string;
    p1: string;
    p2: string;
    p3: string;
    description: string;
    h4: string;
    image1: string;
    p4: string;
    image2: string;
    p5: string;
};

const features = [
    {
        id: 1,
        image: "/images/shopcard/14.PNG",
        p1: "Google",
        p2: "Trending",
        p3: "New",
        description: "A good place is grounded in its context. It embraces and leverages on its surrounding natural and urban qualities to offer a rich, multi-sensorial experience that is unique to its location.Going to a good place should be an enjoyable and rewarding experience for people. This extends to activities that can be done on site, potential for memories to be formed or revisited, and offer opportunities for a multi-layered appreciation/experience of the place.A good place feels local - like you couldn’t find it anywhere else, and authentic, like you’ve just happened upon a new idea. This quality looks at the personality of a place, whether it feels too contrived or over-branded, and whether it has a distinctive character or a “cookie cutter” vibe.",
        h4: "Loudest à la Madison #1(L'integral)",
        image1: "/images/shopcard/image.png",
        p4: "22 April 2021",
        image2: "/images/shopcard/17.png",
        p5: "10 comments",
    },
    {
        id: 2,
        image: "/images/shopcard/15.PNG",
        p1: "Google",
        p2: "Trending",
        p3: "New",
        description: "Hotels may have valet parking, parking areas, and other vehicle-related services. Valet parking Valets park guests' vehicles and bring them back when requestedValets may also help with luggage and local informationValets can help create a positive first impression for guestsParking areas Hotels may have parking areas for guests' vehiclesSome hotels may also have valet parking, where guests can have their vehicles parked and brought back when they leaveOther vehicle- related services Hotels may offer services like helping guests get out of their vehicles and carry their luggageHotels may also offer services like helping guests with local information and various requestsHotels may also offer services like storing vehicle keys so that guests can quickly get their vehicles back when they leave",
        h4: "Loudest à la Madison #1(L'integral)",
        image1: "/images/shopcard/image.png",
        p4: "22 April 2021",
        image2: "/images/shopcard/17.png",
        p5: "10 comments",
    },
    {
        id: 3,
        image: "/images/shopcard/16.PNG",
        p1: "Google",
        p2: "Trending",
        p3: "New",
        description: "The environment gives us countless benefits that we can't repay our entire life. As they are connected with the forest, trees, animals, water, and air. The forest and trees filter the air and absorb harmful gases. Plants purify water, reduce the chances of flood maintain natural balance and many others.To decorate is to spiff something up, making it more colorful and attractive, like hanging streamers in a room or ornaments on a tree. Decorations are things used in this way. Many decorations are specific to holidays, like green decorations for St. Patrick's Day. Also, decorations are the honors given to people who have won or achieved something. A war hero's Purple Heart medal is a decoration. You can say that someone who has many of these honors is decorated.",

        h4: "Loudest à la Madison #1(L'integral)",
        image1: "/images/shopcard/image.png",
        p4: "22 April 2021",
        image2: "/images/shopcard/17.png",
        p5: "10 comments",
    },
];

export const FDescription = () => {
    const { id } = useParams();


    return (

        <div className="sm:w-[1257px] md:w-[1355px] lg:w-[1455px] xl:w-full my-32">
            {features.filter(features => features.id === Number(id)).map((features, index) => (
                <div key={index}>
                    <h2 className="text-2xl justify-self-center font-bold">{features.h4}</h2>
                   
                    <div className="grid grid-cols-2 m-5 my-4">
                        <img src={features.image} alt={features.h4} className=" rounded-lg shadow-md w-[695px] h-[485px] object-cover" />
                        <div>
                        <p className="text-lg ml-5 text-gray-500">{features.description}</p>
                        <div className="flex gap-4 mt-0 text-gray-500 ">
                        <img src={features.image1} alt="" className='w-[32px] h-[20px] ml-4 object-cover  text-[#23A6F0]' />
                        <p> {features.p4}</p>
                        <img src={features.image2} alt="" className='w-[20px] h-[20px]  object-cover' />
                        <p>{features.p5}</p>
                        </div>
                        </div>
                    </div>
                   
                   
                </div>
            ))}
        </div>
    );
};


