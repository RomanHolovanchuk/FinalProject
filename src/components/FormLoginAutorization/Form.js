import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";

function Form() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={handleChange}
        >
          <MenuItem>
            {" "}
            <Link to="/test">Log In</Link>{" "}
          </MenuItem>
          <MenuItem> <Link to="/test">Registration</Link></MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Form;
