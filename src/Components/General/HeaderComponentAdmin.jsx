"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
export function HeaderComponentAdmin() {
  return (
    <Navbar fluid rounded>
      <NavLink to="/">
        <img
          src="https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.svg"
          alt="airBnB logo"
        />
      </NavLink>
    </Navbar>
  );
}
