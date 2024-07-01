import React from "react";
import { useParams } from "react-router-dom";
import CardItemPhongFull from "./Layout/CardItemPhongFull";

export default function DanhSachPhongFull() {
  return (
    <div>
      <img src="/img/BannerNav1.png" alt="" className="w-full pt-16 md:pt-0"/>
      <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <CardItemPhongFull />
      </div>

    </div>
  );
}
