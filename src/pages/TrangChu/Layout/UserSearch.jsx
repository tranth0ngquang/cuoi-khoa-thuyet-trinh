import React from "react";
import LocationSelect from "./LocationSelect";
import DateRangeSelect from "./DateRangeSelect";
import QuantityPeopleSelect from "./QuantityPeopleSelect";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { setSelectedLocation } from "../../../redux/Reducers/Home/homeSlice";
export default function UserSearch() {
  const navigate = useNavigate();
  const { selectedLocation } = useSelector(
    (state) => state.homeSlice
  );
  // const {}
  return (
    <div className="p-4 py-6 lg:py-8">
      <div className="flex justify-center items-center flex-wrap md:shadow-none shadow-lg rounded-3xl md:rounded-none">
        <LocationSelect />
        <DateRangeSelect />
        <div className="flex items-center md:rounded-r-full TimKiem">
          <QuantityPeopleSelect />
          <button className="pr-2 md:pr-6"
            onClick={() => {

              if (selectedLocation === null) {
                navigate(`/Danh-Sach-Phong-Full`);
              } else {
                navigate(`/Danh-Sach-Phong/${selectedLocation}`);
              }
            }}
          >
            <i class="fa-solid fa-magnifying-glass text-white bg-cyan-700 hover:bg-cyan-950 rounded-full p-3 duration-500"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
