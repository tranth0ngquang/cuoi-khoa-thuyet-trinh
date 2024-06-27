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

  useEffect(() => {
    return () => {
      dispatch(setSoLuongKhachHienTai(1));
      dispatch(setSoLuongKhachToiDa(99));
    };
  }, [dispatch]);
  return (
    <Popover
      aria-labelledby="area-popover"
      open={open}
      onOpenChange={setOpen}
      content={
        <div className="w-64 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Số lượng khách
          </h2>
          <div className="flex items-center justify-between">
            <Button
              color="light"
              onClick={handleDecreasePeople}
              disabled={soLuongKhachHienTai <= 1}
            >
              <HiMinus className="text-red-500" />
            </Button>
            <span className="text-xl">{soLuongKhachHienTai}</span>
            <Button
              color="light"
              onClick={handleIncrease}
              disabled={soLuongKhachHienTai >= soLuongKhachToiDa}
            >
              <HiPlus className="text-red-500" />
            </Button>
          </div>
        </div>
      }
    >
      <Button>
        Số lượng khách <BiCaretDown className="ml-2" />
      </Button>
    </Popover>
  );
}
