import * as React from "react";
import { useEffect } from "react";
import styles from "./News.module.scss";
import { fetchNewsRedux } from "Api/request";
import { useSelector, useDispatch } from "react-redux";
import logo from "assets/image/bomb.png";
import logo2 from "assets/image/bombWhite.png";

export const News = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsRedux());
  }, []);

  const myNews = useSelector((state) => state.newsReducer.news);
  const loading = useSelector((state) => state.newsReducer.loading);
  const isDarkTheme = useSelector(
    (state) => state.changeImageReducer.isDarkTheme
  );
  return (
    <div className={styles.news_allPage}>
      {" "}
      <h1>Latest News</h1>
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
          {myNews.map((news) => {
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
                    <div className={styles.news_comment}>
                      By Anthony Jones - 12 hours ago
                    </div>
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
