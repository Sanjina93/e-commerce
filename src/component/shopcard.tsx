import React from 'react'


export const Shopcard = () => {
  return (
    <div className="flex bg-[#FAFAFA] justify-center sm:w-[1255px] md:w-[1355px] lg:w-[1455px] xl:w-full h-[392px] py-20">
      <ul className="grid grid-cols-3  gap-6 w-[1084px]">
        <li className="bg-[#FFFFFF] w-[332px] h-[231px] border p-4 justify-between items-center">
          <div className="flex">
            <div>
              <p className="font-montserrat text-xl font-normal tracking-wide">Your Space</p>
              <h3 className="text-2xl font-bold leading-8 mt-2 ">Unique Life</h3>
              <p className="text-xl font-normal tracking-wide mt-2">Explore Items</p>
            </div>
            <div>
              <img className='w-40'
                src="../../images/shopcard/1.png" alt="shopimage" />

            </div>
          </div>
        </li>
        <li className=" bg-[#FFFFFF] w-[332px] h-[231px] border p-4 justify-between items-center">
          <div className="flex">
            <div>
              <p className="font-montserrat text-xl font-normal tracking-wide">Ends Today</p>
              <h3 className="text-2xl font-bold leading-8 mt-2 ">Elements Style</h3>
              <p className="text-xl font-normal tracking-wide mt-2">Explore Items</p>
            </div>
            <div>
              <img className='w-48'
                src="../../images/shopcard/2.png" alt="" />

            </div>
          </div>
        </li>



        <li className="bg-[#FFFFFF] w-[332px] h-[231px] border p-4 justify-between items-center">
          <div className="flex">
            <div>
              <p className="font-montserrat text-xl font-normal tracking-wide">Ends Today</p>
              <h3 className="text-2xl font-bold leading-8 mt-2 ">Elements Style</h3>
              <p className="text-xl font-normal tracking-wide mt-2">Explore Items</p>
            </div>
            <div>
              <img className='w-48'
                src="../../images/shopcard/3.png" alt="" />

            </div>
          </div>
        </li>

      </ul>



    </div >
  )
}






