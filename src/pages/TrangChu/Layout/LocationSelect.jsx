"use client";

import { useEffect, useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { Button, Popover, Label, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocationList } from "../../../redux/Reducers/Home/homeThunk";
import { setSelectedLocation } from "../../../redux/Reducers/Home/homeSlice";
export default function LocationSelect() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { locationList, selectedLocation } = useSelector(
    (state) => state.homeSlice
  );
  const [selectedLocationName, setSelectedLocationName] = useState("");

  useEffect(() => {
    dispatch(fetchLocationList());
  }, [dispatch]);

  const renderLocationItem = () => {
    return (
      locationList &&
      locationList.map((location) => (
        <button
          onClick={() => {
            setSelectedLocationName(location.tinhThanh);
            dispatch(setSelectedLocation(location.id));
          }}
          key={location.id}
          className="text-center text-stone-600 hover:text-cyan-500"
        >
          <div className='bg-center bg-cover rounded-lg h-16 md:h-28' style={{ backgroundImage: `url(${location.hinhAnh})` }}>
          </div>
          <span className="text-sm">{location.tinhThanh}</span>
        </button>
      ))
    );
  };
  return (
    <Popover className="shadow-lg border rounded-3xl bg-white shadow-black/50 z-20"
      aria-labelledby="area-popover"
      open={open}
      onOpenChange={setOpen}
      content={
        <div className="w-80 md:w-96 p-4">
          <h2 className="font-bold text-cyan-950 mb-4 text-center">
            Tìm kiếm theo khu vực
          </h2>
          <div className="grid grid-cols-3 gap-4">{renderLocationItem()}</div>
        </div>
      }
    >
      <button className="text-left px-10 lg:px-8 lg:rounded-l-full TimKiem">
        <div>
          <p className="font-bold">Địa điểm:</p>
          <div className="text-sm text-stone-700">
            <span> {selectedLocationName || "Chọn khu vực"}</span>
            <i className="fa-solid fa-caret-down pl-2"></i>
          </div>
        </div>
      </button>
    </Popover>
  );
}
