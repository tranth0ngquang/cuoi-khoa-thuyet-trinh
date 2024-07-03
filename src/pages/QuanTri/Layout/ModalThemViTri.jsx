import React, { useState } from "react";
import { Button, Label, Modal, TextInput, FileInput } from "flowbite-react";
import { useDispatch } from "react-redux";
import { addViTri } from "../../../redux/Reducers/QuanTri/ViTriThunk";

const ModalThemViTri = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    tenViTri: "",
    tinhThanh: "",
    quocGia: "",
    hinhAnh: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, hinhAnh: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    try {
      await dispatch(addViTri(formData));
      setOpenModal(false);
    } catch (error) {
      console.error("Failed to add vi tri: ", error);
    }
  };

  return (
    <>
      <Button color="cyan" onClick={() => setOpenModal(true)}>
        Thêm vị trí
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Thêm vị trí</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <div>
              <Label htmlFor="tenViTri" value="Tên Vị Trí" />
              <TextInput
                id="tenViTri"
                name="tenViTri"
                value={formData.tenViTri}
                onChange={handleInputChange}
                placeholder="Tên Vị Trí"
                required
              />
            </div>
            <div>
              <Label htmlFor="tinhThanh" value="Tỉnh Thành" />
              <TextInput
                id="tinhThanh"
                name="tinhThanh"
                value={formData.tinhThanh}
                onChange={handleInputChange}
                placeholder="Tỉnh Thành"
                required
              />
            </div>
            <div>
              <Label htmlFor="quocGia" value="Quốc Gia" />
              <TextInput
                id="quocGia"
                name="quocGia"
                value={formData.quocGia}
                onChange={handleInputChange}
                placeholder="Quốc Gia"
                required
              />
            </div>
            <div>
              <Label htmlFor="hinhAnh" value="Hình Ảnh" />
              <FileInput
                id="hinhAnh"
                name="hinhAnh"
                onChange={handleFileChange}
                required
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Thêm</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Hủy
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalThemViTri;
