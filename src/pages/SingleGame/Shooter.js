import React from "react";
import { useEffect, useState } from "react";
import { instance } from "../../Api";
import GameItems from "../../components/GameItems/GameItems";
import styles from "./SingleGames.module.scss";

export const Shooter = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    instance
      .get("/games", {
        params: { category: "shooter" },
      })
      .then((res) => setGames(res.data));
  }, []);
  return (
      <div className={styles.wrapper}>
      <h2 className={styles.wrapper__title}>POPULAR TAGS: Shooter</h2>
      <div className={styles.postWrapper}>
        {games.map((shooter) => {
          return <GameItems game={shooter} key={shooter.id} />;
        })}
      </div>
    </div>
  );
};

export default Shooter;
