import React from "react";
import { HeaderComponent } from "../Components/General/HeaderComponent";
import { FooterComponent } from "../Components/General/FooterComponent";
import { Outlet } from "react-router-dom";

export default function UserTemplate() {
  return (
    <div>
      <HeaderComponent />
      <div className="content">
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
}
