import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import "./Header.scss";
import logo from "../../assets/image/bomb.png";
import logo2 from "assets/image/bombWhite.png";
import { useSelector, useDispatch } from "react-redux";
import { logOut, logIn } from "store/reducers/auth";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Burger from "components/Burger/Burger";

import Hamburger from "hamburger-react";

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const username = useSelector((state) => state.authReducer.username);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const isDarkTheme = useSelector(
    (state) => state.changeImageReducer.isDarkTheme
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    if (token && username) dispatch(logIn({ username: username }));

    if (!token && !username) dispatch(logOut());
  }, [isLoggedIn]);

  const dispatch = useDispatch();

  return (
    <nav className="header__wraper">
      <div className="burger-btn" >
      <Hamburger size={20} color="currentColor" toggled={menuActive} toggle={setMenuActive} />
      
      </div>
      <Burger
        active={menuActive}
        setMenuActive={setMenuActive}
        header={"MMOBOMB"}
      />
      <header className="header">
        {!isDarkTheme ? (
          <img src={logo} className="logo first" alt="logo" />
        ) : (
          <img src={logo2} className="logo" alt="logo" />
        )}

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
        {/* {!isDarkTheme ? (
          <img src={logo} className="logo" alt="logo" />
        ) : (
          <img src={logo2} className="logo" alt="logo" />
        )} */}

        <div className="header_right">
          <DarkMode />
          {isLoggedIn ? (
            <Link to="/FavGames" className="favorite">
              <span>My Favorite</span>
              <FavoriteIcon
                sx={{ color: "pink", cursor: "pointer" }}
                fontSize="small"
              />
            </Link>
          ) : null}
          {username ? (
            <h3>
              <span className="header_hello">Hello,</span> {username}
            </h3>
          ) : (
            <h3> </h3>
          )}

          {!isLoggedIn ? (
            <Link className="login" to="/authorization">
              Log In
            </Link>
          ) : (
            <div onClick={() => dispatch(logOut())}>
              <Link className="close" to="/">
                {" "}
                X{" "}
              </Link>
            </div>
          )}
        </div>
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
    </nav>
  );
};
