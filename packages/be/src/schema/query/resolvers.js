import { resolvers as artistResolvers } from '../artist';

export default {
  Query: {
    ...artistResolvers,
  },
};
