import React, { useEffect, useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";

import logo from "assets/image/bomb.png";
import logo2 from "assets/image/bombWhite.png";

import styles from "./AllGames.module.scss";

import GameItems from "components/GameItems/GameItems";

import { useSelector, useDispatch } from "react-redux";
import { setGames } from "store/reducers/games";
import { fetchGamesRedux } from "Api/request/index";

export const AllGames = () => {
  const [genre, setGenre] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGamesRedux(genre));
  }, [dispatch, genre]);

  const gamers = useSelector((state) => state.gamesReducer.games);
  const loading = useSelector((state) => state.gamesReducer.loading);
  const isDarkTheme = useSelector(
    (state) => state.changeImageReducer.isDarkTheme
  );

  const [sortByLetter, setSortByLetter] = useState("");

  const ariaLabel = { "aria-label": "description" };

  

  const ascSort = () => {
    const gamesCopy = [...gamers];

    const sortedGames = gamesCopy.sort((a, b) =>
      a.title > b.title ? 1 : a.title < b.title ? -1 : 0
    );

    dispatch(setGames(sortedGames));
  };

  const descSort = () => {
    const gamesCopy = [...gamers];

    const sortedGames = gamesCopy.sort((a, b) =>
      a.title > b.title ? -1 : a.title < b.title ? 1 : 0
    );

    dispatch(setGames(sortedGames));
  };
useEffect(() => {
    if (sortByLetter === "asc") {
      ascSort();
    } else if (sortByLetter === "desc") {
      descSort();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortByLetter]);
  const [value, setValue] = useState("");

  const filteredGames = gamers.filter((game) => {
    return game.title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className={styles.allGames_wrapper}>
      <h2 className={styles.allGames_wrapper__title}>
        360 Free-to-play MMO games found in our list! Please note we are also
        including Multiplayer Online Games with MMO elements.
      </h2>
      <div className={styles.games__button}>
        <FormControl
          className="Category"
          sx={{ m: 1, minWidth: 120 }}
          size="small"
        >
          <InputLabel className="form__label" id="demo-select-small">
            Category
          </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={genre}
            label="Category"
            onChange={(e) => setGenre(e.target.value)}
          >
            <MenuItem className="form_menu" value="">
              All{" "}
            </MenuItem>
            <MenuItem value="shooter">Shooter</MenuItem>
            <MenuItem value="mmorpg">MMORPG</MenuItem>
            <MenuItem value="pvp">PVP</MenuItem>
            <MenuItem value="moba">Moba</MenuItem>
            <MenuItem value="anime">Anime</MenuItem>
            <MenuItem value="fighting">Fighting</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          className="Category"
          sx={{ m: 1, minWidth: 120 }}
          size="small"
        >
          <InputLabel className="form__label" id="demo-select-small">
            Sort By
          </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={sortByLetter}
            label="Sort By"
            onChange={(e) => setSortByLetter(e.target.value)}
          >
            <MenuItem value="">Default </MenuItem>
            <MenuItem value="asc">
              {" "}
              <KeyboardDoubleArrowDownRoundedIcon />{" "}
              <span style={{ marginLeft: "10px" }}>A-Z</span>
            </MenuItem>
            <MenuItem value="desc">
              <KeyboardDoubleArrowUpRoundedIcon />
              <span style={{ marginLeft: "10px" }}>Z-A</span>
            </MenuItem>
          </Select>
        </FormControl>

        <div>
          <Input
            className="form__label"
            placeholder="Search..."
            inputProps={ariaLabel}
            onChange={(event) => setValue(event.target.value)}
          />
          <SearchIcon />
        </div>
      </div>

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
          {filteredGames.map((game) => {
            return <GameItems game={game} key={game.id} />;
          })}
        </div>
      )}
    </div>
  );
};
