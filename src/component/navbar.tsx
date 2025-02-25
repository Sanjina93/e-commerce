import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faXmark, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../App';

export const Navbar = () => {

    const prodContext = useContext(ProductContext);

    return (
        <nav className="fixed top-0 sm:w-[1275px] md:w-[1355px] lg:w-full flex justify-between items-center px-[170px] py-[20px] bg-white shadow-md z-50">

            <Link to={'/'} className='no-underline'>
                <div className="text-2xl font-bold text-[#252B42]">Bandage</div>
            </Link>

            <ul className="flex space-x-[40px] text-[#737373] text-[16px]">
                <Link to={'/'} className='no-underline'>
                    <li className="cursor-pointer text-[#252B42] hover:text-blue-500 hover:underline">Home</li>
                </Link>
                <Link to={'/shop'} className='no-underline'>
                    <li className="cursor-pointer text-[#252B42] no-underline flex items-center hover:text-blue-500 hover:underline">
                        Shop
                    </li>
                </Link>

                <Link to={'/blog'} className='no-underline'>
                    <li className="cursor-pointer text-[#252B42] no-underline hover:text-blue-500 hover:underline">Blog</li>
                </Link>
                <Link to={'/contact'} className='no-underline'>
                    <li className="cursor-pointer text-[#252B42] no-underline hover:text-blue-500 hover:underline">Contact</li>
                </Link>
            </ul>
            <div className="flex items-center space-x-[25px] ">
                <Link to={'/Log'} className="text-[#23A6F0] flex items-center  space-x-[5px] text-[16px] no-underline">
                    <FontAwesomeIcon icon={faUser} className='text-[#23A6F0] ' />
                    <span>Login / Register</span>
                </Link>
                <button className="text-[#f13e65] top-0 cursor-pointer">
                    <FontAwesomeIcon onClick={() => prodContext?.setIsOpen(true)} icon={faShoppingCart} className='text-[20px] text-[#23A6F0]' />
                    {prodContext?.cart.length}
                </button>
                <div className={`top-0 right-0 fixed w-96 h-full bg-white shadow-md transition-transform duration-300 transform p-4 overflow-y-auto ${prodContext?.isOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <FontAwesomeIcon icon={faXmark} onClick={() => prodContext?.setIsOpen(false)} className="bg-blue-400 text-white px-2 py-1 rounded-lg cursor-pointer" />

                    <h2 className="text-lg font-bold mt-1">Your Cart</h2>

                    {prodContext?.cart && prodContext.cart.length > 0 ? (
                        <>
                            <div className='flex'>
                                <h5 className='text-sm font-bold my-2 mx-4'>image</h5>
                                <h5 className='text-sm font-bold my-2 mx-4'>Title</h5>
                                <h5 className='text-sm font-bold my-2 mx-4'>quantity</h5>
                            </div>
                            <div className="mt-2 space-y-4">
                                {prodContext.cart.map((item) => (
                                    <div key={item.id} className="flex items-center border-b pb-2 mx-3 text-center">
                                        <img src={item.image} alt="" className="w-12 h-12 object-cover rounded-md" />
                                        <div className="ml-3 flex">
                                            <div className='w-32'>
                                                <h4 className="text-sm font-medium mx-2">{item.title}</h4>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium mx-2">{item.quantity}</h3>
                                            </div>
                                        </div>

                                        <button className="bg-blue-400 ml-3 mr-1 pb-2 w-9 h-7 rounded-lg" onClick={() => prodContext?.addToCart?.(item)}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                        <button className="bg-blue-400 w-9 h-7 rounded-lg" onClick={() => prodContext?.removeFromCart?.(item)}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <p className="text-gray-500 mt-2">Your cart is empty.</p>
                    )}
                </div>

                <button className='text-[#f13e65]'>
                    <FontAwesomeIcon icon={faHeart} className=" text-[20px] text-[#23A6F0]" />
                    {prodContext?.fav}
                </button>
            </div>
        </nav>
    );
};


