import React, { useContext} from 'react'
import { useParams } from 'react-router'
import { ProductContext } from '../App';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';



type Pro = {
    id: number;
    image: string;
    title: string;
    description: string;
    price: string;
    amount: string;

};
const pros = [
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
export const ProductDes = () => {
    const { id } = useParams();

    const prodContext = useContext(ProductContext);
    const pro = pros.find((pro) => pro.id === Number(id));

    return (
        <div className='my-32'>
            {pro && (
                <div key={pro.id}>
                    <h2 className="text-2xl justify-self-center font-bold">{pro.title}</h2>
                    <div className="flex  my-4">
                        <img src={pro.image} alt={pro.image} className="w-96  ml-16 mr-20 object-cover" />
                        <div>
                            <p className="text-xl ml-0 text-gray-500">{pro.description}</p>
                            <div className="flex gap-4 mt-2 text-lg">
                                Price:
                                <p>{pro.price}</p>
                                <p>{pro.amount}</p>
                            </div>

                            <button className='bg-blue-500 w-40 h-10 ml-auto text-white rounded-md'
                                onClick={() => {
                                    prodContext?.addToCart(
                                        {
                                            id: pro.id,
                                            title: pro.title,
                                            image: pro.image,
                                            quantity: 1,
                                        }
                                    ); prodContext?.setIsOpen(true)
                                }}>  Add to Cart
                            </button>
                            <FontAwesomeIcon className="text-[30px]  ml-3 text-[#23A6F0]" onClick={() => { prodContext?.setFav(prodContext.fav + 1) }} icon={faHeart} />

                            <div className={`top-0 right-0 fixed w-96 h-full bg-white shadow-md transition-transform duration-300 transform p-4 overscroll-auto ${prodContext?.isOpen ? "translate-x-0" : "translate-x-full"}`}>
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
                                                    <div>
                                                        <h4 className="text-sm font-medium mx-2">{item.title}</h4>
                                                        </div>
                                                        <div>
                                                        <h3 className="text-sm font-medium mx-2">{item.quantity}</h3>
                                                        </div>
                                                    </div>

                                                    <button className="bg-blue-400 ml-3 mr-1 pb-3 w-9 h-7 rounded-lg" onClick={() => prodContext?.addToCart?.(item)}>
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
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}


