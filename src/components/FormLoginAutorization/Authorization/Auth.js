import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import styles from "./Authorization.module.scss";
import register from "../../../assets/image/register.jpg";
import TextField from "@mui/material/TextField";

import { useDispatch } from "react-redux";
import { logIn } from "store/reducers/auth";



function Auth({ setOpen }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .typeError("Not is string")
      .required("Enter user name"),
    password: yup
      .string()
      .typeError("Not is string")
      .required("Enter password"),
  });
  return (
    <div className={styles.form_wrapper}>
      <div className={styles.register_image}>
        <img src={register} alt="register" />
      </div>

      <div className={styles.register_leftBlock}>
        <h2 className={styles.register_title}>Log in to MMOBomb</h2>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validateOnBlur
          onSubmit={(values, actions) => {
            console.log(values);

            if (
              values.username === process.env.REACT_APP_LOGIN &&
              values.password === process.env.REACT_APP_PASSWORD
            ) {
              dispatch(logIn({ username: values.username }));
              navigate("/", { replace: true });
            } else alert ("Incorrect login or password")
          }}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <TextField
                  className={styles.register_tabl}
                  id="outlined-basic1"
                  label="Username"
                  variant="outlined"
                  name="username"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  size="small"
                />
                 {touched.username && errors.username && (
                <p className={styles.errors}> {errors.username}</p>
              )}
              </div>
             

              <div className={styles.register_tabl__password}>
                <div className={styles.field}>
                  <TextField
                    id="outlined-basic3"
                    label="Password"
                    variant="outlined"
                    className={styles.register_tabl2}
                    name="password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    size="small"
                  />
                </div>
                {touched.password && errors.password && (
                  <p className={styles.errors}> {errors.password}</p>
                )}
              </div>

              <button type="submit" className={styles.submit_btn}>
                Log In
              </button>
            </form>
          )}
        </Formik>
        <div className={styles.register_semi__text}>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </div>
      </div>
    </div>
  );
}

export default Auth;
