import { resolvers as artist } from '../artist';
import { resolvers as track } from '../track';
import { resolvers as playlist } from '../playlist';

export default {
  Query: {
    ...artist.queryFieldResolvers,
    ...track.queryFieldResolvers,
    ...playlist.queryFieldResolvers,
  },
};
