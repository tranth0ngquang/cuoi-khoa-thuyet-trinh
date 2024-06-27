"use client";

import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
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

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export function DangNhap() {
  const [openModal, setOpenModal] = useState(false);
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
        pending: "Loading...",
        success: "Logged in successfully!",
        error: "Login failed. Please check your password or email.",
      });

      promise
        .then((response) => {
          // Xử lý khi đăng nhập thành công
          setOpenModal(false);
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.content.user)
          );
          localStorage.setItem("token", response.data.content.token);
          dispatch(setStateLogin());
          if (response.data.content.user.role === "ADMIN") {
            dispatch(setIsAdmin());
          }
        })
        .catch((error) => {
          console.error("Login error:", error);
          // Xử lý khi đăng nhập thất bại
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Đăng nhập</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Đăng nhập</Modal.Header>
        <Modal.Body>
          <form
            className="flex max-w-md flex-col gap-4"
            onSubmit={formik.handleSubmit}
          >
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
                placeholder="Your password"
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
            <Button type="submit" disabled={formik.isSubmitting}>
              Submit
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
