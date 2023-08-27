import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ShoppingCart from "../componenets/ShoppingCart";

const contextProvider = createContext({});
const initialCartItems = localStorage.getItem("carts")
  ? JSON.parse(localStorage.getItem("carts"))
  : [];
const ShoppingCartContext = (props) => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(cartItems));
  }, [cartItems]);
  const getItemsQuentity = (id) => {
    return cartItems.find((item) => item.id === id)?.quentity || 0;
  };
  const increaseCartQuentity = (id) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quentity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, quentity: item.quentity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuentity = (id) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, quentity: item.quentity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeItemFromCart = (id) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };
  const cartQuentity = cartItems.reduce(
    (quentity, item) => item.quentity + quentity,
    0
  );
  const cart = useRef();
  const openTheCart = () => {
    console.log("open");
    cart.current.classList.remove("closeCart");
    cart.current.classList.add("openCart");
  };
  const closeTheCart = () => {
    console.log("close");
    cart.current.classList.remove("openCart");
    cart.current.classList.add("closeCart");
  };
  return (
    <>
      <contextProvider.Provider
        value={{
          cartItems,
          getItemsQuentity,
          increaseCartQuentity,
          decreaseCartQuentity,
          removeItemFromCart,
          cartQuentity,
          cart,
          openTheCart,
          closeTheCart,
        }}
      >
        {props.children}
        <ShoppingCart />
      </contextProvider.Provider>
    </>
  );
};

export default ShoppingCartContext;
export const useShoppingCart = () => {
  return useContext(contextProvider);
};
