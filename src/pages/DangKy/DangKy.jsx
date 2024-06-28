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
  Datepicker,
} from "flowbite-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "react-datepicker/dist/react-datepicker.css";
import { PostDangKy } from "../../redux/Reducers/DangKy/dangKyThunk";
import { useDispatch } from "react-redux";

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-ZÀ-ỹ\s]*$/,
      "Name cannot contain numbers or special characters"
    )
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  phone: Yup.string()
    .matches(/^(0|\+84)[1-9][0-9]{8}$/, "Invalid phone number format")
    .required("Phone number is required"),
  birthday: Yup.date().required("Birthday is required"),
  gender: Yup.boolean().required("Gender is required"),
  role: Yup.string()
    .oneOf(["ADMIN", "USER"], "Invalid role")
    .required("Role is required"),
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
      role: "USER",
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
    <Modal show={show} onClose={() => setShow(false)}>
      <Modal.Header>Đăng ký</Modal.Header>
      <Modal.Body>
        <form
          className="flex max-w-md flex-col gap-4"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <Label htmlFor="name" value="Name" />
            <TextInput
              id="name"
              name="name"
              placeholder="John Doe"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color={
                formik.errors.name && formik.touched.name
                  ? "failure"
                  : "default"
              }
            />
            {formik.errors.name && formik.touched.name && (
              <p className="text-red-600">{formik.errors.name}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email" value="Email" />
            <TextInput
              id="email"
              name="email"
              type="email"
              placeholder="name@flowbite.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color={
                formik.errors.email && formik.touched.email
                  ? "failure"
                  : "default"
              }
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-600">{formik.errors.email}</p>
            )}
          </div>
          <div>
            <Label htmlFor="password" value="Password" />
            <TextInput
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color={
                formik.errors.password && formik.touched.password
                  ? "failure"
                  : "default"
              }
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-600">{formik.errors.password}</p>
            )}
          </div>
          <div>
            <Label htmlFor="phone" value="Phone" />
            <TextInput
              id="phone"
              name="phone"
              placeholder="0123456789"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color={
                formik.errors.phone && formik.touched.phone
                  ? "failure"
                  : "default"
              }
            />
            {formik.errors.phone && formik.touched.phone && (
              <p className="text-red-600">{formik.errors.phone}</p>
            )}
          </div>
          <div>
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
          </div>
          <div>
            <Label htmlFor="gender" value="Gender" />
            <div className="flex gap-4">
              <Radio
                id="gender-male"
                name="gender"
                value="true"
                checked={formik.values.gender === true}
                onChange={() => formik.setFieldValue("gender", true)}
              />
              <Label htmlFor="gender-male">Nam</Label>
              <Radio
                id="gender-female"
                name="gender"
                value="false"
                checked={formik.values.gender === false}
                onChange={() => formik.setFieldValue("gender", false)}
              />
              <Label htmlFor="gender-female">Nữ</Label>
            </div>
            {formik.errors.gender && formik.touched.gender && (
              <p className="text-red-600">{formik.errors.gender}</p>
            )}
          </div>
          <div>
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
          </div>
          <Button type="submit">Submit</Button>
        </form>
        <div className="text-center mt-4">
          <p>
            Đã có tài khoản?{" "}
            <button
              onClick={() => {
                setShow(false);
                toggleToDangNhap();
              }}
              className="text-blue-600 hover:underline"
            >
              Đăng Nhập
            </button>
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
