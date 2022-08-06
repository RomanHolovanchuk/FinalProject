import React from "react";
import { useEffect, useState } from "react";
import { instance } from "../../Api";
import GameItems from "../../components/GameItems/GameItems";
import styles from "./SingleGames.module.scss";

export const Browser = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    instance
      .get("/games", {
        params: { platform: "browser" },
      })
      .then((res) => setGames(res.data));
  }, []);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.wrapper__title}>79 Free-to-play browser games found in our list!</h2>
      <div className={styles.postWrapper}>
        {games.map((browser) => {
          return <GameItems game={browser} key={browser.id} />;
        })}
      </div>
    </div>
  );
};

export default Browser;
