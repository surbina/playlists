import values from 'lodash/values';
import trackData from './data';
import artistData from '../artist/data';

function getTrack(obj, { id }) {
  return trackData.items[id];
}

function getTracks() {
  return {
    items: values(trackData.items),
    total: trackData.total,
  }
}

export default {
  queryFieldResolvers: {
    track: getTrack,
    tracks: getTracks,
  },
  typeResolvers: {
    Track: {
      artist: track => artistData.items[track.artistId],
    }
  },
};
