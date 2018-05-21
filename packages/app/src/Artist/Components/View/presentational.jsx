import React from 'react';
import Spinner from '../../../Common/Spinner';
import ArtistPanel from '../Panel';

function ArtistView({ loading, artist }) {
  return (
    <div>
      {!loading && <ArtistPanel {...artist}/>}
      <Spinner shouldShow={loading}/>
    </div>
  );
}

export default ArtistView;
