import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
            <div className="logo">
                <img src="/imgs/logo.svg" alt="" />
            </div>
            
            <ul className="links">
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/cart"}>Cart</NavLink>
                </li>
                <li>
                    <NavLink to={"/shop"} >Shop</NavLink>
                </li>
                <li>
                    <NavLink to={"/Product_page"}>Product page</NavLink>
                </li>
                <li>
                    <NavLink to={"/checkup"}>Check up </NavLink>
                </li>
            </ul>
            <div className="nav_icons">
                <CiSearch />
                <FaUser />
                <div className="nav_cart">
                    <FaShoppingCart />
                    <span>(0)</span>
                </div>

            </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
