import React from "react";
import { useEffect } from "react";
import GameItems from "../../components/GameItems/GameItems";
import styles from "./TagsPage.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { fetchTagsGames } from "../../Api/request/index";
import logo from "assets/image/bomb.png";
import logo2 from "assets/image/bombWhite.png";

function TagsPage({ category, title, platform }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTagsGames({ category, platform }));
  }, [dispatch, category, platform]);

  const gamers = useSelector((state) => state.tagsReducer.games);
  const loading = useSelector((state) => state.tagsReducer.loading);
  const isDarkTheme = useSelector(
    (state) => state.changeImageReducer.isDarkTheme
  );
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.wrapper__title}>{title}</h2>
      <div className={styles.postWrapper}>
        {loading ? (
          <div className={styles.skeleton}>
            {!isDarkTheme ? (
              <img src={logo} className="Preview" alt="logo" />
            ) : (
              <img src={logo2} className="Preview" alt="logo" />
            )}
          </div>
        ) : (
          <div className={styles.postWrapper}>
            {gamers.map((item) => {
              return <GameItems game={item} key={item.id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default TagsPage;
