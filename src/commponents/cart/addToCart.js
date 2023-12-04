import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addQuantity, subQuantity, removeCart } from "../redux/state";

const AddToCart = ({ isCartOpen, setIsCartOpen }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const calculateSubtotal = () => {
    return cart.data.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div
      className={`h-full fixed w-[350px] bg-gray-100 z-50 transition-all top-0 overflow-auto ${
        isCartOpen ? "right-[0px]" : "right-[-400px]"
      }`}
    >
      <div className="flex items-start justify-between p-4 mt-4 ">
        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
          Cart
        </h2>
        <div className="ml-3 flex h-7 items-center">
          <button
            type="button"
            className="relative -m-2 p-2 text-gray-500 hover:text-amber-400"
            onClick={handleToggleCart}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {cart.data.map((item, index) => (
        <div
          className="flex space-x-6 bg-white drop-shadow-2xl p-3 rounded mt-3 m-2"
          key={index}
        >
          <div className="flex items-center">
            <img src={item.image} alt="cart" width={100} height={50} />
          </div>
          <div className="flex flex-col justify-around w-full">
            <div>
              <h2 className="text-xl font-bold "> {item.title}</h2>
              <p className="text-xs mt-2 mb-2">{item.dis}</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>Unit Price: {item.price}</p>
              <p>Total: {item.price * item.quantity}</p>
            </div>

            <div className="flex justify-between mt-2">
              <div>
                <button
                  className="p-1 px-2 border hover:bg-amber-400 hover:text-white"
                  onClick={() => {
                    dispatch(subQuantity({ index }));
                  }}
                >
                  -
                </button>{" "}
                {item.quantity}{" "}
                <button
                  className="p-1 px-2 border hover:bg-amber-400 hover:text-white"
                  onClick={() => {
                    dispatch(addQuantity({ index }));
                  }}
                >
                  +
                </button>
              </div>
              <button
                className="hover:text-amber-400"
                onClick={() => {
                  dispatch(removeCart({ index }));
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-4 flex justify-between p-4">
        <p>SubTotal</p>
        <p>Rs: {calculateSubtotal()}</p>
      </div>
    </div>
  );
};

export default AddToCart;
