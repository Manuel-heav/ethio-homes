import React from 'react';

const Card = ({address, area, imageUrl, numberOfRooms, price, type}) => {
 return (
     <div class="rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
        <img class="w-full" src={imageUrl} alt="Sunset in the mountains"/>
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
<strong>Area: {area}</strong>
        </p>
      </div>
    </div>
  )
}

export default Card