// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Datepicker from "react-tailwindcss-datepicker";
// import {
//   setStartDate,
//   setEndDate,
//   setSoLuongNgayO,
// } from "../../../redux/Reducers/Home/homeSlice";

// const DateRangeSelect = () => {
//   const dispatch = useDispatch();
//   const { startDate, endDate, soLuongNgayO } = useSelector(
//     (state) => state.homeSlice
//   );

//   const [value, setValue] = useState({
//     startDate: new Date(startDate),
//     endDate: new Date(endDate),
//   });

//   useEffect(() => {
//     const start = new Date(value.startDate);
//     const end = new Date(value.endDate);
//     const timeDiff = end - start;
//     const daysDiff = timeDiff / (1000 * 3600 * 24);

//     dispatch(setSoLuongNgayO(daysDiff));
//   }, [value, dispatch]);

//   const handleValueChange = (newValue) => {
//     setValue(newValue);
//     dispatch(setStartDate(new Date(newValue.startDate).toISOString()));
//     dispatch(setEndDate(new Date(newValue.endDate).toISOString()));
//   };

//   return (
//     <div>
//       <Datepicker
//         i18n={"vi"}
//         displayFormat={"DD/MM/YYYY"}
//         value={value}
//         onChange={handleValueChange}
//       />
//       <p>Số ngày giữa hai ngày: {soLuongNgayO}</p>
//     </div>
//   );
// };

// export default DateRangeSelect;
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Datepicker from "react-tailwindcss-datepicker";
// import {
//   setStartDate,
//   setEndDate,
//   setSoLuongNgayO,
// } from "../../../redux/Reducers/Home/homeSlice";

// const DateRangeSelect = () => {
//   const dispatch = useDispatch();
//   const { startDate, endDate, soLuongNgayO } = useSelector(
//     (state) => state.homeSlice
//   );
//   console.log(startDate, endDate);

//   const formatDate = (date) => {
//     const d = new Date(date);
//     const day = `0${d.getDate()}`.slice(-2);
//     const month = `0${d.getMonth() + 1}`.slice(-2);
//     const year = d.getFullYear();
//     return `${day}/${month}/${year}`;
//   };

//   const parseDate = (dateString) => {
//     const [day, month, year] = dateString.split("/");
//     return new Date(`${year}-${month}-${day}`);
//   };

//   const [value, setValue] = useState({
//     startDate: parseDate(startDate),
//     endDate: parseDate(endDate),
//   });

//   useEffect(() => {
//     const start = new Date(value.startDate);
//     const end = new Date(value.endDate);
//     const timeDiff = end - start;
//     const daysDiff = timeDiff / (1000 * 3600 * 24);

//     dispatch(setSoLuongNgayO(daysDiff));
//   }, [value, dispatch]);

//   const handleValueChange = (newValue) => {
//     setValue({
//       startDate: newValue.startDate,
//       endDate: newValue.endDate,
//     });
//     dispatch(setStartDate(formatDate(newValue.startDate)));
//     dispatch(setEndDate(formatDate(newValue.endDate)));
//   };

//   return (
//     <div>
//       <Datepicker
//         i18n={"vi"}
//         displayFormat={"DD/MM/YYYY"}
//         value={value}
//         onChange={handleValueChange}
//       />
//       <p>Số ngày giữa hai ngày: {soLuongNgayO ? soLuongNgayO : 0}</p>
//     </div>
//   );
// };

// export default DateRangeSelect;

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

  const formatDate = (date) => {
    const d = new Date(date);
    const day = `0${d.getDate()}`.slice(-2);
    const month = `0${d.getMonth() + 1}`.slice(-2);
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const parseDate = (dateString) => {
    if (!dateString) return null;
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  const [value, setValue] = useState({
    startDate: startDate ? parseDate(startDate) : null,
    endDate: endDate ? parseDate(endDate) : null,
  });

  useEffect(() => {
    if (value.startDate && value.endDate) {
      const start = new Date(value.startDate);
      const end = new Date(value.endDate);
      const timeDiff = end - start;
      const daysDiff = timeDiff / (1000 * 3600 * 24);
      dispatch(setSoLuongNgayO(daysDiff));
    }
  }, [value, dispatch]);

  const handleValueChange = (newValue) => {
    setValue({
      startDate: newValue.startDate,
      endDate: newValue.endDate,
    });
    dispatch(
      setStartDate(newValue.startDate ? formatDate(newValue.startDate) : null)
    );
    dispatch(
      setEndDate(newValue.endDate ? formatDate(newValue.endDate) : null)
    );
  };

  return (
    <div>
      <Datepicker
        i18n={"vi"}
        displayFormat={"DD/MM/YYYY"}
        value={value}
        onChange={handleValueChange}
      />
      <p>Số ngày giữa hai ngày: {soLuongNgayO ? soLuongNgayO : 0}</p>
    </div>
  );
};

export default DateRangeSelect;
