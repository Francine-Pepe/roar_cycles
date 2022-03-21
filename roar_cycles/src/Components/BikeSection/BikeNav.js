import { Box } from "@material-ui/core";
import React from "react";
import BikeInformation from "./BikeInformation";
import "./BikeNav.css";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Icon } from "@iconify/react";
import BikeColorSmallScreen from "./BikeColorSmallScreen";

export default function BikeNav() {
  // For screens bellow 720px

  const options = ["SIAMESE", "SPHYNX", "BENGAL"];

  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="navpage_container">
        <div className="nav_header"></div>
        <div className="navpage_content">
          <Box
            className="navpage_left_box"
            sx={{
              width: {
                xs: 100, // theme.breakpoints.up('xs')
                sm: 200, // theme.breakpoints.up('sm')
                md: 300, // theme.breakpoints.up('md')
                lg: 400, // theme.breakpoints.up('lg')
                xl: 500, // theme.breakpoints.up('xl')
              },
            }}
          >
            <nav className="left_navbar">
              <h1>BIKES</h1>
              <ul>
                <li>
                  <a href="/" alt="siamese" className="link_box">
                    SIAMESE
                  </a>
                  <a href="/" alt="siamese" className="link_box">
                    SPHYNX
                  </a>
                  <a href="/" alt="siamese" className="link_box">
                    BENGAL
                  </a>
                </li>
              </ul>
            </nav>
          </Box>
          <div className="navpage_right_box">
            <BikeInformation />
          </div>
        </div>
      </div>

      {/* For screens bellow 720px */}

      <div className="mobile_navpage_container">
        <div className="mobile_nav_header">
          <h1>BIKE</h1>
        </div>
        <div className="mobile_navpage_content">
          <Box
            className="mobile_navpage_left_box"
            sx={{
              width: {
                xs: 100, // theme.breakpoints.up('xs')
                sm: 200, // theme.breakpoints.up('sm')
                md: 300, // theme.breakpoints.up('md')
                lg: 400, // theme.breakpoints.up('lg')
                xl: 500, // theme.breakpoints.up('xl')
              },
            }}
          >
            <nav className="mobile_left_navbar">
              <div>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <Icon
                    icon="ci:hamburger"
                    color="black"
                    width="40"
                    height="50"
                  />
                </IconButton>
                <Menu
                  style={{
                    fontFamily: "Haettenschweiler",
                  }}
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "20ch",
                    },
                  }}
                >
                  {options.map((option) => (
                    <MenuItem
                      key={option}
                      selected={option === "Pyxis"}
                      onClick={handleClose}
                      style={{
                        fontFamily: "Haettenschweiler",
                        "&:hover": {
                          backgroundColor: "#F29F05",
                        },
                      }}
                      sx={{
                        "& .MuiMenuItem-root": {
                          fontSize: 18,
                        },
                        "&:active": {
                          backgroundColor: "#F2B705",
                        },
                        "&:hover": {
                          backgroundColor: "#F2B705",
                        },
                        "& .MuiTypography-root-MuiLink-root": {
                          color: "#F2B705",
                        },
                      }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>

              {/* <h1>BIKES</h1> */}
              {/* <ul>
                <li>
                  <a href="/" alt="siamese" className="mobile_link_box">
                    SIAMESE
                  </a>
                  <a href="/" alt="siamese" className="mobile_link_box">
                    SPHYNX
                  </a>
                  <a href="/" alt="siamese" className="mobile_link_box">
                    BENGAL
                  </a>
                </li>
              </ul> */}
            </nav>
          </Box>
          <div className="mobile_navpage_right_box">
            <BikeColorSmallScreen />
          </div>
        </div>
      </div>
    </>
  );
}
