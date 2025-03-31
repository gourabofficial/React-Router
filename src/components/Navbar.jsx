import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
        <div className="font-bold text-4xl text-white">
          <Link to={"/"}>Your Logo</Link>
        </div>
        <ul className=" flex space-x-4">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
