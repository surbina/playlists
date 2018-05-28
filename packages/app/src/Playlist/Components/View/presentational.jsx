import React from 'react';
import Spinner from '../../../Common/Spinner';
import Frame from '../../../Common/Frame';
import PlaylistPanel from '../Panel';

function PlaylistView({ loading, playlist }) {
  return (
    <Frame>
      {!loading && <PlaylistPanel {...playlist}/>}
      <Spinner shouldShow={loading}/>
    </Frame>
  );
}

export default PlaylistView;
