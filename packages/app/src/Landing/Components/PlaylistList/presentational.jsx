import React from 'react';
import Spinner from '../../../Common/Spinner';
import List from '../List';

const playlistUri = id => `/playlist/${id}`;

function PlaylistList({ loading, playlists }) {
  const items = playlists.map(playlist => ({
    ...playlist,
    uri: playlistUri(playlist.id),
  }));

  return (
    <div>
      <h4>Explore playlists ...</h4>
      {!loading && <List items={items} />}
      <Spinner shouldShow={loading}/>
    </div>
  );
}

export default PlaylistList;
