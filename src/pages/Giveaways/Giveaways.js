import React from "react";
import { useEffect, useState } from "react";
import { instance } from "../../Api";
import styles from "./Giveaways.module.scss";
import Slider from "@mui/material/Slider";
import { Link } from "react-router-dom";

// import { Progress } from 'semantic-ui-react'

export const Giveaways = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    instance.get("/giveaways", {}).then((res) => setGames(res.data));
  }, []);



  return (
    <div>
      Giveaways All giveaways are first come, first served, so join now and
      claim your loot! Plus it's free!
      <div className={styles.postWrapper}>
        {games.map((giveaways) => {
          return (

<div className={styles.bandl}>
      <Link className={styles.link} to='/Giveaways'>
        <img className={styles.image_main} src={giveaways.thumbnail} alt="foto" />
        <div className={styles.text_container}>
          <h3 className={styles.title}>{giveaways.title}</h3>
          <div className={styles.description}>{giveaways.short_description}</div>
          <div className={styles.bottom_object}>
            <div className={styles.genre}>{giveaways.genre} </div>

            <div className={styles.platform}>{giveaways.platform}</div>
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
      </Link>
      {/* <Progress percent={parseInt(giveaways.keys_left)} progress /> */}

    </div>




            

              
           
          );
        })}
      </div>
    </div>
  );
};

export default Giveaways;
