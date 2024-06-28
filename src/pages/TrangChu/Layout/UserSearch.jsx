import React from "react";
import LocationSelect from "./LocationSelect";
import DateRangeSelect from "./DateRangeSelect";
import QuantityPeopleSelect from "./QuantityPeopleSelect";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {setSelectedLocation} from "../../../redux/Reducers/Home/homeSlice";
export default function UserSearch() {
  const navigate = useNavigate();
  const { selectedLocation } = useSelector(
    (state) => state.homeSlice
  );
  // const {}
  return (
    <div>
      <LocationSelect />
      <DateRangeSelect />
      <QuantityPeopleSelect />
      <Button
        onClick={() => {
          
          if (selectedLocation === null) {
            navigate(`/Danh-Sach-Phong-Full`);
          } else {
            navigate(`/Danh-Sach-Phong/${selectedLocation}`);
          }
        }}
      >
        tìm kiếm
      </Button>
    </div>
  );
}
