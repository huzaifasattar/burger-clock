import React from "react";
import { productData } from "../productData/data";
import { useDispatch, useSelector } from "react-redux";
import { addCart, addQuantity } from "../redux/state";

const Product = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = (item) => {
    const existingItemIndex = findItemIndex(item);

    if (existingItemIndex !== -1) {
      dispatch(addQuantity({ index: existingItemIndex }));
    } else {
      dispatch(addCart({ ...item, quantity: 1 }));
    }
  };

  const findItemIndex = (item) => {
    const cartItem = cart.data.find(
      (product) => product.id === item.id && product.title === item.title
    );

    if (cartItem) {
      return cart.data.findIndex(
        (product) => product.id === item.id && product.title === item.title
      );
    }

    return -1;
  };

  return (
    <>
      {productData.map((category, idx) => {
        return (
          <div className="mt-8" key={idx}>
            <span className="absolute h-full mt-[-140px]" id={category.id} />
            <h2 className="text-2xl text-center font-bold tracking-widest">
              {category.heading}
            </h2>
            <div
              className="grid lg:grid-flow-col max-w-6xl m-auto flex mt-4 space-y-4 lg:space-x-4 lg:space-y-0"
              key={idx}
            >
              {category.data.map((item, index) => {
                return (
                  <div
                    className="flex space-x-6 bg-white drop-shadow-2xl p-3 rounded"
                    key={index}
                  >
                    <img
                      src={item.image}
                      alt="product"
                      width={150}
                      height={200}
                    />
                    <div className="flex flex-col justify-around w-full">
                      <div>
                        <h2 className="text-xl font-bold "> {item.title}</h2>
                        <p>{item.dis}</p>
                      </div>

                      <div className="flex justify-between mt-2">
                        <p>Price: {item.price}</p>
                        <img
                          src={item.icon}
                          width={25}
                          height={25}
                          alt="item"
                          className="cursor-pointer"
                          onClick={() => handleAddToCart(item)}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Product;
