import React from 'react';
import Spinner from '../../../Common/Spinner';
import List from '../List';

const artistUri = id => `/artist/${id}`;

function ArtistList({ loading, artists }) {
  const items = artists.map(artist => ({
    ...artist,
    uri: artistUri(artist.id),
  }));

  return (
    <div>
      <h4>Explore artists ...</h4>
      {!loading && <List items={items} />}
      <Spinner shouldShow={loading}/>
    </div>
  );
}

export default ArtistList;
