import React from "react";
import DateRangeSelect from "./Layout/DateRangeSelect";
import LocationSelect from "./Layout/LocationSelect";
import QuantityPeopleSelect from "./Layout/QuantityPeopleSelect";
import CardLocaltion from "./Layout/CardLocaltion";
import { Button } from "flowbite-react";
import UserSearch from "./Layout/UserSearch";
import CardDesignTong from "./Layout/CardDesignTong";
import Video from "./Layout/Video";
import TimKiemKhoa from "./Layout/TimKiemKhoa";

export default function TrangChu() {
  return (
    <div>
      <Video />
      <UserSearch />
      <TimKiemKhoa />
      <CardLocaltion />
      <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <div className='bg-center bg-cover w-full rounded-3xl h-96' style={{ backgroundImage: 'url(./img/FujiBanner.png)' }}>
        </div>

      </div>
      <CardDesignTong />
      <CardDesignTong />
    </div>
  );
}
