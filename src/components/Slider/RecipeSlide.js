import React from 'react';
import { Link } from "react-router-dom";
import styles from './RecipeSlide.module.scss';

function RecipeSlide({ recipe}) {
  return (
    <div className={styles.slideWrapper}>
      <Link className={styles.link} to={`${recipe.id}`}>
      <img src={recipe.thumbnail} alt="" />
       </Link>
    </div>
  );
}

export default RecipeSlide;