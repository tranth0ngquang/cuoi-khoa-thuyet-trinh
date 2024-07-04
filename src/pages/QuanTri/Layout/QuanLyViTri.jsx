import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Pagination, TextInput } from "flowbite-react";

import {
  fetchViTriData,
  searchViTri,
} from "../../../redux/Reducers/QuanTri/ViTriThunk";
import {
  setCurrentPage,
  setViTriList,
} from "../../../redux/Reducers/QuanTri/ViTriSlice";
import ModalThemViTri from "./ModalThemViTri";
import ModalChinhSuaViTri from "./ModalChinhSuaViTri";
import ModalDeleteViTri from "./ModalDeleteViTri";
import { useNavigate } from "react-router-dom";

const QuanTriViTri = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    console.log(userInfo);
    if (!userInfo || userInfo.role !== "ADMIN") {
      navigate("/");
    }
  }, [navigate]);

  const { viTriList, totalPages, currentPage } = useSelector(
    (state) => state.viTriSlice
  );

  useEffect(() => {
    dispatch(fetchViTriData(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      dispatch(fetchViTriData(currentPage));
    } else {
      const result = await dispatch(searchViTri(searchTerm));
      dispatch(setViTriList(result));
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Quản lý vị trí</h1>

      <div className="flex justify-between mb-4">
        <TextInput
          className="min-w-64"

          color="cyan"
          id="search"
          name="search"
          placeholder="Tìm kiếm vị trí theo id"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <ModalThemViTri />
      </div>

      {/* Bang Thông tin vị trí */}
      <div className="mb-8 border bg-white shadow-lg w-full">
        <table className=" w-full">
          <tr className="border bg-stone-200 text-left">
            <th className="py-2 pl-2">ID</th>
            <th>Tên Vị Trí</th>
            <th>Tỉnh Thành</th>
            <th>Quốc Gia</th>
            <th>Hình Ảnh</th>
            <th>Thao Tác</th>
          </tr>

          {viTriList.map((viTri) => (
            <tr key={viTri.id} className=" border">
              <td className="py-4 pl-2">{viTri.id}</td>
              <td>{viTri.tenViTri}</td>
              <td>{viTri.tinhThanh}</td>
              <td>{viTri.quocGia}</td>

              <td key={`avatar-${viTri.id}`}>
                <img
                  src={viTri.hinhAnh}
                  alt={viTri.tenViTri}
                  className="w-10 h-10 rounded-full"
                />
              </td>

              <td key={`actions-${viTri.id}`}>
                <ModalChinhSuaViTri viTri={viTri} />
                <ModalDeleteViTri viTriId={viTri.id} />
              </td>

            </tr>
          ))}

        </table>

      </div>
      {/* <Table>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Tên Vị Trí</Table.HeadCell>
          <Table.HeadCell>Tỉnh Thành</Table.HeadCell>
          <Table.HeadCell>Quốc Gia</Table.HeadCell>
          <Table.HeadCell>Hình Ảnh</Table.HeadCell>
          <Table.HeadCell>Thao Tác</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {viTriList.map((viTri) => (
            <Table.Row key={viTri.id}>
              <Table.Cell>{viTri.id}</Table.Cell>
              <Table.Cell>{viTri.tenViTri}</Table.Cell>
              <Table.Cell>{viTri.tinhThanh}</Table.Cell>
              <Table.Cell>{viTri.quocGia}</Table.Cell>
              <Table.Cell>
                <img
                  src={viTri.hinhAnh}
                  alt={viTri.tenViTri}
                  className="w-10 h-10 rounded-full"
                />
              </Table.Cell>
              <Table.Cell>
                <ModalChinhSuaViTri viTri={viTri} />

                <ModalDeleteViTri viTriId={viTri.id} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table> */}

      <div className="text-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default QuanTriViTri;
