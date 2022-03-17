import React, { useCallback, useState } from 'react'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import './BikeImage.css';
import SiameseZoom from './../Images/Siamese_zoom.png';

export default function BikeIimage() {
  const [isZoomed, setIsZoomed] = useState(false)

  const handleImgLoad = useCallback(() => {
    setIsZoomed(true)
  }, [])

  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom)
  }, [])

  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
      <img
        className='bike_image'
        alt="Siamese Bike"
        onLoad={handleImgLoad}
        src={SiameseZoom}
        // width="30vw"
      />
    </ControlledZoom>
  );
}

