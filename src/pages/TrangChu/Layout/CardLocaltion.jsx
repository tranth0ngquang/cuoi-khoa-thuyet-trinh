import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocationListCard } from "../../../redux/Reducers/Home/homeThunk";
import { setCurrentPage } from "../../../redux/Reducers/Home/homeSlice";

import { Button, Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
export default function CardLocaltion() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentPage, locationListCard, totalPages } = useSelector(
    (state) => state.homeSlice
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  useEffect(() => {
    dispatch(fetchLocationListCard(currentPage));
  }, [dispatch, currentPage]);

  console.log(locationListCard);

  const renderLocationCardItem = () => {
    return (
      locationListCard &&
      locationListCard.map((location) => (
        <Card
          key={location.id}
          className="max-w-sm"
          imgSrc={location.hinhAnh}
          horizontal
          onClick={() => navigate(`Danh-Sach-Phong/${location.id}`)}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {location.tinhThanh}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {Math.floor(Math.random() * 9) + 1} giờ chạy xe
          </p>
        </Card>
      ))
    );
  };

  return (
    <div className="listCardLocation__content">
      <div className="grid grid-cols-4 gap-4">{renderLocationCardItem()}</div>
      <div className="flex justify-between mt-4">
        <Button disabled={currentPage === 1} onClick={handlePrevious}>
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button disabled={currentPage === totalPages} onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
}
