import React from 'react'
import Auth from '../../components/FormLoginAutorization/Authorization/Auth'
// import ValidationTextFields from '../../components/FormLoginAutorization/Authorization/test'
// import SimpleSlider from '../../components/Slider/SimpleSlider'
// import Anime from '../SingleGame/Anime'
// import ItemGames from '../../components/GameItems/GameItems'
// import { AllGamesRedux } from 'pages/AllGames/AllGamesRedux'

const Test = () => {
  return (
    <div>
      <Auth />
     {/* <ValidationTextFields /> */}
     {/* <AllGamesRedux /> */}
    </div>
    // <div><ItemGames /></div>
  )
}

export default Test










// News

// import * as React from "react";
// import { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// import styles from "./News.module.scss";
// import { fetchNews } from "../../Api/request";

// const url = "https://mmo-games.p.rapidapi.com/latestnews";

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "61c15492fbmshdc35b3d5be6badep143eabjsndfe9b60370e4",
//     "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
//   },
// };

// export const News = (props) => {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     fetch(url, options)
//       .then((response) => response.json())
//       .then((response) => setNews(response))
//       .catch((err) => console.error(err));
//   }, []);
//   return (
//     <div>
//       {" "}
//       <h1>Latest News</h1>
//       <div className={styles.postWrapper}>
//         {news.map((news) => {
//           return (
//             <div className={styles.bandl} key={news.id}>
//               <img
//                 className={styles.image_main}
//                 src={news.thumbnail}
//                 alt="foto"
//               />
//               <div className={styles.text_container}>
//                 {" "}
//                 <h3 className="title">{news.title}</h3>
//                 <div className={styles.description}>
//                   {news.short_description}
//                 </div>
//                 <div className={styles.bottom_object}>
//                   <div className={styles.genre}>{news.genre} </div>
//                   <div className={styles.platform}>{news.platform}</div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };












/* <select onChange={(e) => setSortByLetter(e.target.value)}>
<option value="">Default</option>
<option value="asc">A-Z</option>
<option value="desc">Z-A</option>
</select> */

 // useEffect(() => {
  //   instance
  //     .get("/games", {
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "61c15492fbmshdc35b3d5be6badep143eabjsndfe9b60370e4",
  //         "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
  //       },
  //       params: genre && {
  //         category: genre,
  //       },
  //     })
  //     .then((res) => setGames(res.data));
  // }, [genre]);