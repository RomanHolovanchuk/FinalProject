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
        params: { category: "anime" },
      })
      .then((res) => setGames(res.data));
  }, []);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.wrapper__title}>POPULAR TAGS: Anime</h2>
      <div className={styles.postWrapper}>
        {games.map((anime) => {
          return <GameItems game={anime} key={anime.id} />;
        })}
      </div>
    </div>
  );
};

export default Anime;
