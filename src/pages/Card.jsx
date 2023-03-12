import React from 'react';

const Card = () => {
 return (
     <div class="rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
        <img class="w-full" src="https://images8.alphacoders.com/541/thumb-1920-541822.jpg" alt="Sunset in the mountains"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Price: 20 million</div>
        <p class="text-gray-700 text-base">
          <strong>Seller: </strong> Aman
        </p>
        
 <p class="text-gray-700 text-base">
<strong> Description: It's beautiful </strong>
        </p>
        <p class="text-gray-700 text-base">
<strong>Rating</strong>: 8
        </p>
        <p class="text-gray-700 text-base">
<strong>Urgency: pretty urgent</strong>
        </p>
      </div>
    </div>
  )
}

export default Card