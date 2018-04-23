import values from 'lodash/values';
import artistsData from './data';

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
  artist: getArtist,
  artists: getArtists,
};
