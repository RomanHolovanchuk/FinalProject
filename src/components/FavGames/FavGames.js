import React from "react";
import { useSelector } from "react-redux";
import logo from "assets/image/bomb.png";
import logo2 from "assets/image/bombWhite.png";
import GameItems from "components/GameItems/GameItems";

function FavGames() {
  const favoriteGames = useSelector(
    (state) => state.favoriteGamesReducer.favoriteGames
  );
  const loading = useSelector((state) => state.favoriteGamesReducer.loading);
  const isDarkTheme = useSelector(
    (state) => state.changeImageReducer.isDarkTheme
  );

  // useEffect(() => {
  //   const FavGames = localStorage.getItem('fav');
  //   if (FavGames) dispatch(addToFav(FavGames));
  // }, []);

  return (
    <div className="wrapper">
      <h2 className="wrapper__title">My Favorite Games</h2>
      <div className="postWrapper">
        {loading ? (
          <div className="skeleton">
            {!isDarkTheme ? (
              <img src={logo} className="Preview" alt="logo" />
            ) : (
              <img src={logo2} className="Preview" alt="logo" />
            )}
          </div>
        ) : (
          <div className="AllPage postWrapper">
            {favoriteGames.map((item) => {
              return <GameItems game={item} key={item.id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default FavGames;
