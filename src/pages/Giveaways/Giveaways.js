import React from "react";
import { useEffect } from "react";
import styles from "./Giveaways.module.scss";
import { fetchGiveAways } from "Api/request";
import { useSelector, useDispatch } from "react-redux";
import logo from "assets/image/bomb.png";
import logo2 from "assets/image/bombWhite.png";

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

export const Giveaways = () => {
  // const [games, setGames] = useState([]);
  // useEffect(() => {
  //   instance.get("/giveaways", {}).then((res) => setGames(res.data));
  // }, []);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGiveAways());
  }, [dispatch]);

  const myGiveAways = useSelector((state) => state.giveAwaysReducer.giveAways);
  const loading = useSelector((state) => state.giveAwaysReducer.loading);
  const isDarkTheme = useSelector(
    (state) => state.changeImageReducer.isDarkTheme
  );

  return (
    <div className='wrapper'>
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
                  
                  {/* <Slider
                    disabled
                    defaultValue={parseInt(giveaways.keys_left)}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                  /> */}
                  <div className={styles.genre}>        <BorderLinearProgress variant="determinate" value={parseInt(giveaways.keys_left)} />
 {giveaways.keys_left}  </div>
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
