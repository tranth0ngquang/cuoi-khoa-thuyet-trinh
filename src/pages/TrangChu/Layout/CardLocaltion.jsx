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
        <div onClick={() => navigate(`Danh-Sach-Phong/${location.id}`)} key={location.id}
          className="BanTay rounded-3xl bg-white hover:bg-cyan-50 border border-transparent hover:border-cyan-200 shadow-md hover:shadow-xl duration-500">
          <div className='bg-center bg-cover rounded-3xl h-48 md:h-72' style={{ backgroundImage: `url(${location.hinhAnh})` }}>
          </div>

          <div className='p-4 text-cyan-700 hover:text-cyan-500 duration-500'>
            <p className='font-bold text-xl'>{location.tinhThanh}</p>
            <p className='text-black'>{Math.floor(Math.random() * 9) + 1} giờ chạy xe</p>
          </div>
        </div>

      ))
    );
  };

  return (
    <div className="listCardLocation__content mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
      <h3 className="pb-8 text-cyan-950 font-bold text-2xl uppercase">Các địa điểm được ưu chuộng</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {renderLocationCardItem()}
      </div>

      <div className="flex justify-center mt-4 items-center">
        <Button disabled={currentPage === 1} onClick={handlePrevious}>
          1
        </Button>
        <span className="mx-4">
          Trang {currentPage} trên {totalPages}
        </span>
        <Button disabled={currentPage === totalPages} onClick={handleNext}>
          1
        </Button>
      </div>
    </div>
  );
}
