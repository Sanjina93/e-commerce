import React from 'react'

const pops = [
  {
    id: 1,
    num: 1,
    title: "Easy to use",
    description: "Things on a very  small that you have any direct",
  },
  {
    id: 2,
    num: 2,
    title: "Easy to use",
    description: "Things on a very  small that you have any direct",
  },

  {
    id: 3,
    num: 3,
    title: "Easy to use",
    description: "Things on a very  small that you have any direct",
  },

  {
    id: 4,
    num: 4,
    title: "Easy to use",
    description: "Things on a very  small that you have any direct",
  },
]

export const Popular = () => {
  return (
    <div className='bg-[#FFFFFF] sm:w-[1257px] md:w-[1355px] lg:w-[1455px] xl:w-full h-[886px] '>
      <div className='flex w-[1069px] h-[649px] sm:mx-24 md:mx-36 lg:mx-52 xl:mx-48 '>
        <img className='w-[710px] h-[649px] gap-9 object-cover'
          src="../../images/shopcard/6.PNG" alt="" />
        <div className='bg-[#FAFAFA] w-[401px] h-[649px] py-20 gap-8'>
          <div className='w-[348px] h-[526px] gap-5 m-auto'>
            <h3 className='w-[350px] h-[32px] font-bold text-2xl text-center text-[#252B42] tracking-[0.1px]'>MOST POPULAR</h3>
            <p className='w-[250px] h-16 font-normal m-auto  text-sm text-center tracking-[0.2px]'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
            <div className='w-[348px] h-[300px]'>
              <img className='w-[348px] h-[226px] top-9'
                src="../../images/shopcard/7.PNG" alt="" />
            </div>
            <p className='text-[#252B42] w-[350px] h-6 font-bold text-sm text-center'>English Department</p>
            <div className='flex w-[138px] h-[34px] py-1.5 px-1 ml-28 text-center font-bold font-base'>
              <h5 className='w-[64px] h-6'>$16.48</h5>
              <h5 className='w-[30px] h-6 text-[#23856D]'>$6.48</h5>
            </div>
          </div>
        </div>
      </div>

      <div className='= flex w-[1066px] h-[111px] mt-10 sm:mx-24 md:mx-36 lg:mx-52 xl:mx-48'>
        {pops.map((pop) => (
          <div key={pop.id} className=' w-[265px] h-[111px]'>
            <div className='w-[211px] h-[61px] gap-[20px]'>
              <div className='flex w-[201px] h-[61px] gap-[20px]'>
                <h2 className='w-[28px] h-[50px] text-[#E74040] font-bold text-5xl tracking-[0.2px]'>{pop.num}.</h2>
                <div className='w-[150px] h-[61px] gap-[5px]'>
                  <h6 className='h-[24px] font-bold  font-base tracking-[0.2px] text-[#252B42]'>{pop.title}</h6>
                  <p className='w-[155px] h-[32px] text-xs tracking-[0.2px] text-[#737373]'>Things on a very  small that you have any direct</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
