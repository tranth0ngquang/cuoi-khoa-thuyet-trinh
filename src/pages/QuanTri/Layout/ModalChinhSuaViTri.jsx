import React, { useState, useEffect } from "react";
import { Button, Label, Modal, TextInput, FileInput } from "flowbite-react";
import { useDispatch } from "react-redux";
import { updateViTri } from "../../../redux/Reducers/QuanTri/ViTriThunk";

const ModalChinhSuaViTri = ({ viTri }) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    tenViTri: "",
    tinhThanh: "",
    quocGia: "",
    hinhAnh: "",
  });
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (viTri) {
      setFormData({
        tenViTri: viTri.tenViTri,
        tinhThanh: viTri.tinhThanh,
        quocGia: viTri.quocGia,
        hinhAnh: viTri.hinhAnh,
      });
      setPreviewImage(viTri.hinhAnh);
    }
  }, [viTri]);

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
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    const updatedViTri = { ...formData, id: viTri.id };
    try {
      await dispatch(updateViTri(updatedViTri));
      setOpenModal(false);
    } catch (error) {
      console.error("Failed to update vi tri: ", error);
    }
  };

  return (
    <>
      <Button color="yellow" onClick={() => setOpenModal(true)}>
        <i className="fa fa-pencil-alt"></i>
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Cập nhật vị trí</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <div className="flex justify-center mb-4">
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-64 object-cover"
              />
            </div>
            <div>
              <Label htmlFor="hinhAnh" value="Hình Ảnh" />
              <FileInput
                id="hinhAnh"
                name="hinhAnh"
                onChange={handleFileChange}
              />
            </div>
            <div>
              <Label htmlFor="id" value="Mã vị trí" />
              <TextInput id="id" name="id" value={viTri.id} readOnly />
            </div>
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
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Cập nhật</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Hủy
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalChinhSuaViTri;
