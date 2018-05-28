import React from 'react';

function ArtistPanel({ name, description }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ArtistPanel;
