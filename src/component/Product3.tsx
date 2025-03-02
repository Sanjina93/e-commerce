import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faHooli, faLyft, faPiedPiperHat, faRedditAlien, faStripe } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import { Link } from 'react-router-dom';

export const pros = [
  {
    id: 7,
    image: "../../images/shopcard/10.PNG",
    title: "Graphic Design1",
    description: "English Department",
    price: "$16.48",
    amount: "$6.48",
  },
  {
    id: 8,
    image: "../../images/shopcard/11.PNG",
    title: "Graphic Design2",
    description: "English Department",
    price: "$16.48",
    amount: "$6.48",
  },
  {
    id: 9,
    image: "../../images/shopcard/12.PNG",
    title: "Graphic Design3",
    description: "English Department",
    price: "$16.48",
    amount: "$6.48",
  },
  {
    id: 10,
    image: "../../images/shopcard/13.PNG",
    title: "Graphic Design4",
    description: "English Department",
    price: "$16.48",
    amount: "$6.48",
  },
]

export const Product3 = () => {
  return (
    <div className='bg-[#FAFAFA] sm:w-[1257px] md:w-[1355px] lg:w-[1455px] xl:w-full h-[886px] pt-[30px]   gap-[30px]'>
      <div className='w-[1124px] h-[620px] justify-self-center '>
        <h3 className='w-[399px] h-[32px] font-bold font-2xl tracking-[0.1px] text-center text-[#252B42]'>BESTSELLER PRODUCTS</h3>
        <div className='w-[1042px] h-[2px] bg-[#ECECEC] ml-10'></div>

        <div className='flex w-[1049px] h-[442px] gap-[30px] mt-5 ml-8'>
          {pros.map((pro) => (
            <div key={pro.id} className='w-[239px] h-[442px]'>
              <Link to={`/product3/${pro.id}`} className='no-underline'>
                <div className='w-[239px] h-[280px]'>
                  <img src={pro.image} alt="pro" className="h-full object-cover" />
                </div>
                <div className='w-[239px] h-[162px] px-[25px] pt-[25px] pb-[35px]'>
                  <h5 className='w-[131px] h-[24px] font-bold text-base text-[#252B42] tracking-[0.1px]'>{pro.title}</h5>
                  <p className='w-[146px] h-[24px] font-bold text-sm tracking-[0.2px] text-[#737373]'>{pro.description}</p>
                  <div className='flex w-[108px] h-[34px] py-[5px] px-[3px] gap-[9px] font-bold text-base tracking-[0.1px]'>
                    <h5 className='w-[52px] h-[24px]  text-[#BDBDBD]'>{pro.price}</h5>
                    <h5 className='w-[45px] h-[24px] text-[#23856D]'>{pro.amount}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='h-[175px]'>
        <div className='flex w-[1054px] h-[175px] py-[50px] gap-[30px] justify-self-center'>
          <div className='w-[153px] h-[34px]'>
            <FontAwesomeIcon icon={faHooli} className='w-[102.99px] h-[33.81px] top-[0.04px] left-[0.01px] text-[#737373]' />
          </div>
          <div className='w-[146px] h-[59px]'>
            <FontAwesomeIcon icon={faLyft} className='w-[83px] h-[58.96px] top-[0.02px] text-[#737373]' />
          </div>
          <div className='w-[152px] h-[75px]'>
            <FontAwesomeIcon icon={faPiedPiperHat} className='w-[102px] h-[74.84px] top-[0.15] text-[#737373]' />
          </div>
          <div className='w-[151px] h-[42px]'>
            <FontAwesomeIcon icon={faStripe} className='w-[102.98px] h-[41.98px] left-[0.02px] text-[#737373]' />
          </div>
          <div className='w-[151px] h-[62px]'>
            <FontAwesomeIcon icon={faAws} className='w-[103.68] h-[61.75px] top-[0.13px] left-[0.16px] text-[#737373]' />
          </div>
          <div className='w-[151px] h-[72px]'>
            <FontAwesomeIcon icon={faRedditAlien} className='w-[75.75px] h-[71.86px] top-[0.14px] left-[0.12px] text-[#737373]' />
          </div>
        </div>


      </div>
    </div>



  )
}

