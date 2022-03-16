import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function AddDetail() {
  return (
    <>
    <div className='add_detail_container' style={{ width: "30rem", marginTop: '2rem', display: 'flex' }}>
        <p>ADD DETAIL:</p>
        <TextareaAutosize
        aria-label="empty textarea"
        // placeholder="Add here the details you want"
        style={{ width: 350, height: 50, fontFamily: 'Haettenschweiler' }}
        />
    </div>
    </>
  );
}

