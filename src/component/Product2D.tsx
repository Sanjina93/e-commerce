import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../App';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const products = [
  {
    id: 11,
    image: "../../images/shopcard/1.png",
    title: "Graphic Design1",
    name: "CARAMEL ICECREAM",
    price: "$16.48",
    amount: "$6.48",
    category: "Dairy Product",

  },
  {
    id: 12,
    image: "../../images/shopcard/2.png",
    title: "Graphic Design2",
    name: "English Department",
    price: "$16.48",
    amount: "$6.48",
    category: "Fruit"
  },
  {
    id: 13,
    image: "../../images/shopcard/3.png",
    title: "Graphic Design3",
    name: "English Department",
    price: "$16.48",
    amount: "$6.48",
    category: "Meat"
  },
  {
    id: 14,
    image: "../../images/shopcard/1.png",
    title: "Graphic Design4",
    name: "English Department",
    price: "$16.48",
    amount: "$6.48",
    category: "Dairy Product"
  },

  {
    id: 15,
    image: "../../images/shopcard/2.png",
    title: "Graphic Design5",
    name: "English Department",
    price: "$16.48",
    amount: "$6.48",
    category: "Fruit"
  },
  {
    id: 16,
    image: "../../images/shopcard/3.png",
    title: "Graphic Design",
    name: "English Department",
    price: "$16.48",
    amount: "$6.48",
    category: "Meat"
  },
]
export const Product2D = () => {
  const { id } = useParams();
  const prodContext = useContext(ProductContext);


  const product= products.find((product) => product.id === Number(id));
  return (
    <div className="my-32">
      {product&&(
        <div key={product.id}>
          <h2 className="text-2xl justify-self-center font-bold">{product.category}</h2>
          <div className="flex my-4">
            <img src={product.image} alt={product.title} className="w-96 ml-16 mr-20 object-cover" />
            <div>
              <p className="text-xl ml-0 text-gray-500">{product.name}</p>
              <div className="flex gap-4 mt-2 text-lg">
                Price:
                <p>{product.price}</p>
                <p>{product.amount}</p>
              </div>
              <button
                className="bg-blue-500 w-40 h-10 ml-auto text-white rounded-md "
                onClick={() => {
                  prodContext?.addToCart({
                    id: product.id,
                    title: product.title,
                    image: product.image,
                    quantity: 1,

                  }); prodContext?.setIsOpen(true)
                }} > Add to cart
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
                            <h4 className="text-sm font-medium mx-2">{item.title}</h4>
                            <h3 className="text-sm font-medium mx-2">{item.quantity}</h3>
                          </div>

                          <button className="bg-blue-400 ml-3 mr-1 w-9 h-7  p-1 rounded-lg" onClick={() => prodContext?.addToCart?.(item)}>
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                          <button className="bg-blue-400 w-9 h-7  p-1 rounded-lg" onClick={() => prodContext?.removeFromCart?.(item)}>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



