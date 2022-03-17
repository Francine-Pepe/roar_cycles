import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./BikeColor.css";
import BikeRim from "./BikeRim";
import AddDetail from "./AddDetail";
import AddToCart from "../Buttons/AddToCart";
import BikeImage from "./BikeImage";


export default function BikeColor() {

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
    <div className="bike_container">
    {/* {nameList.map((data, index) => ( */}
      <div className="name_container">
        <h1>SIAMESE BIKE</h1>
        {/* ))} */}
        <hr />
      
        <div className="bike_information_color">
          <p>COLORS:</p>
          <Stack direction="row" spacing={1}>
            {colorList.map((data, index) => (
              <Button
                variant="contained"
                key={index}
                style={{
                  width: "2vw",
                  height: "6vh",
                  backgroundColor: `${data.color}`,
                }}
              ></Button>
            ))}
          </Stack>
          
        </div>
        <BikeRim />
        <AddDetail />
        <AddToCart />
      </div>
      <div className="bike_image_container">
        <BikeImage />
      </div>
      </div>
    
    </>
  );
}

