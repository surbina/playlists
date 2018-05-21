import React from 'react';

function ArtistPanel({ name, description }) {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
}

export default ArtistPanel;
