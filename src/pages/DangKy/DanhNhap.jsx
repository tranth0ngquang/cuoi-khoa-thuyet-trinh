// "use client";

// import { Button, Label, Modal, TextInput } from "flowbite-react";
// import { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useDispatch } from "react-redux";
// import { PostDangNhap } from "../../redux/Reducers/DangKy/dangKyThunk";
// import {
//   setStateLogin,
//   setIsAdmin,
// } from "../../redux/Reducers/LoginStatus/LoginStatusSlice";

// const validationSchema = Yup.object({
//   email: Yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   password: Yup.string().required("Password is required"),
// });

// export function DangNhap() {
//   const [openModal, setOpenModal] = useState(false);
//   const dispatch = useDispatch();
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values, { setSubmitting }) => {
//       const loginData = {
//         email: values.email,
//         password: values.password,
//       };

//       const promise = dispatch(PostDangNhap(loginData));

//       toast.promise(promise, {
//         pending: "Loading...",
//         success: "Logged in successfully!",
//         error: "Login failed. Please check your password or email.",
//       });

//       promise
//         .then((response) => {
//           // Xử lý khi đăng nhập thành công
//           setOpenModal(false);
//           localStorage.setItem(
//             "user",
//             JSON.stringify(response.data.content.user)
//           );
//           localStorage.setItem("token", response.data.content.token);
//           dispatch(setStateLogin());
//           if (response.data.content.user.role === "ADMIN") {
//             dispatch(setIsAdmin());
//           }
//         })
//         .catch((error) => {
//           console.error("Login error:", error);
//           // Xử lý khi đăng nhập thất bại
//         })
//         .finally(() => {
//           setSubmitting(false);
//         });
//     },
//   });

//   return (
//     <>
//       <Button onClick={() => setOpenModal(true)}>Đăng nhập</Button>
//       <Modal show={openModal} onClose={() => setOpenModal(false)}>
//         <Modal.Header>Đăng nhập</Modal.Header>
//         <Modal.Body>
//           <form
//             className="flex max-w-md flex-col gap-4"
//             onSubmit={formik.handleSubmit}
//           >
//             <div>
//               <Label htmlFor="email" value="Email" />
//               <TextInput
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="name@flowbite.com"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 color={
//                   formik.errors.email && formik.touched.email
//                     ? "failure"
//                     : "default"
//                 }
//               />
//               {formik.errors.email && formik.touched.email && (
//                 <p className="text-red-600">{formik.errors.email}</p>
//               )}
//             </div>
//             <div>
//               <Label htmlFor="password" value="Password" />
//               <TextInput
//                 id="password"
//                 name="password"
//                 type="password"
//                 placeholder="Your password"
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 color={
//                   formik.errors.password && formik.touched.password
//                     ? "failure"
//                     : "default"
//                 }
//               />
//               {formik.errors.password && formik.touched.password && (
//                 <p className="text-red-600">{formik.errors.password}</p>
//               )}
//             </div>
//             <Button type="submit" disabled={formik.isSubmitting}>
//               Submit
//             </Button>
//           </form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={() => setOpenModal(false)}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
"use client";

import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { PostDangNhap } from "../../redux/Reducers/DangKy/dangKyThunk";
import {
  setStateLogin,
  setIsAdmin,
} from "../../redux/Reducers/LoginStatus/LoginStatusSlice";
import { setUserInfo } from "../../redux/Reducers/DangKy/dangKySlice";
import { setUserInfor } from "../../redux/Reducers/UserInfo/UserInfoSlice";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email không được để trống"),
  password: Yup.string().required("Password không được để trống"),
});

export function DangNhap({ show, setShow, toggleToDangKy }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      const loginData = {
        email: values.email,
        password: values.password,
      };

      const promise = dispatch(PostDangNhap(loginData));

      toast.promise(promise, {
        pending: "Đang tải...",
        success: "Đăng nhập thành công!",
        error: "Đăng nhập thất bại. Vui lòng kiểm tra password hoặc email.",
      });

      promise
        .then((response) => {
          // Xử lý khi đăng nhập thành công
          setShow(false);
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.content.user)
          );
          localStorage.setItem("token", response.data.content.token);
          dispatch(setStateLogin());
          dispatch(setUserInfor(response.data.content.user));
          if (response.data.content.user.role === "ADMIN") {
            dispatch(setIsAdmin());
          }
        })
        .catch((error) => {
          console.error("Đăng nhập lỗi:", error);
          // Xử lý khi đăng nhập thất bại
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <Modal show={show} onClose={() => setShow(false)} id="Modal_DangNhap">
      <div className="relative bg-gradient-to-b from-cyan-700 to-cyan-950 text-white rounded-3xl p-4">

        {/* nút close tab */}
        <div className="absolute top-7 right-7">
          <button onClick={() => setShow(false)}>
            <i class="fa-solid fa-xmark  text-xl text-cyan-300 hover:text-white bg-cyan-900 hover:bg-cyan-950 px-2.5 py-1 rounded-full duration-500"></i>
          </button>
        </div>
        <div>
          <div className="text-center font-bold text-2xl pb-4 pt-4 uppercase">Đăng nhập</div>

          <form
            className="text-center"
            onSubmit={formik.handleSubmit}
          >
            <div className="text-left">

              {/* email */}
              <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder=" " required
                  color={
                    formik.errors.email && formik.touched.email
                      ? "failure"
                      : "default"
                  }
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-cyan-700 focus:border-cyan-500 focus:outline-none focus:ring-0 peer" />

                <label htmlFor="email" value="Email" className="peer-focus:font-medium absolute text-sm text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>

                {formik.errors.email && formik.touched.email && (
                  <p className="text-cyan-300 text-sm pt-2">{formik.errors.email}</p>
                )}
              </div>

              {/* password */}
              <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder=" " required
                  color={
                    formik.errors.password && formik.touched.password
                      ? "failure"
                      : "default"
                  }
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-cyan-800 focus:border-cyan-500 focus:outline-none focus:ring-0 peer" />

                <label htmlFor="password" value="Password" className="peer-focus:font-medium absolute text-sm text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>

                {formik.errors.password && formik.touched.password && (
                  <p className="text-cyan-300 text-sm pt-2">{formik.errors.password}</p>
                )}
              </div>
            </div>

            {/* nút đăng nhập */}
            <button type="submit" disabled={formik.isSubmitting} className="bg-cyan-500 text-center hover:bg-cyan-700 duration-500 py-2 px-8 rounded-full">
              Đăng nhập
            </button>

          </form>

          <div className="text-center">
            <div className="text-center mt-4">
              <p>
                Chưa có tài khoản?{" "}
                <button
                  onClick={() => {
                    setShow(false);
                    toggleToDangKy();
                  }}
                  className="text-cyan-500 hover:text-cyan-300 font-bold hover:underline duration-500"
                >
                  Đăng ký
                </button>
              </p>
            </div>
          </div>
        </div>

      </div>

    </Modal>
  );
}
