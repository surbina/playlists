import trackData from './data';
import artistData from '../artist/data';

function getTrack(obj, { id }) {
  return trackData.items[id];
}

export default {
  public: {
    track: getTrack,
  },
  private: {
    Track: {
      artist: track => artistData.items[track.artistId],
    }
  },
};
