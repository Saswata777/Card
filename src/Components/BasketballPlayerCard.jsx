import React from "react";
import './BasketballPlayerCard.css'

const BasketballPlayerCard = ({ name, Images, position, stats }) => {
  return (
      <div className="card flex justify-center flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="image-container mx-4 mt-6  text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img className="images" src={Images} alt={name} />
        </div>
        <div className="p-6 info">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {name}
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            Position: {position}
          </p>
          <p>Stats</p>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            Points Per Game: <b>{stats.pointsPerGame}</b> 
          </p>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            Assists Per Game: <b>{stats.assistsPerGame}</b> 
          </p>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            Rounds per Game: <b>{stats.reboundsPerGame}</b> 
          </p>
        </div>
      </div>
  );
};

export default BasketballPlayerCard;

// { pointsPerGame: 30.1,
//     assistsPerGame: 5.3,
//     reboundsPerGame: 6.2
//   }
