import React from "react";
import FormatCurrency from "./FormatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

const StoreItem = ({ id, img, price, title }) => {
  const {
    getItemsQuentity,
    increaseCartQuentity,
    decreaseCartQuentity,
    removeItemFromCart,
  } = useShoppingCart();
  const quentity = getItemsQuentity(id);
  return (
    <>
      <div className="theProduct">
        <div className="theImg w-100 text-center">
          <img src={img} alt="sorry" style={{ height: "200px" }} />
        </div>
        <div className="info">
          <h4 className="proName text-uppercase">{title}</h4>
          <h6 className="proPrice">{FormatCurrency(price)}</h6>
        </div>
        <div>
          {quentity === 0 ? (
            <button
              className="btn btn-primary w-100"
              onClick={() => increaseCartQuentity(id)}
            >
              Add To Cart
            </button>
          ) : (
            <div className="BtnCart w-100 text-center">
              <div className="mb-3 w-100  d-flex align-items-center justify-content-around">
                <button
                  className="btn-sm btn btn-primary"
                  onClick={() => decreaseCartQuentity(id)}
                >
                  -
                </button>
                <h5 style={{ textTransform: "capitalize" }}>{quentity} in carts</h5>
                <button
                  className="btn-sm btn btn-primary"
                  onClick={() => increaseCartQuentity(id)}
                >
                  +
                </button>
              </div>
              <button
                className="btn  btn-danger"
                onClick={()=>removeItemFromCart(id)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StoreItem;
