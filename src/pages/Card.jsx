import { Box, CardMedia, Modal, Typography } from '@mui/material';
import { FiX } from 'react-icons/fi';
import React, { useState } from 'react';
import './Card.css'

const Card = ({address, area, imageUrl, numberOfRooms, price, type}) => {
  
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true)
    };
 return (
     <div class="rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">

<Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box className="container">
        <FiX className="close__btn" onClick={handleClose}/> 
        <CardMedia
                className="img"
                component="img"
                image={imageUrl}
            />
            <div className="text__container">
            <Typography id="modal-modal-title" variant="h6" component="h2">
                 Number Of Rooms: {numberOfRooms}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Price: {price}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Type: {type}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Address: {address}
            </Typography>

            <button class="mt-5 ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Contact Us</button>

            </div> 
      </Box>
    </Modal>



        <img class="w-full object-contain h-74" src={imageUrl}/>
      <div class="px-6 py-4">
      <p class="text-gray-700 text-base">
<strong> Address: {address}</strong>
        </p>
        <div class="font-bold text-xl mb-2">Price: {price}</div>
        <p class="text-gray-700 text-base">
          <strong>Number Of Rooms: </strong> {numberOfRooms}
        </p>
        
 <p class="text-gray-700 text-base">
<strong> Type: {type}</strong>
        </p>
        <p class="text-gray-700 text-base">
<strong>Price: </strong>{price}
        </p>
        <p class="text-gray-700 text-base">
<strong>Area: {area} Sqm</strong>
        </p>
        <p class="text-blue-700 text-base font-bold" onClick={handleOpen}>More</p>
      </div>
    </div>
  )
}

export default Card