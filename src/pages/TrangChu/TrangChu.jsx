import React from "react";
import DateRangeSelect from "./Layout/DateRangeSelect";
import LocationSelect from "./Layout/LocationSelect";
import QuantityPeopleSelect from "./Layout/QuantityPeopleSelect";
import CardLocaltion from "./Layout/CardLocaltion";
import { Button } from "flowbite-react";
import UserSearch from "./Layout/UserSearch";

export default function TrangChu() {
  return (
    <div>
      <UserSearch />
      <CardLocaltion />
    </div>
  );
}
