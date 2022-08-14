import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import Form from "../FormLoginAutorization/Form";
import "./Header.scss";
import logo from "../../assets/image/bomb.png";
import logo2 from "assets/image/bombWhite.png";
import { useSelector, useDispatch } from "react-redux";
import Auth from "../FormLoginAutorization/Authorization/Auth";
import { logOut, logIn } from "store/reducers/auth";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Burger from "components/Burger/Burger";


export const Header = () => {

const items = [{value: "Home", href:"/"}, {value: "News", href:"/news"}, {value: "AllGames", href:"/all"}, {value: "Giveaways", href:"/Giveaways"} ]

const [menuActive, setMenuActive] = useState(false)
  const [open, setOpen] = useState(false);

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
      
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span></span>
        </div>
      
      <Burger active={menuActive} setMenuActive={setMenuActive} header={'Бургер меню'} items={items} key={items.id}/>
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
        {!isDarkTheme ? (
          <img src={logo} className="logo" alt="logo" />
        ) : (
          <img src={logo2} className="logo" alt="logo" />
        )}
        <DarkMode />
        {/* <Form /> */}

        <div className='header_right'>
        <Link to='/FavGames'> <span className='favorite'>My Favorite</span>  <FavoriteIcon sx={{ color:'red', margin: '0 10px', cursor: 'pointer' }} fontSize="small" /> </Link>
        {username ? <h2>Hello, {username}</h2> : <h2> </h2>}

        {!isLoggedIn ? (
          <button className='login' onClick={() => setOpen(true)}>
            <Link to="/test">Log In</Link>
          </button>
        ) : (
          <button onClick={() => dispatch(logOut())}>
            <Link to="/"> Log Out </Link>
          </button>
        )}
        </div>
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
    </nav>
  );
};
