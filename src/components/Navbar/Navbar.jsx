import React, { useState } from 'react'
import Links from './Links';
import { Menu, X } from 'lucide-react';

const Navbar = () => {

    const [open, setOpen] = useState(false)

const navigationBar = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 4,
    name: "Products",
    path: "/products",
  },
  {
    id: 5,
    name: "Blog",
    path: "/blog",
  },
    ];
    
    const links = navigationBar.map((navbar) => (
      <Links key={navbar.id} navbar={navbar}></Links>
    ));

  return (
    <div className="flex justify-between px-10 md:px-20 md:py-8 py-4">
      <span className="flex gap-5">
        <span
          onClick={() => {
            setOpen(!open);
          }}
          className="md:hidden cursor-pointer"
        >
          {open ? <X></X> : <Menu></Menu>}
        </span>
        <ul
          className={`md:hidden absolute py-2 px-4 rounded-md duration-100 text-black 
                ${open ? "top-11" : "-top-50"} 
                bg-[#3a477e]`}
        >
          {links}
        </ul>
        <h3>My Navbar</h3>
      </span>
      <ul className="md:flex hidden gap-10">{links}</ul>
      <button>Sign In</button>
    </div>
  );
}

export default Navbar
