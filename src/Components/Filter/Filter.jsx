import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./Filter.css";

const Filter = ({ type, setType }) => {
  return (
    <div>
      <FormControl id="filter">
        <FormLabel id="demo-radio-buttons-group-label">Filter</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel
            value="Icecream"
            control={<Radio />}
            label="Icecreams"
          />
          <FormControlLabel
            value="Milkshake"
            control={<Radio />}
            label="Milkshakes"
          />
          <FormControlLabel
            value="Cupcake"
            control={<Radio />}
            label="Cupcakes"
          />
          <FormControlLabel value="Donut" control={<Radio />} label="Donuts" />

          <FormControlLabel value="all" control={<Radio />} label="All menu" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Filter;
