// "use client";

// import {
//   Button,
//   Label,
//   Modal,
//   TextInput,
//   Select,
//   Radio,
//   Datepicker,
// } from "flowbite-react";
// import { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import "react-datepicker/dist/react-datepicker.css";
// import { PostDangKy } from "../../redux/Reducers/DangKy/dangKyThunk";
// import { useDispatch } from "react-redux";

// const validationSchema = Yup.object({
//   name: Yup.string()
//     .matches(
//       /^[a-zA-ZÀ-ỹ\s]*$/,
//       "Name cannot contain numbers or special characters"
//     )
//     .required("Name is required"),
//   email: Yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   password: Yup.string().required("Password is required"),
//   phone: Yup.string()
//     .matches(/^(0|\+84)[1-9][0-9]{8}$/, "Invalid phone number format")
//     .required("Phone number is required"),
//   birthday: Yup.date().required("Birthday is required"),
//   gender: Yup.boolean().required("Gender is required"),
//   role: Yup.string()
//     .oneOf(["ADMIN", "USER"], "Invalid role")
//     .required("Role is required"),
// });

// export function DangKy() {
//   const [openModal, setOpenModal] = useState(false);
//   const dispatch = useDispatch();
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       password: "",
//       phone: "",
//       birthday: new Date(),
//       gender: true,
//       role: "USER",
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       const dataDangKy = {
//         ...values,
//         birthday: values.birthday.toISOString(),
//       };
//       dispatch(PostDangKy(dataDangKy));
//       setOpenModal(false);
//     },
//   });

//   return (
//     <>
//       <Button onClick={() => setOpenModal(true)}>Đăng ký</Button>
//       <Modal show={openModal} onClose={() => setOpenModal(false)}>
//         <Modal.Header>Đăng ký</Modal.Header>
//         <Modal.Body>
//           <form
//             className="flex max-w-md flex-col gap-4"
//             onSubmit={formik.handleSubmit}
//           >
//             <div>
//               <Label htmlFor="name" value="Name" />
//               <TextInput
//                 id="name"
//                 name="name"
//                 placeholder="John Doe"
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 color={
//                   formik.errors.name && formik.touched.name
//                     ? "failure"
//                     : "default"
//                 }
//               />
//               {formik.errors.name && formik.touched.name && (
//                 <p className="text-red-600">{formik.errors.name}</p>
//               )}
//             </div>
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
//             <div>
//               <Label htmlFor="phone" value="Phone" />
//               <TextInput
//                 id="phone"
//                 name="phone"
//                 placeholder="0123456789"
//                 value={formik.values.phone}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 color={
//                   formik.errors.phone && formik.touched.phone
//                     ? "failure"
//                     : "default"
//                 }
//               />
//               {formik.errors.phone && formik.touched.phone && (
//                 <p className="text-red-600">{formik.errors.phone}</p>
//               )}
//             </div>
//             <div>
//               <Label htmlFor="birthday" value="Birthday" />
//               <Datepicker
//                 id="birthday"
//                 name="birthday"
//                 selected={formik.values.birthday}
//                 onChange={(date) => formik.setFieldValue("birthday", date)}
//                 onBlur={formik.handleBlur}
//                 className="border border-gray-300 p-2 rounded"
//               />
//               {formik.errors.birthday && formik.touched.birthday && (
//                 <p className="text-red-600">{formik.errors.birthday}</p>
//               )}
//             </div>
//             <div>
//               <Label htmlFor="gender" value="Gender" />
//               <div className="flex gap-4">
//                 <Radio
//                   id="gender-male"
//                   name="gender"
//                   value="true"
//                   checked={formik.values.gender === true}
//                   onChange={() => formik.setFieldValue("gender", true)}
//                 />
//                 <Label htmlFor="gender-male">Nam</Label>
//                 <Radio
//                   id="gender-female"
//                   name="gender"
//                   value="false"
//                   checked={formik.values.gender === false}
//                   onChange={() => formik.setFieldValue("gender", false)}
//                 />
//                 <Label htmlFor="gender-female">Nữ</Label>
//               </div>
//               {formik.errors.gender && formik.touched.gender && (
//                 <p className="text-red-600">{formik.errors.gender}</p>
//               )}
//             </div>
//             <div>
//               <Label htmlFor="role" value="Role" />
//               <Select
//                 id="role"
//                 name="role"
//                 value={formik.values.role}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 color={
//                   formik.errors.role && formik.touched.role
//                     ? "failure"
//                     : "default"
//                 }
//               >
//                 <option value="USER">USER</option>
//                 <option value="ADMIN">ADMIN</option>
//               </Select>
//               {formik.errors.role && formik.touched.role && (
//                 <p className="text-red-600">{formik.errors.role}</p>
//               )}
//             </div>
//             <Button type="submit">Submit</Button>
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

import {
  Button,
  Label,
  Modal,
  TextInput,
  Select,
  Radio,
  // Datepicker,
} from "flowbite-react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { PostDangKy } from "../../redux/Reducers/DangKy/dangKyThunk";
import { useDispatch } from "react-redux";

import React, { useState } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-ZÀ-ỹ\s]*$/,
      "Name cannot contain numbers or special characters"
    )
    .required("Tên không được bỏ trống"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email không được bỏ trống"),
  password: Yup.string().required("Password không được bỏ trống"),
  phone: Yup.string()
    .matches(/^(0|\+84)[1-9][0-9]{8}$/, "Số điện thoại bị sai")
    .required("Điện thoại không được bỏ trống"),
  birthday: Yup.date().required("Ngày sinh không được bỏ trống"),
  gender: Yup.boolean().required("Giới tính không được bỏ trống"),
  // role: Yup.string()
  //   .oneOf(["ADMIN", "USER"], "Invalid role")
  //   .required("Role is required"),
});

export function DangKy({ show, setShow, toggleToDangNhap }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: new Date(),
      gender: true,
      // role: "USER",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const dataDangKy = {
        ...values,
        birthday: values.birthday.toISOString(),
      };
      dispatch(PostDangKy(dataDangKy));
      setShow(false);
    },
  });


  return (
    <Modal show={show} onClose={() => setShow(false)} id="Modal_DangKy">
      <div className="relative bg-gradient-to-b from-cyan-700 to-cyan-950 text-white rounded-3xl p-4">

        {/* nút close tab */}
        <div className="absolute top-7 right-7">
          <button onClick={() => setShow(false)}>
            <i class="fa-solid fa-xmark  text-xl text-cyan-300 hover:text-white bg-cyan-900 hover:bg-cyan-950 px-2.5 py-1 rounded-full duration-500"></i>
          </button>
        </div>
        <div>
          <div className="text-center font-bold text-2xl pb-4 pt-4 uppercase">Đăng ký</div>
          <form
            className="text-center"
            onSubmit={formik.handleSubmit}
          >
            <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* name */}
              <div className="relative z-0 w-full mb-5 group">
                <input type="name" name="name" id="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="" required
                  color={
                    formik.errors.name && formik.touched.name
                      ? "failure"
                      : "default"
                  }
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-cyan-700 focus:border-cyan-500 focus:outline-none focus:ring-0 peer" />

                <label htmlFor="name" value="name" className="peer-focus:font-medium absolute text-sm text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Họ và tên</label>

                {formik.errors.name && formik.touched.name && (
                  <p className="text-cyan-300 text-sm pt-2">{formik.errors.name}</p>
                )}
              </div>

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

              {/* phone */}
              <div className="relative z-0 w-full mb-5 group">
                <input type="phone" name="phone" id="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="" required
                  color={
                    formik.errors.phone && formik.touched.phone
                      ? "failure"
                      : "default"
                  }
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-cyan-800 focus:border-cyan-500 focus:outline-none focus:ring-0 peer" />

                <label htmlFor="phone" value="phone" className="peer-focus:font-medium absolute text-sm text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Số điện thoại</label>

                {formik.errors.phone && formik.touched.phone && (
                  <p className="text-cyan-300 text-sm pt-2">{formik.errors.phone}</p>
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

              {/* sinh nhật - birthday */}
              <div className="z-0 w-full mb-5 group">
                <label htmlFor="birthday" value="Birthday" className="text-sm text-stone-400">Birthday</label>
                <div className="text-stone-400 text-sm">
                  <Datepicker
                    id="birthday"
                    name="birthday"
                    type="birthday"
                    selected={formik.values.birthday}
                    onChange={(date) => formik.setFieldValue("birthday", date)}
                    onBlur={formik.handleBlur}
                    className="pl-0 w-full bg-transparent text-sm text-white border-0 border-b-2 border-cyan-800 focus:border-cyan-500 focus:outline-none focus:ring-0 peer"

                  />
                  {/* <i class="fa-solid fa-calendar text-xl"></i> */}
                </div>

                {formik.errors.birthday && formik.touched.birthday && (
                  <p className="text-cyan-300 text-sm pt-2">{formik.errors.birthday}</p>
                )}
              </div>

              <div className="z-0 w-full mb-5 group">
                <label htmlFor="gender" value="Gender" className="text-sm text-stone-400">Giới tính</label>
                <div className="flex gap-4 mt-3">
                  <Radio
                    id="gender-male"
                    name="gender"
                    value="true"
                    checked={formik.values.gender === true}
                    onChange={() => formik.setFieldValue("gender", true)}
                  />
                  <Label htmlFor="gender-male" className="text-white dark:text-white">Nam</Label>
                  <Radio
                    id="gender-female"
                    name="gender"
                    value="false"
                    checked={formik.values.gender === false}
                    onChange={() => formik.setFieldValue("gender", false)}
                  />
                  <Label htmlFor="gender-female" className="text-white dark:text-white">Nữ</Label>
                </div>
                {formik.errors.gender && formik.touched.gender && (
                  <p className="text-cyan-300 text-sm pt-2">{formik.errors.gender}</p>
                )}
              </div>

            </div>


            {/* <div>
            <Label htmlFor="birthday" value="Birthday" />
            <Datepicker
              id="birthday"
              name="birthday"
              selected={formik.values.birthday}
              onChange={(date) => formik.setFieldValue("birthday", date)}
              onBlur={formik.handleBlur}
              className="border border-gray-300 p-2 rounded"
            />
            {formik.errors.birthday && formik.touched.birthday && (
              <p className="text-red-600">{formik.errors.birthday}</p>
            )}
          </div> */}
            {/* <div>
            <Label htmlFor="role" value="Role" />
            <Select
              id="role"
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color={
                formik.errors.role && formik.touched.role
                  ? "failure"
                  : "default"
              }
            >
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </Select>
            {formik.errors.role && formik.touched.role && (
              <p className="text-red-600">{formik.errors.role}</p>
            )}
          </div> */}


            {/* nút đăng ký */}
            <button type="submit" disabled={formik.isSubmitting} className="bg-cyan-500 text-center hover:bg-cyan-700 duration-500 py-2 px-8 rounded-full">
              Đăng ký
            </button>
          </form>

          <div className="text-center">
            <div className="text-center mt-4">
              <p>
                Đã có tài khoản?{" "}
                <button
                  onClick={() => {
                    setShow(false);
                    toggleToDangNhap();
                  }}
                  className="text-cyan-500 hover:text-cyan-300 font-bold hover:underline duration-500"
                >
                  Đăng Nhập
                </button>
              </p>
            </div>
          </div>

        </div>
      </div>

    </Modal>
  );
}
