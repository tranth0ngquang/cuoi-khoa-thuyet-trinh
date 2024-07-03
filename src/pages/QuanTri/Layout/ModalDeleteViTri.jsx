import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { useDispatch } from "react-redux";
import { deleteViTri } from "../../../redux/Reducers/QuanTri/ViTriThunk";

const ModalDeleteViTri = ({ viTriId }) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const handleDelete = async () => {
    try {
      await dispatch(deleteViTri(viTriId));
      setOpenModal(false);
    } catch (error) {
      console.error("Failed to delete vi tri: ", error);
    }
  };

  return (
    <>
      <button className="bg-red-500 text-white hover:bg-red-700 rounded-lg p-2" onClick={() => setOpenModal(true)}>
      <i className="fa fa-trash-alt"></i>
      </button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Xóa vị trí</Modal.Header>
        <Modal.Body>
          <p>Bạn có chắc chắn muốn xóa vị trí này không?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button color="red" onClick={handleDelete}>
            Xóa
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Hủy
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteViTri;
