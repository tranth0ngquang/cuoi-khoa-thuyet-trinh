// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { fetchRoomDetail } from "../../../redux/Reducers/ChiTietPhong/chiTietPhongThunk";
// import {
//   //   faIron,
//   faWashingMachine,
//   faTv,
//   faAirConditioner,
//   faWifi,
//   faParking,
//   faSwimmingPool,
//   faUtensils,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export default function TienNghiComponent() {
//   const { idSelectedRoomParams } = useParams();
//   const dispatch = useDispatch();
//   const { chiTietPhong } = useSelector((state) => state.chiTietPhongSlice);
//   useEffect(() => {
//     dispatch(fetchRoomDetail(idSelectedRoomParams));
//   }, [dispatch, idSelectedRoomParams]);

//   const renderTienNghi = () => {
//     if (chiTietPhong) {
//       return (
//         <div>
//           <h3>Các tiện nghi đang có </h3>
//           <p>
//             {chiTietPhong.banLa && (
//               <>
//                 <FontAwesomeIcon icon={faWashingMachine} /> Bàn là
//               </>
//             )}
//           </p>

//           <p>{chiTietPhong.mayGiat === true ? "Máy giặt" : null} </p>
//           <p>{chiTietPhong.tivi === true ? "Tivi" : null} </p>
//           <p>{chiTietPhong.dieuHoa === true ? "Điều hòa" : null} </p>
//           <p>{chiTietPhong.wifi === true ? "Wifi" : null} </p>
//           <p>{chiTietPhong.doXe === true ? "Đổ xe" : null} </p>
//           <p>{chiTietPhong.hoBoi === true ? "Hồ bơi" : null} </p>
//           <p>{chiTietPhong.banUi === true ? "Bàn ủi" : null} </p>
//         </div>
//       );
//     }
//   };
//   return <div>{renderTienNghi()}</div>;
// }
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRoomDetail } from "../../../redux/Reducers/ChiTietPhong/chiTietPhongThunk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBacon,
  faBath,
  faFan,
  faFaucet,
  faHouseSignal,
  faKitchenSet,
  faPersonSwimming,
  faSquareParking,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

export default function TienNghiComponent() {
  const { idSelectedRoomParams } = useParams();
  const dispatch = useDispatch();
  const { chiTietPhong } = useSelector((state) => state.chiTietPhongSlice);

  useEffect(() => {
    dispatch(fetchRoomDetail(idSelectedRoomParams));
  }, [dispatch, idSelectedRoomParams]);

  const renderTienNghi = () => {
    if (chiTietPhong) {
      return (
        <div>
          <h3>Các tiện nghi đang có </h3>
          <p>
            {chiTietPhong.banLa && (
              <>
                <FontAwesomeIcon icon={faBacon} />
                Bàn là
              </>
            )}
          </p>
          <p>
            {chiTietPhong.mayGiat && (
              <>
                <FontAwesomeIcon icon={faFaucet} /> Máy giặt
              </>
            )}
          </p>
          <p>
            {chiTietPhong.tivi && (
              <>
                <FontAwesomeIcon icon={faTv} /> Tivi
              </>
            )}
          </p>
          {
            <p>
              {chiTietPhong.dieuHoa && (
                <>
                  <FontAwesomeIcon icon={faFan} />
                  Điều hòa
                </>
              )}
            </p>
          }
          <p>
            {chiTietPhong.wifi && (
              <>
                <FontAwesomeIcon icon={faHouseSignal} />
                Wifi
              </>
            )}
          </p>
          <p>
            {chiTietPhong.doXe && (
              <>
                <FontAwesomeIcon icon={faSquareParking} />
                Đổ xe
              </>
            )}
          </p>
          <p>
            {chiTietPhong.hoBoi && (
              <>
                <FontAwesomeIcon icon={faPersonSwimming} /> Hồ bơi
              </>
            )}
          </p>
          <p>
            {chiTietPhong.phongTam && (
              <>
                <FontAwesomeIcon icon={faBath} /> Phòng tắm
              </>
            )}
          </p>
          <p>
            {chiTietPhong.bep && (
              <>
                <FontAwesomeIcon icon={faKitchenSet} /> Nhà bếp
              </>
            )}
          </p>
        </div>
      );
    }
  };

  return <div>{renderTienNghi()}</div>;
}
