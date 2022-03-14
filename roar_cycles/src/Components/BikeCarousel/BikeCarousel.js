import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Siamese from "./../Images/Siamese.png";
import Sphynx from "./../Images/Sphynx.png";
import Bengal from "./../Images/Bengal.png";
import Button from "@mui/material/Button";
import "./BikeCarousel.css";

export default function BikeCarousel() {
  const styleButton = {
    fontFamily: "Haettenschweiler",
    backgroundColor: "#FFFFFF",
    fontSize: '1.2rem',
    color: "#A61414",
  };

 
  const content = [
  {
    name: 'Siamese',
    image: Siamese,
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
  },
  {
    name: 'Sphynx',
    image: Sphynx,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: 'Bengal',
    image: Bengal,
    description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
  }
]

  return (
    <>
    <div className="carousel_component_container">
      <div className="bike_information">
        <p>We have three different models. Choose the color, rim size and <br/>
        add any detail that you would like your bike to have.
        </p>
      </div>
      <div className="carousel_wrapper">
      <Carousel variant="dark" className="bike_carousel">
        {content.map((content, id) => (
          <Carousel.Item className="carousel_item">
            <div className="name_box">
              {content.name}
            </div>
            <img className="d-block w-80" id="carousel_image" src={content.image} alt="First slide" />
            <Carousel.Caption className="carousel_caption">
              <Button id="carousel_button" style={styleButton}>
                TO THE BIKE
              </Button>
              {/* <div className="description_box">
                <p>{content.description}</p>
              </div> */}
            </Carousel.Caption>
          </Carousel.Item>
          
          ))}
      </Carousel>
        
      </div>
    </div>
    </>
  );
}

