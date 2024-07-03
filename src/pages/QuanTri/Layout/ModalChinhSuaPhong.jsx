import React, { useState, useEffect } from "react";
import { Button, Modal, Label, TextInput, ToggleSwitch } from "flowbite-react";
import { useDispatch } from "react-redux";
import { updatePhong } from "../../../redux/Reducers/QuanTri/QuanLyPhongThunk";

const ModalChinhSuaPhong = ({ phong }) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    id: 0,
    tenPhong: "",
    khach: 0,
    phongNgu: 0,
    giuong: 0,
    phongTam: 0,
    moTa: "",
    giaTien: 0,
    mayGiat: true,
    banLa: true,
    tivi: true,
    dieuHoa: true,
    wifi: true,
    bep: true,
    doXe: true,
    hoBoi: true,
    banUi: true,
    maViTri: 0,
    hinhAnh: "",
  });

  useEffect(() => {
    if (phong) {
      setFormData(phong);
    }
  }, [phong]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggleChange = (name) => {
    setFormData({ ...formData, [name]: !formData[name] });
  };

  const handleSubmit = async () => {
    try {
      await dispatch(updatePhong(formData)).unwrap();
      setOpenModal(false);
    } catch (error) {
      console.error("Failed to update phong: ", error);
    }
  };

  return (
    <>

      <button className="bg-cyan-500 text-white hover:bg-cyan-800 rounded-lg p-2 mr-2" onClick={() => setOpenModal(true)}>
        <i className="fa fa-pencil-alt"></i>
      </button>
      
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Chỉnh Sửa Phòng</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <div>
              <Label htmlFor="tenPhong" value="Tên Phòng" />
              <TextInput
                id="tenPhong"
                name="tenPhong"
                value={formData.tenPhong}
                onChange={handleInputChange}
                placeholder="Tên Phòng"
                required
              />
            </div>
            <div>
              <Label htmlFor="khach" value="Khách" />
              <TextInput
                id="khach"
                name="khach"
                type="number"
                value={formData.khach}
                onChange={handleInputChange}
                placeholder="Khách"
                required
              />
            </div>
            <div>
              <Label htmlFor="phongNgu" value="Phòng Ngủ" />
              <TextInput
                id="phongNgu"
                name="phongNgu"
                type="number"
                value={formData.phongNgu}
                onChange={handleInputChange}
                placeholder="Phòng Ngủ"
                required
              />
            </div>
            <div>
              <Label htmlFor="giuong" value="Giường" />
              <TextInput
                id="giuong"
                name="giuong"
                type="number"
                value={formData.giuong}
                onChange={handleInputChange}
                placeholder="Giường"
                required
              />
            </div>
            <div>
              <Label htmlFor="phongTam" value="Phòng Tắm" />
              <TextInput
                id="phongTam"
                name="phongTam"
                type="number"
                value={formData.phongTam}
                onChange={handleInputChange}
                placeholder="Phòng Tắm"
                required
              />
            </div>
            <div>
              <Label htmlFor="moTa" value="Mô Tả" />
              <TextInput
                id="moTa"
                name="moTa"
                value={formData.moTa}
                onChange={handleInputChange}
                placeholder="Mô Tả"
                required
              />
            </div>
            <div>
              <Label htmlFor="giaTien" value="Giá Tiền" />
              <TextInput
                id="giaTien"
                name="giaTien"
                type="number"
                value={formData.giaTien}
                onChange={handleInputChange}
                placeholder="Giá Tiền"
                required
              />
            </div>
            <div>
              <Label htmlFor="maViTri" value="Mã Vị Trí" />
              <TextInput
                id="maViTri"
                name="maViTri"
                type="number"
                value={formData.maViTri}
                onChange={handleInputChange}
                placeholder="Mã Vị Trí"
                required
              />
            </div>
            <div>
              <Label htmlFor="hinhAnh" value="Hình Ảnh URL" />
              <TextInput
                id="hinhAnh"
                name="hinhAnh"
                value={formData.hinhAnh}
                onChange={handleInputChange}
                placeholder="Hình Ảnh URL"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Máy Giặt", name: "mayGiat" },
                { label: "Bàn Là", name: "banLa" },
                { label: "TV", name: "tivi" },
                { label: "Điều Hòa", name: "dieuHoa" },
                { label: "Wifi", name: "wifi" },
                { label: "Bếp", name: "bep" },
                { label: "Đỗ Xe", name: "doXe" },
                { label: "Hồ Bơi", name: "hoBoi" },
                { label: "Bàn Ủi", name: "banUi" },
              ].map((item) => (
                <div key={item.name}>
                  <Label>{item.label}</Label>
                  <ToggleSwitch
                    checked={formData[item.name]}
                    label=""
                    onChange={() => handleToggleChange(item.name)}
                  />
                </div>
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Cập Nhật</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Hủy
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalChinhSuaPhong;
