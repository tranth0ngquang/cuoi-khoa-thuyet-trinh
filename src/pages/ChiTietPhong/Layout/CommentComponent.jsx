

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setIdSelectedRoom } from "../../../redux/Reducers/DanhSachPhong/danhSachPhongSlice";
import { PostBinhLuan, fetchMangBinhLuan } from "../../../redux/Reducers/ChiTietPhong/chiTietPhongThunk";

export default function CommentComponent() {
  const { idSelectedRoomParams } = useParams();
  const dispatch = useDispatch();
  const { idSelectedRoom } = useSelector((state) => state.danhSachPhongSlice);
  const { mangBinhLuan } = useSelector((state) => state.chiTietPhongSlice);
  const infoUser = JSON.parse(localStorage.getItem("user"));
  const userId = infoUser.id;

  useEffect(() => {
    dispatch(setIdSelectedRoom(idSelectedRoomParams));
    dispatch(fetchMangBinhLuan(idSelectedRoomParams));
  }, [dispatch, idSelectedRoomParams]);

  const renderComment = () => {
    return (
      mangBinhLuan &&
      mangBinhLuan.map((binhLuanItem) => (
        <div
          key={binhLuanItem.id}
          className="flex items-start space-x-4 p-4 border-b border-gray-200"
        >
          <img
            className="w-12 h-12 rounded-full"
            src={binhLuanItem.avatar}
            alt={`${binhLuanItem.id}'s avatar`}
          />
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold">{binhLuanItem.tenNguoiBinhLuan}</h4>
              <span className="text-sm text-gray-500">
                {binhLuanItem.ngayBinhLuan}
              </span>
            </div>
            <p className="mt-1 text-gray-700">{binhLuanItem.noiDung}</p>
          </div>
        </div>
      ))
    );
  };

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentData = {
      maPhong: idSelectedRoomParams,
      maNguoiBinhLuan: userId,
      noiDung: comment,
      saoBinhLuan: rating,
    };
    dispatch(PostBinhLuan(commentData));
    setComment("");
    setRating(0);
  };

  const handleRatingClick = (value) => {
    setRating(value);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-4 border border-gray-200 rounded-lg"
      >
        <div className="flex items-center space-x-4 mb-4">
          <img
            className="w-12 h-12 rounded-full"
            src="https://via.placeholder.com/48"
            alt="User avatar"
          />
          <div>
            <h4 className="font-semibold">Username</h4>
          </div>
        </div>
        <div className="flex mb-4">
          {[1, 2, 3, 4, 5].map((value) => (
            <svg
              key={value}
              className={`w-6 h-6 cursor-pointer ${
                value <= rating ? "text-yellow-500" : "text-gray-400"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => handleRatingClick(value)}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.168 3.6a1 1 0 00.95.69h3.818c.969 0 1.371 1.24.588 1.81l-3.093 2.24a1 1 0 00-.364 1.118l1.168 3.6c.3.921-.755 1.688-1.54 1.118l-3.094-2.24a1 1 0 00-1.175 0l-3.094 2.24c-.784.57-1.838-.197-1.54-1.118l1.168-3.6a1 1 0 00-.364-1.118L2.48 9.027c-.783-.57-.38-1.81.588-1.81h3.818a1 1 0 00.95-.69l1.168-3.6z" />
            </svg>
          ))}
        </div>
        <textarea
          className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
          placeholder="Viết bình luận của bạn..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Đánh giá
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold">Bình luận</h3>
        {renderComment()}
      </div>
    </div>
  );
}
