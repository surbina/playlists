import React from 'react';
import Spinner from '../../../Common/Spinner';
import Frame from '../../../Common/Frame';
import ArtistPanel from '../Panel';

function ArtistView({ loading, artist }) {
  return (
    <Frame>
      {!loading && <ArtistPanel {...artist}/>}
      <Spinner shouldShow={loading}/>
    </Frame>
  );
}

export default ArtistView;
