import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Navbar } from "./component/navbar";
import { Carousel } from "./component/carousel";
import { Shopcard } from "./component/shopcard";
import { Product } from "./component/product";
import { Popular } from "./component/popular";
import { Product2 } from "./component/product2";
import { Popular2 } from "./component/popular2";
import { Product3 } from "./component/Product3";
import { Feature } from "./component/Feature";
import { Log } from "./component/Log";
import { Footer } from "./component/footer";
import { Signup } from "./component/Signup";
import { FDescription } from "./component/FDescription";
import { ProductD } from "./component/ProductD";
import { ProductDes } from "./component/ProductDes";
import { Contact } from "./component/Contact";
import { Shop } from "./component/Shop";
import { Blog } from "./component/Blog";
import { Product2D } from "./component/Product2D";



export type Cart = {
  id: number;
  image: string;
  title: string;
  quantity: number;
};

export interface UserContextType {
  product: number;
  setProduct: (values: number) => void;
  fav: number;
  setFav: (values: number) => void;
  cart: Cart[];
  addToCart: (item: Cart) => void;
  removeFromCart: (item: Cart) => void;
  isOpen: boolean;
  setIsOpen: (values: boolean) => void;
}

export const ProductContext = createContext<UserContextType | undefined>(undefined);

const App = () => {
  const [product, setProduct] = useState<number>(0);
  const [fav, setFav] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState<Cart[]>([]);

  const addToCart = (item: Cart) => {

    const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    }

    else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  const removeFromCart = (item: Cart) => {
    const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart?.quantity === 1) {
      setCart(cart.filter((cartItem) => cartItem.id !== item.id));

    }
    else {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  return (
    <ProductContext.Provider value={{ product, setProduct, fav, setFav, cart, addToCart, removeFromCart, isOpen, setIsOpen}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Carousel />
            <Shopcard />
            <Product />
            <Popular />
            <Product2 />
            <Popular2/>
            <Product3/>
            <ProductDes />
            <Feature />
          </>
          }
          />
        
          <Route path="/log" element={<Log />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/fdescription/:id" element={<FDescription />} />
          <Route path="/product/:id" element={<ProductD />} />
          <Route path="/product2/:id" element={<Product2D />} />
          <Route path="/product3/:id" element={<ProductDes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ProductContext.Provider>
  );
};

export default App;










