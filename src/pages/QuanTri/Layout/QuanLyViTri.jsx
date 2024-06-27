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

const QuanTriViTri = () => {
  const dispatch = useDispatch();
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
          id="search"
          name="search"
          placeholder="Tìm kiếm vị trí"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <ModalThemViTri />
      </div>
      <Table>
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
      </Table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default QuanTriViTri;
