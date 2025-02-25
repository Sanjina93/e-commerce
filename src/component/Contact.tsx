import React from 'react'
import { useForm } from 'react-hook-form';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


interface User {
  name: string;
  email: string;
  message: string;
}

const validationSchema = yup.object({
    name: yup.string().required("name is required"),
    email: yup.string().required("email is required"),
    message: yup.string().required("message is required"),
});

export const Contact = () => {
  const { register, handleSubmit, reset ,formState: {errors}} = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: User) => {
    console.log(data);
    reset();
  };

  return (
    <div className='my-16 sm:w-[1257px] md:w-[1355px] lg:w-[1455px] xl:w-full'>

      <div className="flex ">
        <div className='w-1/2 mt-16 '>
          <h3 className='mx-16 text-black'>Contact Us</h3>
          <p className='text-black ml-16 w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro ea consectetur, eveniet repudiandae
            laudantium. Similique ad eveniet animi architecto quas dicta distinctio repellat, numquam quisquam dolor alias officia tenetur quasi ut
            quaerat cum impedit ab veritatis odio! Porro, quod mollitia ullam dolore sapiente, laudantium molestias nisi recusandae id perferendis
            maiores pariatur eveniet rem, aliquam dicta placeat illo non cumque possimus. Ad in quisquam nobis nesciunt, impedit quam reiciendis
            consectetur ipsa! Quaerat ipsa nam est voluptate harum aut tempora mollitia in. Harum?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Modi possimus iste dolores recusandae? Animi, deserunt praesentium.</p>
          <div className='flex w-[239px] h-[29.25px] gap-[10px] mb-3 text-black ml-16'>
            <FontAwesomeIcon icon={faPhone} className='w-[22.81px] h-[22.81px] left-[1.19px] ' />
            <h6 className='w-[205px] h-[29.25px] font-bold text-sm '>(480) 555-0103</h6>
          </div>
          <div className='flex w-[239px] h-[30px] gap-[10px] mb-3 text-black ml-16'>
            <FontAwesomeIcon icon={faLocationDot} className='w-[24px] h-[30px]' />
            <h6 className='w-[205px] h-[29.25px] font-bold text-sm '>4517 Washington Ave.</h6>
          </div>
          <div className='flex w-[239px] h-[29.25px] gap-[10px] text-black ml-16'>
            <FontAwesomeIcon icon={faEnvelope} className='w-[24px] h-[26px]' />
            <h6 className='w-[205px] h-[29.25px] font-bold text-sm '>debra.holt@example.com</h6>
          </div>
        </div>
        <div className='w-1/2'>
          <form onSubmit={handleSubmit(onSubmit)} className="border-2 justify-self-center mt-16 rounded-lg text-black">
            <div className='mt-4 ml-8'>
              <label htmlFor="name">Name: </label><br />
             <input {...register("name")} id="name" type="text" placeholder='Enter your name' className='w-72 h-10 border-2 mr-8 rounded-md p-2' />
             {errors.name && <p className=" error-message text-red-600">{errors.name.message}</p>}
            </div>
            <div className='mt-4 ml-8'>
              <label htmlFor="email">Email: </label><br />
              <input {...register("email")} id="email" type="email" placeholder='Enter your email' className='w-72 h-10 border-2 mr-8 rounded-md p-2' />
              {errors.email && <p className=" error-message text-red-600">{errors.email.message}</p>}
            </div>
            <div className='my-3 ml-8'>
              <label htmlFor="message" className=''>Message: </label><br />
              <textarea {...register("message")} id="message" placeholder='Enter message' className='w-72 h-40 border-2 rounded-md p-2'></textarea>
              {errors.message && <p className=" error-message text-red-600">{errors.message.message}</p>}
            </div>
            <button type="submit" className='my-2 bg-blue-400  ml-9 text-white p-1 rounded-lg'>Submit</button>
            
          </form>
        </div>
      </div>
    </div>
  )
}

