import React,{useState, useEffect} from 'react'
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";

function Filter() {

    const ariaLabel = { "aria-label": "description" };
    const [value, setValue] = useState("");
    const filteredGames = games.filter((game) => {
    return game.title.toLowerCase().includes(value.toLowerCase());
  });
  return (
    <div>
          <Input
            className='form__label'
            placeholder="Search..."
            inputProps={ariaLabel}
            onChange={(event) => setValue(event.target.value)}
          />
          <SearchIcon />
        </div>
  )
}

export default Filter