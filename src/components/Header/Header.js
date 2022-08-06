import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import Form from "../FormLoginAutorization/Form";
import "./Header.scss";
import logo from "../../assets/image/bomb.png";

import { useSelector, useDispatch } from 'react-redux';
import  Auth from '../FormLoginAutorization/Authorization/Auth'
import { logOut, logIn } from 'store/reducers/auth';



export const Header = () => {
  const [open, setOpen] = useState(false);

  const username = useSelector((state) => state.authReducer.username);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    if (token && username) dispatch(logIn({ username: username }));

    if (!token && !username) dispatch(logOut());
  }, [isLoggedIn]);

  const dispatch = useDispatch();

  return (
    <div className="header__wraper">
      <div className="image"></div>
      <header className="header">
        {/* <div className="logo"> </div> */}
        <img src={logo} className="logo" alt="logo" />
        <ul className="header__ul_title">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/all">AllGames</Link>
          </li>
          <li>
            <Link to="/Giveaways">Giveaways</Link>
          </li>
        </ul>
        <img src={logo} className="logo" alt="logo" />
        <DarkMode />
        {/* <Form /> */}

        {username ? <h2>Hello, {username}</h2> : <h2> </h2>}

{!isLoggedIn ? (
  <button onClick={() => setOpen(true)}> 
  <Link to='/test'> 
  Log In
   </Link>
   </button>
) : (
  <button onClick={() => dispatch(logOut())}><Link to='/'> Log Out </Link></button>
)}

{/* {open && <Auth setOpen={setOpen} />} */}
        
      </header>
      <div className="header__tags">
        <span> POPULAR TAGS: </span>
        <ul className="header__ul_tags">
          <li>
            <Link to="/anime">Anime</Link>
          </li>
          <li>
            <Link to="/shooter">Shooter</Link>
          </li>
          <li>
            <Link to="/MOBA">MOBA</Link>
          </li>
          <li>
            <Link to="/browser">Browser</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
