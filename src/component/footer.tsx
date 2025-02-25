import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import { Link } from 'react-router-dom'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <div className='bg-[#FAFAFA] sm:w-[1257px] md:w-[1355px] lg:w-[1455px] xl:w-full h-[488px] '>
      <div className=' bg-[#252B42] w-full h-[142px]'>
        <div className='flex w-[1050px] h-[142px]  ml-52 py-10'>
          <div className='w-[509px] h-[62px] gap-2.5 text-white font-bold font-montserrat tracking-[0.1px]'>
            <h3 className=' w-[454px] h-8 text-2xl'>Consulting Agency For Your Business</h3>
            <p className='w-[272px] h-[20px] text-sm'>the quick fox jumps over the lazy dog</p>
          </div>
          <Link to={'/contact'}>
          <div className='w-[236px] h-[52px] ml-72'>
            <button className='bg-[#23A6F0] w-[160px] h-[52px] rounded-md 
          font-bold text-lg text-center px-4 gap-2.5 text-white'>
              Contact Us</button>
          </div>
          </Link>
        </div>
      </div>
      <div className='bg-[#252B42] h-[272px] m-auto'>
        <div className='w-[1050px] h-[270px] left-[195px] justify-self-center py-[50px]'>
          <div className='flex w-[1041px] h-[170px] gap-[30px] '>
            <div className='grid w-[148px] h-[170px] gap-[20px] font-bold  text-[#FFFFFF]'>
              <h5 className='w-[115px] h-[24px] text-base tracking-[0.1px] text-[#FFFFFF] '>Company Info</h5>
              <Link to={'/'} className='w-[97px] h-[24px] tracking-[0.1px] text-[#FFFFFF] no-underline '>About Us</Link>
              <Link to={'/'} className='w-[50px] h-[24px] tracking-[0.1px] text-[#FFFFFF] no-underline '>Carrier</Link>
              <Link to={'/'} className='w-[177px] h-[24px] tracking-[0.1px] text-[#FFFFFF] no-underline '>We are hiring</Link>
              <Link to={'/'} className='w-[33px] h-[24px] tracking-[0.1px] text-[#FFFFFF] no-underline '>Blog</Link>

            </div>
            <div className='grid w-[152px] h-[170px] gap-[20px] font-bold text-[#FFFFFF]'>
              <h5 className='w-[115px] h-[24px] text-base tracking-[0.1px] '>Legal</h5>
              <Link to={'/'} className='w-[97px] h-[24px] tracking-[0.1px] text-[#FFFFFF] no-underline'>About Us</Link>
              <Link to={'/'} className='w-[50px] h-[24px] tracking-[0.1px] text-[#FFFFFF] no-underline'>Carrier</Link>
              <Link to={'/'} className='w-[177px] h-[24px] tracking-[0.1px] text-[#FFFFFF] no-underline'>We are hiring</Link>
              <Link to={'/'} className='w-[33px] h-[24px] tracking-[0.1px] text-[#FFFFFF] no-underline'>Blog</Link>

            </div>
            <div className='grid w-[148px] h-[170px] gap-[20px] font-bold text-[#FFFFFF]'>
              <h5 className='w-[115px] h-[24px] text-base tracking-[0.1px] '>Features</h5>
              <Link to={'/'} className='w-[227px] h-[24px] tracking-[0.1px] text-[#FFFFFF] no-underline'>Business Marketing</Link>
              <Link to={'/'} className='w-[110px] h-[24px] tracking-[0.1px] text-[#FFFFFF] no-underline'>User Analytic</Link>
              <Link to={'/'} className='w-[177px] h-[24px] tracking-[0.1px] text-[#FFFFFF] no-underline'>Live Chat</Link>
              <Link to={'/'} className='w-[150px] h-[24px] tracking-[0.1px] text-[#FFFFFF] no-underline'>Unlimited Support</Link>

            </div>
            <div className='grid w-[152px] h-[170px] gap-[20px] font-bold text-[#FFFFFF]'>
              <h5 className='w-[115px] h-[24px] text-base tracking-[0.1px] '>Resources</h5>
              <Link to={'/'} className='w-[117px] h-[24px] tracking-[0.1px] text-[#FFFFFF] no-underline'>IOS & Android</Link>
              <Link to={'/'} className='w-[120px] h-[24px] tracking-[0.1px] text-[#FFFFFF] no-underline'>Watch a Demo</Link>
              <Link to={'/'} className='w-[177px] h-[24px] tracking-[0.1px] text-[#FFFFFF] no-underline'>Customers</Link>
              <Link to={'/'} className='w-[33px] h-[24px] tracking-[0.1px] text-[#FFFFFF] no-underline'>API</Link>

            </div>
            <div className='w-[321px] h-[152.5px] gap-[20px] text-[#FFFFFF]'>
              <h5 className='w-[103px] h-[24px] font-bold text-base mb-4 '>Get In Touch</h5>
              <div className='flex w-[239px] h-[29.25px] gap-[10px] mb-3'>
                <FontAwesomeIcon icon={faPhone} className='w-[22.81px] h-[22.81px] left-[1.19px] ' />
                <h6 className='w-[205px] h-[29.25px] font-bold text-sm '>(480) 555-0103</h6>
              </div>
              <div className='flex w-[239px] h-[30px] gap-[10px] mb-3'>
                <FontAwesomeIcon icon={faLocationDot} className='w-[24px] h-[30px]' />
                <h6 className='w-[205px] h-[29.25px] font-bold text-sm '>4517 Washington Ave.</h6>
              </div>
              <div className='flex w-[239px] h-[29.25px] gap-[10px]'>
                <FontAwesomeIcon icon={faEnvelope} className='w-[24px] h-[26px]' />
                <h6 className='w-[205px] h-[29.25px] font-bold text-sm '>debra.holt@example.com</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#252B42]  h-[74px]'>
        <div className='flex w-[1050px] h-[74px] left-[195px] ml-52 py-6'>
          <h6 className='w-[336px] h-[24px] font-bold text-sm tracking-[0.2px] text-white'>Made With Love By Finland All Right Reserved </h6>
          <div className='w-[236px] h-[24px] ml-auto gap-0'>
            <FontAwesomeIcon icon={faFacebook} className='w-10 h-7 mr-4 text-[#23A6F0]' />
            <FontAwesomeIcon icon={faInstagram} className='w-10 h-7 mr-4 text-[#23A6F0]' />
            <FontAwesomeIcon icon={faTwitter} className='w-10 h-7 text-[#23A6F0]' />
          </div>
        </div>
      </div>
    </div>
  )
}

