import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import RecipeSlide from './RecipeSlide';

import { fetchGames } from "../../Api/request";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const settings_1 = {
  className: "center",
  // centerMode: true,
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
const [recipes, setRecipe] = useState([]);

useEffect (() => {
  const res = fetchGames();
  res.then((data) => setRecipe(data));
}, []);
    return (
      <div >
      <Slider {...settings_1}>
        {recipes.map((item) => (
          <RecipeSlide key={item.id} recipe={item} renderTitle />
        ))}
      </Slider>

     
    </div>
  );
}

export default SimpleSlider;