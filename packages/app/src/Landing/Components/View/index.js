import React from 'react';
import Frame from '../../../Common/Frame';
import PlaylistList from '../PlaylistList';
import ArtistList from '../ArtistList';

function LandingView({ loading, artist }) {
  return (
    <Frame>
      <PlaylistList />
      <ArtistList />
    </Frame>
  );
}

export default LandingView;
