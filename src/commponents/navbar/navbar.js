import { useSelector } from "react-redux";

const Navbar = ({ isCartOpen, setIsCartOpen }) => {
  const cart = useSelector((state) => state.cart);
  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const productCount = cart.data.length;
  return (

      <nav className="grid grid-flow-row-reverse lg:grid-flow-row  bg-black text-white relative ">
        <div className="p-3 flex justify-end lg:justify-start">
          <div className="flex p-2 space-x-2 items-center bg-amber-400 text-white w-fit rounded-lg">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="phone"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={15}
              height={15}
            >
              <path
                fill="currentColor"
                d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
              ></path>
            </svg>
            <span>0311-2966037</span>
          </div>
        </div>
        <div className="flex justify-start lg:justify-center">
          <div
            className="absolute top-0 w-fit border z-20 ml-4 lg:ml-0"
            style={{ borderRadius: "200px" }}
          >
            <img src="/burger.png" alt="logo" width={110} height={110} />
          </div>
        </div>
        <div className="flex justify-end mr-6 z-50  lg:absolute fixed right-[30px] top-[170px] lg:top-[20px] lg:right-[40]">
          <div
            className={`flex items-center relative w-fit ${
              isCartOpen ? "hidden" : "block"
            }`}
            onClick={handleToggleCart}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="cart-shopping"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width={20}
              height={20}
              className="text-amber-400 relative"
            >
              <path
                fill="currentColor"
                d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"
              ></path>
            </svg>
            <span className="rounded-full bg-amber-400 text-white absolute py-0.5 px-2 right-[-20px] top-2 border z-30">
              {productCount}
            </span>
          </div>
        </div>
      </nav>
  );
};
export default Navbar;
