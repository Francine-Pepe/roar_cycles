import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Client1 from './../Images/client1.png';
import Client2 from './../Images/client2.png';
import Client3 from './../Images/client3.png';
import Client4 from './../Images/client4.png';


// MuiImageListItemBar-title

export default function TitlebarImageList() {
  return (
    <ImageList className='carousel_box' >
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div" className="comments_title" style={{ fontFamily: 'Haettenschweiler', fontSize: '2rem', color: '#07080A', textAlign: 'center', marginBottom: '1rem'}}>Our Clients Comments: </ListSubheader>
        <hr />
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            id="client_image"
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.comment}
            loading="lazy"
          />
          <ImageListItemBar
          sx={{
              "& .MuiImageListItemBar-title": {
                  fontSize: '1rem',
              }
          }}
            className='client_comment'
            title={item.comment}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)',
                "& .MuiImageListItemBar-root": {
                height: "20vh"
                }
            
            }}
                aria-label={`info about ${item.comment}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: Client1,
    comment: "Amazing Bike with a wonderful quality!",    
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: Client2,
    comment: "Just the Bike I was looking for!",
    author: '@rollelflex_graphy726',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: Client3,
    comment: "I use it to go everywhere. Perfect Bike!",
    author: '@helloimnik',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: Client4,
    comment: "The best Bike I could buy!",
    author: '@adventureman',
    rows: 2,
    cols: 2,
    featured: true,
  },
];
