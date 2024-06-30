import React from "react";
import { useParams } from "react-router-dom";
import CardItemPhongFull from "./Layout/CardItemPhongFull";

export default function DanhSachPhongFull() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
      <h3 className="pb-8 text-white font-bold text-2xl uppercase">tách nền</h3>
      <CardItemPhongFull />
    </div>
  );
}
