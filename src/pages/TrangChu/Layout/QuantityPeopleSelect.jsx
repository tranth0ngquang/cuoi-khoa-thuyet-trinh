"use client";

import { useEffect, useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { Button, Popover, Label, TextInput } from "flowbite-react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  setSoLuongKhachHienTai,
  setSoLuongKhachToiDa,
} from "../../../redux/Reducers/ChiTietPhong/chiTietPhongSlice";

export default function QuantityPeopleSelect() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { soLuongKhachHienTai, soLuongKhachToiDa } = useSelector(
    (state) => state.chiTietPhongSlice
  );

  const handleDecreasePeople = () => {
    if (soLuongKhachHienTai > 1) {
      dispatch(setSoLuongKhachHienTai(soLuongKhachHienTai - 1));
    }
  };

  const handleIncrease = () => {
    if (soLuongKhachHienTai < soLuongKhachToiDa) {
      dispatch(setSoLuongKhachHienTai(soLuongKhachHienTai + 1));
    }
  };

  // useEffect(() => {
  //   return () => {
  //     dispatch(setSoLuongKhachHienTai(1));
  //     dispatch(setSoLuongKhachToiDa(99));
  //   };
  // }, [dispatch]);
  return (
    <Popover className="shadow-lg border rounded-3xl bg-white shadow-black/50 z-20"
      aria-labelledby="area-popover"
      open={open}
      onOpenChange={setOpen}
      content={
        <div className="w-52 p-4">
          <h2 className="font-bold text-cyan-950 mb-4 text-center">
            Số lượng khách
          </h2>
          <div className="flex items-center justify-center text-black">
            <button className="text-black bg-white border border-stone-500 hover:text-white hover:bg-cyan-500 duration-500 rounded-full w-7 h-7"
              color="light"
              onClick={handleDecreasePeople}
              disabled={soLuongKhachHienTai <= 1}
            >
              <i className="fa-solid fa-minus"></i>
            </button>
            <span className="text-lg px-6">{soLuongKhachHienTai}</span>
            <button className="text-black bg-white border border-stone-500 hover:text-white hover:bg-cyan-500 duration-500 rounded-full w-7 h-7"
              color="light"
              onClick={handleIncrease}
              disabled={soLuongKhachHienTai >= soLuongKhachToiDa}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      }
    >
      <button className="text-left px-2 md:px-8">
        <p className="font-bold">Số lượng khách:</p>
        <div className="text-sm text-stone-700">
          <span> {soLuongKhachHienTai} khách / phòng</span>
          <i className="fa-solid fa-caret-down pl-2"></i>
        </div>
      </button>
    </Popover>
  );
}
