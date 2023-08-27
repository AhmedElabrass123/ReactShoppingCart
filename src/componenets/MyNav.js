import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { faHome, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useShoppingCart } from "../context/ShoppingCartContext";

const MyNav = () => {
  const {cartQuentity,isOpened,open,openTheCart}=useShoppingCart();
  
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ height: "60px", boxShadow: "0px 0px 4px rgba(0,0,0,0.6)" ,
      backgroundColor:"white"}}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            MYSTORE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/store">
                  Store
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="Store ms-auto">
              <span
                style={{padding:"10px",
                 borderRadius: "50%",
                border:"1px solid blue",
                display:"flex",
                alignItems:"center",
                justifyContent:"center" }}
                className="basketIcon"
                ref={open}
                 onClick={openTheCart}
              >
                <span className="producNum"
               >{cartQuentity}</span>
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className="text-primary"
                  style={{fontSize:"20px"}}
                />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNav;
