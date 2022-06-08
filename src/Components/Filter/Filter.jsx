import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./Filter.css";

const marks = [
  {
    value: 0,
    label: "10",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 37,
    label: "37",
  },
  {
    value: 100,
    label: "100",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

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
          {/* Slider */}

          <Box sx={{ width: 250 }}>
            <Typography id="track-inverted-slider" gutterBottom>
              Price
            </Typography>

            <Slider
              track="inverted"
              aria-labelledby="track-inverted-slider"
              getAriaValueText={valuetext}
              defaultValue={30}
              marks={marks}
            />

            {/* <Typography id="track-inverted-range-slider" gutterBottom>
              Inverted track range
            </Typography>
            <Slider
              track="inverted"
              aria-labelledby="track-inverted-range-slider"
              getAriaValueText={valuetext}
              defaultValue={[20, 37]}
              marks={marks}
            /> */}
          </Box>
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Filter;
