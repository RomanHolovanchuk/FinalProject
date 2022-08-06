import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../Api";
import { Link } from "react-router-dom";

export const Search = () => {
  const { id } = useParams();
  const [games, setGames] = useState([]);
  useEffect(() => {
    instance
      .get("/games", {
        params: { id },
        headers: {
          "X-RapidAPI-Key":
            "61c15492fbmshdc35b3d5be6badep143eabjsndfe9b60370e4",
          "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
        },
      })
      .then((res) => setGames(res.data));
  }, [id]);

  const [value, setValue] = useState("");
  const filteredGames = games.filter((game) => {
    return game.title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            placeholder="Search..."
            onChange={(event) => setValue(event.target.value)}
          />
        </form>
      </div>

      <div>
        {filteredGames.map((games) => {
          return (
            <div key={games.id}>
              <Link to={`${games.id}`} key={games.id}>
                <img src={games.thumbnail} alt="foto" />

                <h3>{games.title}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
