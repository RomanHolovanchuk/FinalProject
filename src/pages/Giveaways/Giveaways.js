import React from "react";
import { useEffect, useState } from "react";
import { instance } from "../../Api";
import styles from "./Giveaways.module.scss";
import Slider from "@mui/material/Slider";
import { fetchGiveAways } from "Api/request";
import { useSelector, useDispatch } from "react-redux";
import logo from "assets/image/bomb.png";
import logo2 from "assets/image/bombWhite.png";

export const Giveaways = () => {
  // const [games, setGames] = useState([]);
  // useEffect(() => {
  //   instance.get("/giveaways", {}).then((res) => setGames(res.data));
  // }, []);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGiveAways());
  }, []);

  const myGiveAways = useSelector((state) => state.giveAwaysReducer.giveAways);
  const loading = useSelector((state) => state.giveAwaysReducer.loading);
  const isDarkTheme = useSelector(
    (state) => state.changeImageReducer.isDarkTheme
  );

  return (
    <div className={styles.giveAways}>
      <h2 className="wrapper__title">
        Giveaways All giveaways are first come, first served, so join now and
        claim your loot! Plus it's free!
      </h2>

      

      {loading ? (
        <div className="skeleton">
          {!isDarkTheme ? (
            <img src={logo} className="Preview" alt="logo" />
          ) : (
            <img src={logo2} className="Preview" alt="logo" />
          )}
        </div>
      ) : (
        <div className={styles.postWrapper}>
        {myGiveAways.map((giveaways) => {
          return (
            <div className={styles.bandl} key={giveaways.id}>
              <img
                className={styles.image_main}
                src={giveaways.thumbnail}
                alt="foto"
              />
              <div className={styles.text_container}>
                <h3 className={styles.title}>{giveaways.title}</h3>
                <div className={styles.description}>
                  {giveaways.short_description}
                </div>

                <div className={styles.bottom_object}>
                  Keys left:
                  <Slider
                    disabled
                    defaultValue={parseInt(giveaways.keys_left)}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                  />
                  <div className={styles.genre}>{giveaways.keys_left} </div>
                </div>
              </div>
            </div>
          );
        })}


      </div>
      )}
    </div>
  );
};

export default Giveaways;
