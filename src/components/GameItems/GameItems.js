import * as React from "react";

import styles from "./GameItems.module.scss";

import { Link } from "react-router-dom";

const GameItems = ({ game }) => {
  return (
    <div className={styles.bandl}>
      <Link className={styles.link} to={`${game.id}`}>
        <img className={styles.image_main} src={game.thumbnail} alt="foto" />
        <div className={styles.text_container}>
          <h3 className={styles.title}>{game.title}</h3>
          <div className={styles.description}>{game.short_description}</div>
          <div className={styles.bottom_object}>
            <div className={styles.genre}>{game.genre} </div>

            <div className={styles.platform}>{game.platform}</div>

            
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GameItems;
