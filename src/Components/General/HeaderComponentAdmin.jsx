"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import LogoZahaSvg from "../../pages/TrangChu/Layout/LogoZahaSvg";

export function HeaderComponentAdmin() {
  return (
    <Navbar
      fluid
      className="w-full text-stone-500 px-4 sm:px-10 py-2.5 rounded-none z-50 shadow-lg bg-center bg-cover"
      style={{ backgroundImage: "url(/img/header1.png)" }}
    >
      <NavLink to="/">
        <LogoZahaSvg />
      </NavLink>
    </Navbar>
  );
}
