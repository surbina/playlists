import values from 'lodash/values';
import artistsData from './data';
import trackData from '../track/data';

function getArtist(obj, { id }) {
  return artistsData.items[id];
}

function getArtists() {
  return {
    items: values(artistsData.items),
    total: artistsData.total,
  };
}

export default {
  queryFieldResolvers: {
    artist: getArtist,
    artists: getArtists,
  },
  typeResolvers: {
    Artist: {
      tracks: artist => values(trackData.items)
          .filter(track => track.artistId === artist.id),
    },
  }
};
