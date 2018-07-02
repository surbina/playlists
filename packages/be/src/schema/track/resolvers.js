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
  Query: {
    track: getTrack,
    tracks: getTracks,
  },
  Track: {
    artist: track => artistData.items[track.artistId],
  },
};
