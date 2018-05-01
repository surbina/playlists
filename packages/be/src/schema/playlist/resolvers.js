import values from 'lodash/values';
import playlistData from './data';
import trackData from '../track/data';

function getPlaylist(obj, { id }) {
  return playlistData.items[id];
}

function getPlaylists() {
  return {
    items: values(playlistData.items),
    total: playlistData.total,
  }
}

export default {
  queryFieldResolvers: {
    playlist: getPlaylist,
    playlists: getPlaylists,
  },
  typeResolvers: {
    Playlist: {
      tracks: playlist => {
        const items = playlist.trackIds.map(trackId => trackData.items[trackId]);

        return {
          items,
          total: items.length,
        };
      },
    }
  }
}
