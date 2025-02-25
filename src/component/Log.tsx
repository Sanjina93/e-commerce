import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from 'react-router';

export interface User {
    username: string;
    password: string;
}
const validationSchema = yup.object({
    username: yup.string().email("Invalid email format").required("Username is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});
export const Log = () => {
    const { register, handleSubmit, reset,formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),

    });

    const onSubmitHandler = (values: User) => {
        console.log("Login Data:", values);
        alert('You are LoggedIn successfully');
        reset();

    };
    return (
        <form onSubmit={handleSubmit(onSubmitHandler)} className='border-4 rounded-lg  justify-self-center my-32' >
            <h1 className='mt-3 text-center text-lg font-bold ml-3'>Login</h1>
            <div className=" mt-4 ml-8">
                <label htmlFor="username" className='text-md mb-3' >Username :</label><br />
                <input {...register("username")} id="username" type="text" className='border-2 p-2 w-72 mr-8 rounded-md' />
                {errors.username && <p className=" error-message text-red-600">{errors.username.message}</p>}
            </div>

            <div className=' mt-4 ml-8'>
                <label htmlFor="password" className='text-md mb-3'>password :</label><br />
                <input {...register("password")} id="password" type="password" className='border-2 p-2 w-72 rounded-md' />
                {errors.password && <p className="error-message text-red-600">{errors.password.message}</p>}
            </div>

            <div className='m-8'>
                <button className='w-72 h-10 bg-[#23A6F0] text-white text-lg rounded-lg'>Sign In</button>
            </div>
            <div className='m-8'>
                <p className='mx-5'>Don't have an account? <Link to={'/Signup'} className='text-blue-600'>Sign Up</Link></p>
            </div>
        </form>

    )
}
