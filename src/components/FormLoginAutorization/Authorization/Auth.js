import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import styles from "./Authorization.module.scss";
import register from "../../../assets/image/register.jpg";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logIn } from "store/reducers/auth";

function Auth({ setOpen }) {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(logIn({ username: username }));

    setUsername("");

    // setOpen(false);
  };

 
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .typeError("Not is string")
      .required("Enter nick name"),
    password: yup
      .string()
      .typeError("Not is string")
      .required("Enter password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "The passwords do not match")
      .required("Enter confirm password"),
    email: yup.string().email("wrong email").required("Enter email"),
  });
  return (
    <div className={styles.form_wrapper}>
      <div className={styles.register_image}>
        <img src={register} className={styles.image} alt="" />
      </div>
      <div className={styles.register_leftBlock}>
        <h2 className={styles.register_title}>Create My Account!</h2>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validateOnBlur
          onSubmit={handleSubmit}
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
            <div className={styles.form}>
              <div className={styles.field}>
                <TextField
                  className={styles.register_tabl}
                  id="outlined-basic1"
                  label="Username"
                  variant="outlined"
                  name="username"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  onBlur={handleBlur}
                  value={username}
                />
              </div>
              {touched.username && errors.username && (
                <p className={styles.errors}> {errors.username}</p>
              )}

              {/* <div className={styles.register_tabl__password}>
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
                  />
                </div>
                {touched.password && errors.password && (
                  <p className={styles.errors}> {errors.password}</p>
                )}
              </div> */}

              <button type="submit" className={styles.submit_btn}>
                {/* <Link to='/'> */}
                Log In
                {/* </Link> */}
               
              </button>
              {username}
              <div className={styles.register_semi__text}>
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </div>
            </div>
          )}
        </Formik>
        {/* <button onClick={() => setOpen(false)}>Close</button> */}
      </div>
    </div>
  );
}

export default Auth;


{/* <form onSubmit={handleSubmit} className={styles.form_wrapper}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="your nickname"
        />

        <button onClick={() => setOpen(false)} type="submit">
          <Link to='/'>
               Log In
          </Link>
          </button>
      </form> */}