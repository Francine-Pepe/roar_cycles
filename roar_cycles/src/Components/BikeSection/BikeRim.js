import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BikeRim() {
  const [size, setSize] = React.useState("");

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <>
      <div
        className="rim_container"
        style={{ width: "50vw", marginTop: '2rem', display: 'flex' }}
      >
        <p>RIM SIZE:</p>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth
          sx={{
                "& .MuiBox-root css-ece9u5": {
                  borderColor: '(rgb(118, 118, 118), rgb(133, 133, 133))',
                  fontFamily: 'Haettenschweiler'
                },
                "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                  border: '(rgb(118, 118, 118), rgb(133, 133, 133))'
                }
             }}
          >
            
            <InputLabel id="demo-simple-select-label">RIM</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={size}
              label="Size"
              onChange={handleChange}
              style={{ width: '20vw', height: 50, fontFamily: 'Haettenschweiler' }}
            >
              <MenuItem value={24}>24"</MenuItem>
              <MenuItem value={26}>26"</MenuItem>
              <MenuItem value={28}>28"</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </>
  );
}
