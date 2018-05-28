import React from 'react';
import Tracklist from '../Tracklist';

function PlaylistPanel({ name, tracks }) {
  return (
    <div>
      <h2>{name}</h2>
      <Tracklist {...tracks} />
    </div>
  );
}

export default PlaylistPanel;
