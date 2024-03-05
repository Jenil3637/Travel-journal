import React from 'react';
import Data from './Data.js';
import Card from './components/Card.jsx';

function App() {
  const Cards = Data.map(info => (
    <Card key={info.id} 
        id = {info.id}
        title = {info.title}
        location = {info.location}
        googleMapsLink = {info.googleMapsLink}
        startDate = {info.startDate}
        endDate = {info.endDate}
        description = {info.description}
        imageUrl = {info.imageUrl}
    />
  ));

  return (
    <div>
      {Cards}
    </div>
  );
}

export default App;
