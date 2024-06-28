// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Table,
//   Pagination,
//   Button,
//   Modal,
//   TextInput,
//   Label,
// } from "flowbite-react";
// import Swal from "sweetalert2";
// import {
//   fetchBinhLuanData,
//   deleteBinhLuan,
// } from "../../../redux/Reducers/QuanTri/QuanLyBinhLuanThunk";
// import { setCurrentPage } from "../../../redux/Reducers/QuanTri/QuanLyBinhLuanSlice";

// const QuanTriBinhLuan = () => {
//   const dispatch = useDispatch();
//   const { binhLuanList, totalPages, currentPage } = useSelector(
//     (state) => state.quanLyBinhLuanSlice
//   );
//   const [keyword, setKeyword] = useState("");

//   useEffect(() => {
//     dispatch(fetchBinhLuanData());
//   }, [dispatch]);

//   const handlePageChange = (page) => {
//     dispatch(setCurrentPage(page));
//   };

//   const handleSearchChange = (e) => {
//     setKeyword(e.target.value);
//   };

//   const handleDelete = async (id) => {
//     const confirm = await Swal.fire({
//       title: "Bạn có chắc chắn muốn xóa bình luận này?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Xóa",
//       cancelButtonText: "Hủy",
//     });

//     if (confirm.isConfirmed) {
//       dispatch(deleteBinhLuan(id));
//     }
//   };

//   const paginatedData = binhLuanList.slice(
//     (currentPage - 1) * 10,
//     currentPage * 10
//   );

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Quản lý bình luận</h1>
//       <div className="flex justify-between mb-4">
//         <TextInput
//           id="search"
//           placeholder="Tìm kiếm bình luận"
//           value={keyword}
//           onChange={handleSearchChange}
//         />
//       </div>

//       <Table>
//         <Table.Head>
//           <Table.HeadCell>ID</Table.HeadCell>
//           <Table.HeadCell>Mã Phòng</Table.HeadCell>
//           <Table.HeadCell>Mã Người Bình Luận</Table.HeadCell>
//           <Table.HeadCell>Ngày Bình Luận</Table.HeadCell>
//           <Table.HeadCell>Nội Dung</Table.HeadCell>
//           <Table.HeadCell>Sao Bình Luận</Table.HeadCell>
//           <Table.HeadCell>Thao Tác</Table.HeadCell>
//         </Table.Head>
//         <Table.Body>
//           {paginatedData.map((binhLuan) => (
//             <Table.Row key={binhLuan.id}>
//               <Table.Cell>{binhLuan.id}</Table.Cell>
//               <Table.Cell>{binhLuan.maPhong}</Table.Cell>
//               <Table.Cell>{binhLuan.maNguoiBinhLuan}</Table.Cell>
//               <Table.Cell>{binhLuan.ngayBinhLuan}</Table.Cell>
//               <Table.Cell>{binhLuan.noiDung}</Table.Cell>
//               <Table.Cell>{binhLuan.saoBinhLuan}</Table.Cell>
//               <Table.Cell>
//                 <Button color="red" onClick={() => handleDelete(binhLuan.id)}>
//                   <i className="fa fa-trash-alt"></i>
//                 </Button>
//               </Table.Cell>
//             </Table.Row>
//           ))}
//         </Table.Body>
//       </Table>
//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// };

// export default QuanTriBinhLuan;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Pagination,
  Button,
  TextInput,
} from "flowbite-react";
import Swal from "sweetalert2";
import {
  fetchBinhLuanData,
  fetchBinhLuanTheoPhong,
  deleteBinhLuan,
} from "../../../redux/Reducers/QuanTri/QuanLyBinhLuanThunk";
import { setCurrentPage } from "../../../redux/Reducers/QuanTri/QuanLyBinhLuanSlice";

const QuanLyBinhLuan = () => {
  const dispatch = useDispatch();
  const { binhLuanList, totalPages, currentPage } = useSelector(
    (state) => state.quanLyBinhLuanSlice
  );
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    dispatch(fetchBinhLuanData());
  }, [dispatch]);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    if (keyword.trim() !== "") {
      dispatch(fetchBinhLuanTheoPhong(keyword));
    } else {
      dispatch(fetchBinhLuanData());
    }
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Bạn có chắc chắn muốn xóa bình luận này?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    });

    if (confirm.isConfirmed) {
      dispatch(deleteBinhLuan(id));
    }
  };

  const paginatedData = binhLuanList.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Quản lý bình luận</h1>
      <div className="flex justify-between mb-4">
        <TextInput
          id="search"
          placeholder="Tìm kiếm bình luận theo mã phòng"
          value={keyword}
          onChange={handleSearchChange}
        />
        <Button onClick={handleSearch}>Tìm kiếm</Button>
      </div>

      <Table>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Mã Phòng</Table.HeadCell>
          <Table.HeadCell>Mã Người Bình Luận</Table.HeadCell>
          <Table.HeadCell>Ngày Bình Luận</Table.HeadCell>
          <Table.HeadCell>Nội Dung</Table.HeadCell>
          <Table.HeadCell>Sao Bình Luận</Table.HeadCell>
          <Table.HeadCell>Thao Tác</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {paginatedData.map((binhLuan) => (
            <Table.Row key={binhLuan.id}>
              <Table.Cell>{binhLuan.id}</Table.Cell>
              <Table.Cell>{binhLuan.maPhong}</Table.Cell>
              <Table.Cell>{binhLuan.maNguoiBinhLuan}</Table.Cell>
              <Table.Cell>{binhLuan.ngayBinhLuan}</Table.Cell>
              <Table.Cell>{binhLuan.noiDung}</Table.Cell>
              <Table.Cell>{binhLuan.saoBinhLuan}</Table.Cell>
              <Table.Cell>
                <Button color="red" onClick={() => handleDelete(binhLuan.id)}>
                  <i className="fa fa-trash-alt"></i>
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default QuanLyBinhLuan;
