import React, { useState } from "react";
import { FaApple, FaSearch, FaShoppingBag, FaBars } from "react-icons/fa";

let links = [
  {
    names: "Store",
    href: "#",
  },
  {
    names: "Mac",
    href: "#",
  },
  {
    names: "iPad",
    href: "#",
  },
  {
    names: "iPhone",
    href: "#",
  },
  {
    names: "Watch",
    href: "#",
  },
  {
    names: "Airpods",
    href: "#",
  },
  {
    names: "Tv & Home",
    href: "#",
  },
  {
    names: "Entertainment",
    href: "#",
  },
  {
    names: "Accessories",
    href: "#",
  },
  {
    names: "Support",
    href: "#",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-black relative overflow-hidden ">
      {/* Navbar from bigger screen */}
      <ul className=" hidden md:flex justify-around items-center py-3 text-white font-thin text-sm px-20 ">
        <li>
          <FaApple className="text-white font-3xl hover:cursor-pointer"></FaApple>
        </li>
        {links.map((link, index) => (
          <li key={index}>
            <a className="hover:text-yellow-300" href={link.href}>{link.names}</a>
          </li>
        ))}
        <li>
          <FaSearch className="hover:cursor-pointer"></FaSearch>
        </li>
        <li>
          <FaShoppingBag className="hover:cursor-pointer"></FaShoppingBag>
        </li>
      </ul>
      {/* Navbar for small screen */}
      <div className="flex justify-between px-5 py-3 md:hidden ">
        <ul>
          <li>
            <FaApple className="text-white font-3xl hover:cursor-pointer"></FaApple>
          </li>
        </ul>
        <ul className="flex items-center gap-8">
          <li>
            <FaSearch className="text-white font-3xl hover:cursor-pointer"></FaSearch>
          </li>
          <li>
            <FaShoppingBag className="text-white font-3xl hover:cursor-pointer"></FaShoppingBag>
          </li>
          <li>
            <FaBars
              onClick={() => {
                setOpen(true);
              }}
              className="text-white font-3xl hover:cursor-pointer"
            ></FaBars>
          </li>
        </ul>
      </div>

      {/* Side bar */}
      <ul
        className={`text-white w-48 bg-black px-5 flex flex-col gap-3 py-4 text-left font-semibold
  fixed top-10 right-0 h-screen
  transform transition-transform duration-1000 ease-in-out z-50
  ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <li onClick={()=>
          {
            setOpen(false)
          }
        } className="text-right font-bold mr-5 cursor-pointer">X</li>
        {" "}
        {links.map((link, index) => (
         
          <li key={index}>
            <a className="hover:text-yellow-400" href={link.href}>{link.names}</a>
          </li>
        
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
