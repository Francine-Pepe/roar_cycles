import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./BikeColorSmallScreen.css";
import BikeRim from "./BikeRim";
import AddDetail from "./AddDetail";
import AddToCart from "../Buttons/AddToCart";
import BikeImage from "./BikeImage";
import { makeStyles, useTheme, useMediaQuery, Box } from '@material-ui/core';


export default function BikeColorSmallScreen() {

  const colorList = [
    { color: "#000000" },
    { color: "#707070" },
    { color: "#F2F2F2" },
    { color: "#FFFFFF" },
    { color: "#A61414" },
    
  ];

  const nameList = [
    {
      name: 'Siamese Bike'
    },
    {
      name: 'Sphynx Bike'
    },
    {
      name: 'Bengal Bike'
    }
  ]

  return (
    <>
    <div className="mobile_bike_container">
      <div className="mobile_bike_wrapper">
        <Box className="mobile_name_container"  
        sx={{
              width: {
                xs: 100, // theme.breakpoints.up('xs')
                sm: 200, // theme.breakpoints.up('sm')
                md: 300, // theme.breakpoints.up('md')
                lg: 400, // theme.breakpoints.up('lg')
                xl: 500, // theme.breakpoints.up('xl')
              },
            }}>
          <h1>SIAMESE BIKE</h1>
          <hr />
        
          <div className="mobile_bike_information_color">
            <p>COLORS:</p>
            <Stack direction="row" spacing={1} >
            
              {colorList.map((data, index) => (
                <Button
                className="color_button"
                  variant="contained"
                  key={index}
                  style={{
                    // width: "2vw",
                    // height: "6vh",
                    backgroundColor: `${data.color}`,
                  }}
                ></Button>
              ))}
            </Stack>
            
          </div>
          <BikeRim />
          <AddDetail />
          <AddToCart />
        </Box>
        <div className="mobile_bike_image_container">
          <BikeImage />
        </div>
      </div>
    </div>
    
    </>
  );
}

