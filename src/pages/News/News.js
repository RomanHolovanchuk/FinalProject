import * as React from "react";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import styles from "./News.module.scss";
import { fetchNews } from "../../Api/request";

export const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const res = fetchNews();
    res.then((data) => setNews(data));
  }, []);
  return (
    <div className={styles.news_allPage}>
      {" "}
      <h1>Latest News</h1>
      <div className={styles.postWrapper}>
        {news.map((news) => {
          return (
            <div className={styles.bandl} key={news.id}>
              <img
                className={styles.image_main}
                src={news.main_image}
                alt="foto"
              />
              <div className={styles.text_container}>
                {" "}
                <h3 className={styles.news_title}>{news.title}</h3>
                <div className={styles.description}>
                  {news.short_description}
                  <div className={styles.news_comment}>By Anthony Jones - 12 hours ago</div>
                </div>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
