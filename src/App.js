import { useState } from "react";
import AddToCart from "./commponents/cart/addToCart";
import Hero from "./commponents/hero/hero";
import Navbar from "./commponents/navbar/navbar";
import ProductDis from "./commponents/product/productDis";
import "./tailwind.css";
import Footer from "./commponents/footer/footer";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div>
      <div className="bg-amber-400 text-white flex justify-center sticky top-0 z-50 text-xs md:text-base lg:text-lg p-2 font-bold">
        Supporting our local beverage, Pakola now available
      </div>
      <Navbar setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen} />
      <Hero />
      <ProductDis />
      <AddToCart setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen} />
      <Footer />
    </div>
  );
}

export default App;
