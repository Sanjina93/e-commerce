import { faChevronRight, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const features = [
    {
        id: 1,
        image: "../../images/shopcard/14.PNG",
        p1: "Google",
        p2: "Trending",
        p3: "New",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        h4: "Loudest à la Madison #1(L'integral)",
        image1: "../../images/shopcard/image.png",
        p4: "22 April 2021",
        image2: "../../images/shopcard/17.png",
        p5: "10 comments"
    },
    {
        id: 2,
        image: "../../images/shopcard/15.PNG",
        p1: "Google",
        p2: "Trending",
        p3: "New",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        h4: "Loudest à la Madison #1(L'integral)",
        image1: "../../images/shopcard/image.png",
        p4: "22 April 2021",
        image2: "../../images/shopcard/17.png",
        p5: "10 comments"
    },
    {
        id: 3,
        image: "../../images/shopcard/16.PNG",
        p1: "Google",
        p2: "Trending",
        p3: "New",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        h4: "Loudest à la Madison #1(L'integral)",
        image1: "../../images/shopcard/image.png",
        p4: "22 April 2021",
        image2: "../../images/shopcard/17.png",
        p5: "10 comments"
    },
    ]

export const Feature = () => {
    return (
        <div className='bg-[#FFFFFF] sm:w-[1257px] md:w-[1355px] lg:w-[1455px] xl:w-full  h-[994px]'>
            <div className='w-[1050px] h-[994px] left-[195px] py-[24px]  justify-self-center'>
                <div className='w-[691px] h-[84px] gap-[10px] justify-self-center'>
                    <h6 className='w-[614px] h-[24px] font-bold text-sm tracking-[0.2px] text-center'>Practice Advice</h6>
                    <h3 className='w-[619px] h-[50px] font-bold text-5xl text-center tracking-[0.2px] '>Featured Posts</h3>
                </div>
                <div className='flex w-[1045px] h-[606px] gap-[30px] mt-10'>
                    {features.map((feature) => (
                        <Link to={`/fdescription/${feature.id}`} className='no-underline'>
                            <div className='w-[348px] h-[606px]'>

                                <img className='w-[348px] h-[300px] bg-[#FFFFFF]' src={feature.image} alt="" />

                                <div className='bg-[#FFFFFF] shadow-md  w-[348px] h-[306px] px-[25px] pt-[25px] pb-[35px]'>

                                    <div className=' flex w-[159px] h-[16px] gap-[15px]  text-xs tracking-[0.2px]'>
                                        <p className='w-[45px] text-[#8EC2F2]'>{feature.p1}</p>
                                        <p className='w-[56px] text-[#737373]'>{feature.p2}</p>
                                        <p className='w-[28px] text-[#737373]'>{feature.p3}</p>
                                    </div>
                                    <div className='w-[247px] h-[60px] text-xl tracking-[0.2px] text-[#252B42]'>
                                        <h4>{feature.h4}</h4>
                                    </div>
                                    <div className='w-[250px] h-[60px] text-sm tarcking-[0.2px] text-[#737373] '>
                                        <p>{feature.description}</p>
                                    </div>
                                    <div className='flex w-[298px] h-[46px] justify-space-between py-[15px]'>
                                        <div className='flex w-[98px] h-[16px] gap-[3px]'>
                                            <img src={feature.image1} alt="" className='w-[12.94px] h-[13.14px] top-[1.53px] left-[1.53px] text-[#23A6F0]' />
                                            < p className='w-[77px] h-[16px] text-xs tracking-[0.2px] text-[#737373]'>{feature.p4}</p>
                                        </div>
                                        <div className='flex w-[105px] h-[16px] gap-[5px]'>
                                            <img src={feature.image2}
                                                alt="" className='w-[16px] h-[14.67px] ' />
                                            <p className='w-[84px] h-[16px] text-sm text-[#737373]'>{feature.p5}</p>
                                        </div>


                                    </div>
                                    <div className='flex w-[104px] h-[24px] gap-[10px]'>
                                        <h6 className='w-[85px] h-[24px] font-bold text-sm tracking-[0.2px] text-[#737373]'>Learn More</h6>
                                        <FontAwesomeIcon icon={faChevronRight} className='w-[8.62px] h-[16px] text-[#23A6F0] mt-1' />

                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    )
}

