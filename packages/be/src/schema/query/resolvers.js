import { resolvers as artist } from '../artist';
import { resolvers as track } from '../track';

export default {
  Query: {
    ...artist.queryFieldResolvers,
    ...track.queryFieldResolvers,
  },
};
