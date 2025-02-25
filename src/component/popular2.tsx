import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faCircle} from '@fortawesome/free-solid-svg-icons';
import React from 'react'

export const Popular2 = () => {
  return (
    <div className='bg-[#FFFFFF]  sm:w-[1257px] md:w-[1355px] lg:w-[1455px] xl:w-full h-[886px]'>
      <div className='flex w-[1055px] h-[784px] sm:mx-24 md:mx-36 lg:mx-52 xl:mx-52'>
        <div className='w-[401px] h-[784px] py-[80px] gap-[30px] bg-[#FAFAFA]'>
          <div className='w-[348px] h-[604px] gap-[19px] m-auto text-center'>
            <h3 className='w-[300px] h-[32px] font-bold text-2xl tracking-[0.1px] text-[#252B42]'>MOST POPULAR</h3>
            <p className='w-[250px] h-[60px] text-sm ml-6 tracking-[0.2px]'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
            <div className='w-[348px] h-[300px]'>
              <img className='w-full h-full object-cover '
                src="../../images/shopcard/9.PNG" alt="" />
            </div>
            <p className='w-[350px] h-[24px] font-bold font-base text-center tracking-[0.2px] text-[#252B42] '>English Department</p>
            <div className='flex w-[83px] h-[24px] gap-[10px] ml-40'>
            <FontAwesomeIcon icon={faArrowDown}/>
       
              <h6 className='w-[57px] h-[24px] font-bold text-sm tracking-[0.2px] text-[#737373]'>15 Sales</h6>
            </div>
            <div className='flex w-[138px] h-[34px] py-1.5 px-1 ml-28 text-center font-bold font-base'>
              <h5 className='w-[64px] h-6 text-[#BDBDBD]'>$16.48</h5>
              <h5 className='w-[30px] h-6 text-[#23856D]'>$6.48</h5>
            </div>
            <div className='h-[16px] gap-[6.08px] mt-3'>
            <FontAwesomeIcon  icon={faCircle} className='w-[24px] h-[16px] text-[#23A6F0]'/>
            <FontAwesomeIcon  icon={faCircle} className='w-[24px] h-[16px] text-[#23856D]'/>
            <FontAwesomeIcon  icon={faCircle} className='w-[24px] h-[16px] text-[#E77C40]'/>
            <FontAwesomeIcon  icon={faCircle} className='w-[24px] h-[16px] text-[#252B42]'/>

            </div>
          </div>
        </div>
        <div className='w-[674px] h-[784px] gap-[35px]'>
          <img className='w-[670px] h-[784px] object-cover'
            src="../../images/shopcard/8.PNG" alt="" />
        </div>
      </div>
    </div>

  )
}

