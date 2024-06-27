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
        <div
          onClick={() => {
            setSelectedLocationName(location.tinhThanh);
            dispatch(setSelectedLocation(location.id));
          }}
          key={location.id}
          className="text-center"
        >
          <img
            src={location.hinhAnh}
            alt={location.tenViTri}
            className="w-full h-auto mb-2 rounded-md"
          />
          <span className="text-gray-600">{location.tinhThanh}</span>
        </div>
      ))
    );
  };
  return (
    <Popover
      aria-labelledby="area-popover"
      open={open}
      onOpenChange={setOpen}
      content={
        <div className="w-96 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Tìm kiếm theo khu vực
          </h2>
          <div className="grid grid-cols-4 gap-4">{renderLocationItem()}</div>
        </div>
      }
    >
      <Button>
        Địa điểm : {selectedLocationName || "Chọn khu vực"}
        <BiCaretDown className="ml-2" />
      </Button>
    </Popover>
  );
}
