import React from 'react';
import './CarCard.css';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={`${car.image}`} alt={`${car.make} ${car.model}`} />
      <h2 style={{textAlign:"center"}}><b>{car.make}</b></h2>
      <p><img src='images/car-img.png' alt='car-img' style={{width:"20px", height:"20px"}}></img>&nbsp;<b>Model:</b> {car.model}
      <p><img src='images/cal-img.png' alt='cal-img' style={{width:"20px", height:"20px"}}></img>&nbsp;<b>Year:</b> {car.year}
      <p><img src='images/av-img.png' alt='avg-img' style={{width:"20px", height:"20px"}}></img>&nbsp;<b>Average:</b> {car.avg}</p>
      </p>      
      </p>
    </div>
  );
};

export default CarCard;
