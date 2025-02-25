import { faChevronLeft, faChevronRight, faMinus, faPlus, faShoppingCart, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { ProductContext } from '../App';
import { Link } from 'react-router-dom';


export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
  name: string;
  amount: string;

}

export const products = [
  {
    id: 1,
    image: "../../images/shopcard/1.png",
    title: "Caramel CONE",
    name: "English Department",
    price: "$16.48",
    amount: "$6.48",
    category: "Icecream",

  },
  {
    id: 2,
    image: "../../images/shopcard/2.png",
    title: "FRUITS",
    name: "English Department",
    price: "$16.48",
    amount: "$6.48",
    category: "Fruits"
  },
  {
    id: 3,
    image: "../../images/shopcard/3.png",
    title: "Graphic Design3",
    name: "English Department",
    price: "$16.48",
    amount: "$6.48",
    category: "Meat"
  },
  {
    id: 4,
    image: "../../images/shopcard/1.png",
    title: "CARAMEL CONE",
    name: "English Department",
    price: "$16.48",
    amount: "$6.48",
    category: "Icecream"
  },

  {
    id: 5,
    image: "../../images/shopcard/2.png",
    title: "FRUIT",
    name: "English Department",
    price: "$16.48",
    amount: "$6.48",
    category: "Fruits"
  },
  {
    id: 6,
    image: "../../images/shopcard/3.png",
    title: "Graphic Design",
    name: "English Department",
    price: "$16.48",
    amount: "$6.48",
    category: "Meat"
  },


]
const categories = ["Icecream", "Fruits", "Meat"];
export const Product = () => {
  const [Category, setCategory] = useState<string | null>(null);
  const [CategoryIndex, setCategoryIndex] = useState<number>(0);
  const prodContext = useContext(ProductContext);


  const filteredProducts = Category ? products.filter(product => product.category === Category) : products;
  

  const nextSlide = () => {
    const next = (CategoryIndex + 1) % categories.length;
    setCategory(categories[next]);
    setCategoryIndex(next);
  };
  const prevSlide = () => {
    const prev = (CategoryIndex - 1 + categories.length) % categories.length;
    setCategory(categories[prev]);
    setCategoryIndex(prev);
  };

  return (
    <>
      <div className="bg-[#FFFFFF] flex justify-center sm:w-[1257px] md:w-[1355px] lg:w-[1455px] xl:w-full  h-[895px] ">
        <div >
          <div className='relative'>
            <h1 className="absolute top-28 left-9 w-[86px] h-[24px] flex justify-center items-center font-bold text-sm text-[#252B42]">
              FURNITURE
            </h1>
            <h6 className='absolute top-36 left-10 w-[74px] h-[24px] font-bold text-[#737373]'>5 Items</h6>
          </div>
          <img className="w-[389px] h-[796px] mt-16 object-cover" src="../../images/shopcard/4.png" alt="" />
        </div>

        <div className="w-[658px] h-[799px] gap-2.5">
          <div className="flex w-[658px] h-[50px] mt-16 items-center">
            <h5 onClick={() => { setCategory(null) }} className="w-[200px] h-[24px] font-bold text-base tracking-[0.1px] ml-2 cursor-pointer">
              BESTSELLER PRODUCTS
            </h5>
            <div className="flex w-[444px] h-[50px]">
              <ul className='grid grid-cols-4  text-sm tracking-[0.2px] font-bold gap-2.5 rounded-md'>
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => { setCategory(category) }}
                      className='w-[70px] h-[44px]' >
                      {category}
                    </button>
                  </li>
                ))}
                <div className='flex'>
                  <FontAwesomeIcon onClick={prevSlide} icon={faChevronLeft}
                    className='w-[45px] h-[30px] gap-[10px] border rounded-[34px] px-[10px] py-[8px] text-[#BDBDBD]' />
                  <FontAwesomeIcon onClick={nextSlide} icon={faChevronRight}
                    className='ml-2 w-[48.57px] h-[30px] gap-[10px] border rounded-[34px] px-[10px] py-[8px] text-[#BDBDBD]' />
                </div>

              </ul>
            </div>
          </div>
          <div className='w-[658px] h-[2px] bg-[#ECECEC] ml-5'></div>

          <div className="w-[657px] h-[748px] p-[24px] gap-[15px]">
            <div className="grid grid-cols-3 w-[609px] h-[364px] gap-[30px]">
              {filteredProducts.map((product) => (
                <div key={product.id} className="w-[183px] h-[324px]">
                  <Link to={`/product/${product.id}`} className='no-underline'>
                    <div className="w-[183px] h-[162px]">
                      <img className="w-full h-full object-cover" src={product.image} alt="product" />
                    </div>
                    <div className="w-[183px] h-[120px] pt-6 pb-9 px-6 text-center text-black">
                      <h3 className="w-[131px] h-[24px] font-medium text-base">{product.title}</h3>
                      <p className="w-[146px] h-[24px] text-base tracking-[0.2px]">{product.name}</p>
                    </div>
                  </Link>
                  <div className="flex w-[108px] h-[34px] px-6 gap-1 text-center tracking-[0.1px]">
                    <p className="w-[52px] h-[24px] text-sm">{product.price}</p>
                    <h5 className="w-[45px] h-[24px] text-sm text-[#23856D]">{product.amount}</h5>
                    <button onClick ={()=>prodContext?.setIsOpen(true)}><FontAwesomeIcon onClick={() => {
                      prodContext?.addToCart(
                        {
                          id: product.id,
                          title: product.title,
                          image: product.image,
                          quantity: 1,
                        }
                      )
                    }}
                      icon={faShoppingCart} className="text-[20px] text-[#23A6F0] pb-2" /></button>
                    <div className={`top-0 right-0 fixed w-96 h-full bg-white transition-transform duration-300 transform p-4 ${prodContext?.isOpen ? "translate-x-0" : "translate-x-full"}`}>
                      <FontAwesomeIcon icon={faXmark} onClick={() => prodContext?.setIsOpen(false)} className="bg-blue-400 text-white px-3 py-2 rounded-lg cursor-pointer" />

                      <h2 className="text-lg font-bold mt-4">Your Cart</h2>

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
                                  <div>
                                  <h4 className="text-sm font-medium mx-2">{item.title}</h4>
                                  </div>
                                  <div>
                                  <h3 className="text-sm font-medium mx-2">{item.quantity}</h3>
                                  </div>
                                </div>

                                <button className="bg-blue-400 ml-3 mr-1 pb-3  w-9 h-7  rounded-lg" onClick={() => prodContext?.addToCart?.(item)}>
                                  <FontAwesomeIcon icon={faPlus} />
                                </button>
                                <button className="bg-blue-400 w-9 h-7  rounded-lg" onClick={() => prodContext?.removeFromCart?.(item)}>
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

                    <FontAwesomeIcon onClick={() => { prodContext?.setFav(prodContext.fav + 1) }}
                      icon={faHeart} className=" text-[20px] text-[#23A6F0]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div >
      </div >
    </>
  )
}















