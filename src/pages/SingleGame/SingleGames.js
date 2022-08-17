import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../Api";
import Button from "@mui/material/Button";

import styles from "./SingleGames.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { addToFav } from "store/reducers/favorite";
import { fetchSingleGame } from "../../Api/request/index";

export const SingleGames = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchSingleGame());
  // }, []);

  // const game = useSelector((state) => state.singleGameReducer.game);

  const favoriteGames = useSelector(
    (state) => state.favoriteGamesReducer.favoriteGames
  );


  const { id } = useParams();
  const [game, setGames] = useState({});
  useEffect(() => {
    instance
      .get("/game", {
        params: { id },
      })
      .then((res) => setGames(res.data));
  }, [id]);

  const addToCartHandler = () => {
    
   const findItem = favoriteGames.find((item) => item.id===game.id)
   if (!findItem) dispatch(addToFav(game));
    };
  return (
    <div className={styles.single_page__wrapper}>
      <h2 style={{ textAlign: "center" }}> {game.title}</h2>
      <div className={styles.single_header}>
        <div className={styles.single__saidbar}>
          <img className={styles.image_main} src={game.thumbnail} alt="foto" />
          <Button
            variant="outlined"
            href={game.game_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            PLAY NOW
          </Button>
          <Button className={styles.favoriteIcon} onClick={addToCartHandler}  variant="outlined">
            Add To Favorite
          </Button>
        </div>

        <div className={styles.single_left}>
          <div className={styles.prev_image}>
            {game.screenshots &&
              game.screenshots.map((item) => (
                <img
                  className={styles.single_image}
                  src={item.image}
                  key={item.id}
                  alt="foto"
                />
              ))}
          </div>
          <div className={styles.description}>
            {game.description?.replace('<p style="text-align: justify;">', "")}
          </div>
        </div>
      </div>

      <div className={styles.single_footer}>
        <h2> Additional Information</h2>
        <div className={styles.info}>
          <div className={styles.info__request}>
            <h3>
              <p>Title</p> {game.title}
            </h3>

            <div>
              <p>Developer</p> {game.developer}
            </div>

            <div>
              <p>Publisher</p> {game.publisher}
            </div>
            <div>
              <p>Release Date</p> {game.release_date}
            </div>
            <div>
              <p>Genre</p> {game.genre}
            </div>
            <div>
              <p>Platform</p> {game.platform}
            </div>
          </div>
        </div>

        <div className={styles.system_requir__wraper}>
          <h2> Minimum System Requirements (Windows)</h2>
          <div className={styles.system_requir__info}>
            <div>
              <p>OS</p>
              {game.minimum_system_requirements?.os
                ? game.minimum_system_requirements?.os
                : "Any"}
            </div>

            <div>
              <p>Processor</p>{" "}
              {game.minimum_system_requirements?.processor
                ? game.minimum_system_requirements?.processor
                : "Any"}
            </div>
            <div>
              <p>Memory</p>{" "}
              {game.minimum_system_requirements?.memory
                ? game.minimum_system_requirements?.memory
                : "Any"}
            </div>
            <div>
              <p>Graphics</p>{" "}
              {game.minimum_system_requirements?.graphics
                ? game.minimum_system_requirements?.graphics
                : "Any"}
            </div>
            <div>
              <p>Storage</p>{" "}
              {game.minimum_system_requirements?.storage
                ? game.minimum_system_requirements?.storage
                : "Any"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGames;
