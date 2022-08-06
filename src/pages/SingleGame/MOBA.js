import React from "react";
import { useEffect, useState } from "react";
import { instance } from "../../Api";
import GameItems from "../../components/GameItems/GameItems";
import styles from "./SingleGames.module.scss";

export const Anime = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    instance
      .get("/games", {
        params: { category: "moba" },
      })
      .then((res) => setGames(res.data));
  }, []);
  return (

<div className={styles.wrapper}>
      <h2 className={styles.wrapper__title}>POPULAR TAGS: MOBA</h2>      
      <div className={styles.postWrapper}>
        {games.map((moba) => {
          return <GameItems game={moba} key={moba.id} />;
        })}
      </div>
    </div>
  );
};

export default Anime;
