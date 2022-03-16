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
    // { color: "#D82E2F" },
    // { color: "#EB4D4B" },
    // { color: "#EF5354" },
    // { color: "#B4161B" },
    // { color: "#E6425E" },
    // { color: "#E83A59" },
    // { color: "#B9345A" },
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
          <Stack direction="row" spacing={2}>
            {colorList.map((data, index) => (
              <Button
                variant="contained"
                key={index}
                style={{
                  width: "2rem",
                  height: "3rem",
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
