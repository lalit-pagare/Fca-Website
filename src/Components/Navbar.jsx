import React, { useState } from "react";
import { List } from "@phosphor-icons/react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center px-12 py-6 justify-between">
        <span className="text-2xl">logo</span>
        <ul
          className={`absolute top-20 bg-slate-300 w-full left-0 text-center md:top-0 md:text-left md:relative md:left-0 md:flex md:gap-5 md:w-1/2 md:bg-transparent lg:w-1/3`}
          id={menuOpen ? "listClose" : "listOpen"}
        >
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>About us</li>
          </a>
          <a href="">
            <li>Courses</li>
          </a>
          <a href="">
            <li>Blogs</li>
          </a>
          <a href="">
            <li>Contact</li>
          </a>
        </ul>
        <List
          className="flex md:hidden"
          size={32}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
      </nav>
    </>
  );
};

export default Navbar;
