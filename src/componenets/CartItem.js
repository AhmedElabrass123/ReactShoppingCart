import React from "react";
import img from "../images/air.png";
import { DataProducts } from "./DataProducts";
import FormatCurrency from "./FormatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
const CartItem = ({ id, quentity }) => {
  const { removeItemFromCart } = useShoppingCart();
  const theItem = DataProducts.find((item) => item.id === id);
  if (theItem == null) return null;
  return (
    <>
      <div
        key={id}
        className="sideInfo d-flex align-items-center justify-content-between mb-4"
      >
        <div className="theImg d-flex align-items-center">
          <img
            src={theItem.img}
            alt="sorry"
            style={{
              width: "150px",
              height: "150px",
              marginRight: "25px",
              backgroundColor: "white",
              boxShadow: "0px 0px 4px rgba(0,0,0,0.4)",
            }}
          />
          <div>
            {quentity > 1 ? (
              <h6 className="title" style={{textTransform:"capitalize"}}>
                {theItem.title} *{quentity}
              </h6>
            ) : (
              <h6
                className="title"
                style={{
                  textTransform: "capitalize",
                }}
              >
                {theItem.title}
              </h6>
            )}
            <p className="p-0 m-0">{FormatCurrency(theItem.price)}</p>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <span className="me-3 fs-5">
            {FormatCurrency(theItem.price * quentity)}
          </span>
          <span
            className="removeItem d-flex align-items-center justify-content-center"
            style={{
              border: "1px solid crimson",
              fontSize: "25px",
              padding: "0px 10px",
              color: "crimson",
              cursor: "pointer",
            }}
            onClick={() => removeItemFromCart(id)}
          >
            x
          </span>
        </div>
      </div>
    </>
  );
};

export default CartItem;
