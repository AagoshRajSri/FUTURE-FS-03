import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const dummyProducts = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: 12999,
    image:
      "https://thumblr.uniid.it/product/193406/13652db112c3.jpg?width=3840&format=webp&q=75",
  },
  {
    id: 2,
    name: "Nike Dunk Low",
    price: 9999,
    image:
      "https://static.nike.com/a/images/t_default/5129712e-8ab5-494e-942f-8efb0bd19730/W+NIKE+DUNK+LOW+DISRUPT+2.png",
  },
  {
    id: 3,
    name: "Nike Air Force 1",
    price: 8499,
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/20547d52-3e1b-4c3d-b917-f0d7e0eb8bdf/custom-nike-air-force-1-low-by-you-shoes.png",
  },
  {
    id: 4,
    name: "Nike ZoomX Vaporfly Next 3",
    price: 8099,
    image: "https://cdn.dotpe.in/longtail/store-items/7906583/Fic94HEl.webp",
  },
  {
    id: 5,
    name: "Nike Pegasus 40",
    price: 10499,
    image: "https://m.media-amazon.com/images/I/51AZFKnWM2L._SL1000_.jpg",
  },
  {
    id: 6,
    name: "Nike Blazer Mid '77",
    price: 7499,
    image:
      "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/BLAZER+MID+%2777+VNTG.png",
  },
];

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    setProducts(dummyProducts);
  }, []);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <>
      <Navbar cart={cart} setCartOpen={setCartOpen} />
      <Hero />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} isOpen={cartOpen} setIsOpen={setCartOpen} />
      <Footer />
    </>
  );
}

export default App;
