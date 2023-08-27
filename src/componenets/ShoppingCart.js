import React, { useRef } from "react";
import img from "../images/air.png";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import FormatCurrency from "./FormatCurrency";
import { DataProducts } from "./DataProducts";
const ShoppingCart = ({isOpened}) => {
    const {cartItems,removeItemFromCart,closeTheCart,cart}=useShoppingCart();  
  return (
    <>
      <div
      className="sideBar closeCart"
      style={{
        width: "480px",
        backgroundColor: "white",
        padding: "20px",
        boxShadow: "0px 0px 4px rgba(0,0,0,0.4)",
       
      }}
      ref={cart}
    >
    
      <div className="head w-100 d-flex align-items-center justify-content-between mb-5">
        <span
          className="m-0 p-0"
          style={{
            fontSize: "35px",
          }}
        >
          Cart
        </span>
        <span
          className="closeSidebar m-0 p-0"
          style={{
            cursor: "pointer",
            fontSize: "30px",
            color: "crimson",
            width:"40px",
            height:"40px",
            borderRadius:"50%",
            border:"1px solid crimson",
            display:"flex",
            justifyContent:"center",
            lineHeight:"30px"

          }}
          onClick={closeTheCart}
        >
          x
        </span>
      </div>
      {cartItems.map((item)=>{
            return(
                <CartItem  key={item.id} {...item} />
            )
        })}
        <div className="theTotal mt-5">
        <h2>Total Price : {FormatCurrency(
          cartItems.reduce((total,cartItems)=>{
          const item=DataProducts.find((i)=>i.id===cartItems.id);
          return total + (item?item.price:0)*cartItems.quentity;
        }
         ,0)
        )}</h2>
        </div>
    </div>
    </>
  
  );
};

export default ShoppingCart;
