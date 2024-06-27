

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Datepicker from "react-tailwindcss-datepicker";
import {
  setStartDate,
  setEndDate,
  setSoLuongNgayO,
} from "../../../redux/Reducers/Home/homeSlice";

const DateRangeSelect = () => {
  const dispatch = useDispatch();
  const { startDate, endDate, soLuongNgayO } = useSelector(
    (state) => state.homeSlice
  );

  const [value, setValue] = useState({
    startDate: new Date(startDate),
    endDate: new Date(endDate),
  });


  useEffect(() => {
    const start = new Date(value.startDate);
    const end = new Date(value.endDate);
    const timeDiff = end - start;
    const daysDiff = timeDiff / (1000 * 3600 * 24);

    dispatch(setSoLuongNgayO(daysDiff));
  }, [value, dispatch]);

  const handleValueChange = (newValue) => {
    setValue(newValue);
    dispatch(setStartDate(new Date(newValue.startDate).toISOString()));
    dispatch(setEndDate(new Date(newValue.endDate).toISOString()));
  };

  return (
    <div>
      <Datepicker
        i18n={"vi"}
        displayFormat={"DD/MM/YYYY"}
        value={value}
        onChange={handleValueChange}
      />
      <p>Số ngày giữa hai ngày: {soLuongNgayO}</p>
    </div>
  );
};

export default DateRangeSelect;
