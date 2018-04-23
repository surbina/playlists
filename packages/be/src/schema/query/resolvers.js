import { resolvers as artistResolvers } from '../artist';
import { resolvers as trackResolvers } from '../track';

export default {
  Query: {
    ...artistResolvers.public,
    ...trackResolvers.public,
  },
  ...artistResolvers.private,
  ...trackResolvers.private,
};
