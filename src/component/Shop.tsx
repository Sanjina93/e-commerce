import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { ProductContext } from '../App';
import { Link } from 'react-router-dom';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
  name: string;
  amount: string;
}

const pros = [
  {
    id: 7,
    image: "../../images/shopcard/10.PNG",
    title: "Caramel Icecream",
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

const products = [
  {
    id: 1,
    image: "/images/shopcard/1.png",
    title: "CARAMEL CONE",
    name: "English Department",
    price: "$16.48",
    amount: "$6.48",
    category: "Icecream",
  },
  {
    id: 2,
    image: "/images/shopcard/2.png",
    title: "FRUITS",
    name: "English Department",
    price: "$16.48",
    amount: "$6.48",
    category: "Fruits",
  },
  {
    id: 3,
    image: "/images/shopcard/3.png",
    title: "Graphic Design3",
    name: "English Department",
    price: "$16.48",
    amount: "$6.48",
    category: "Meat",
  },
  {
    id: 4,
    image: "/images/shopcard/1.png",
    title: "CARAMEL CONE",
    name: "English Department",
    price: "$16.48",
    amount: "$6.48",
    category: "Icecream",
  },
  {
    id: 5,
    image: "/images/shopcard/2.png",
    title: "FRUIT",
    name: "English Department",
    price: "$16.48",
    amount: "$6.48",
    category: "Fruits",
  },
  {
    id: 6,
    image: "/images/shopcard/3.png",
    title: "Graphic Design6",
    name: "English Department",
    price: "$16.48",
    amount: "$6.48",
    category: "Meat",
  },
];

export const Shop = () => {
  const prodContext = useContext(ProductContext);
 
  const [search, setSearch] = useState('');
 
  console.log(search);

  const filteredProducts = products.filter((product) => search.toLowerCase() === '' || product.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className=" sm:w-[1257px] md:w-[1355px] xl:w-full my-32">
      <h1 className='justify-self-center text-bold '>Our Products</h1>
      <p className='w-[610px] justify-self-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error corporis, doloribus sit laboriosam incidunt ut hic beatae quas illo dolores vitae, ullam facilis voluptatem nulla nesciunt rerum corrupti laborum atque a? Maxime,
        voluptatum? Reprehenderit beatae quod ad</p>
      <h3 className='ml-16 my-5'>Our BestSeller Products</h3>
      <div className='grid grid-cols-4  bg-[#FAFAFA]  py-[48px] gap-[30px] sm:w-[1257px] md:w-[1355px] lg:w-[1455px] xl:w-full my-16'>
        {pros.map((pro) => (
          <div key={pro.id}>
            <Link to={`/product3/${pro.id}`}>
              <img className='w-[300px] h-[250px] bg-[#FFFFFF] rounded-md hover:scale-125 ease-in duration-150' src={pro.image} alt="" />
            </Link>
          </div>
        ))}

      </div>
      <div className='flex justify-around'>
        <h4 className='mr-96 my-10'>YOU MAY ALSO LIKE</h4>
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute pl-3 pt-14 text-gray-400' />
          <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} className='border-3 rounded-md w-96 h-10 px-5 my-10 text-lg' />
        </div>
      </div>

      <div className="grid grid-cols-3 text-sm font-bold ml-32">
        {filteredProducts.length === 0 ? (
          <p className="col-span-3 text-center text-lg">No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="p-4">
              <div className="w-[253px] h-[300px]">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="w-[320px] h-[60px] ml-8 text-center text-black">
                <h3 className="w-[150px] h-[24px] font-medium text-base">{product.title}</h3>
                <p className="w-[170px] h-[24px] text-base">{product.name}</p>
              </div>
              <Link to={`/product/${product.id}`} className="no-underline">
                <button className="bg-blue-500 p-2 rounded-lg ml-16 my-3 text-white">See more</button>
              </Link>
              <div className="flex w-[108px] h-[34px] ml-10 gap-1 text-center tracking-[0.1px]">
                <p className="w-[52px] h-[24px] text-sm">{product.price}</p>
                <h5 className="w-[45px] h-[24px] text-sm text-[#23856D]">{product.amount}</h5>
                <FontAwesomeIcon
                  onClick={() => prodContext?.setFav(prodContext.fav + 1)}
                  icon={faHeart}
                  className="text-[20px] text-[#23A6F0] cursor-pointer"
                />
              </div>
            </div>

          )))}
      </div>
    </div>
  )
}


