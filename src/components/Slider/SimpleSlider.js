import React, { useEffect } from "react";
import Slider from "react-slick";
import RecipeSlide from "./RecipeSlide";
import { useSelector, useDispatch } from "react-redux";
// import { fetchGames } from "../../Api/request";
import logo from "assets/image/bomb.png";
import logo2 from "assets/image/bombWhite.png";
import { fetchGamesRedux } from "../../Api/request/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings_1 = {
  className: "center",
  centerPadding: "0px",

  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const SimpleSlider = () => {
 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGamesRedux());
  }, [dispatch]);

  const gamers = useSelector((state) => state.gamesReducer.games);
    const loading = useSelector((state) => state.gamesReducer.loading);
  const isDarkTheme = useSelector(
    (state) => state.changeImageReducer.isDarkTheme
  );
 


  return (
    <div>
{loading ? (
  <div className='skeleton'>
  {!isDarkTheme ? (
    <img src={logo} className="Preview" alt="logo" />
  ) : (
    <img src={logo2} className="Preview" alt="logo" />
  )}
</div>
) : (
  <Slider {...settings_1}>
        {gamers.map((item) => (
          <RecipeSlide key={item.id} recipe={item} renderTitle />
        ))}
      </Slider>
)}
      
    </div>
  );
};

export default SimpleSlider;
