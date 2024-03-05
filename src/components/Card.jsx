import React from 'react';

function Card(props) {
  const { title, location, googleMapsLink, startDate, endDate, description, imageUrl } = props;
  console.log(props)

  return (
    <div>
      <div className="Card">
        <div className='img-cont'>
          <img src={`../images/${imageUrl}`} className="img" alt={title}></img>
        </div>
        <div className="info-parent">
          <div className="info-card">
            <i className="fa-solid fa-location-dot location-dot"></i>
            <h4>{location}</h4>
            <a href={googleMapsLink} className="Maps-link" target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </div>
          <h1>{title}</h1>
          <h4 className="date">{startDate} - {endDate}</h4>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
