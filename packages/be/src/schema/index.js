import {
  typeDefs as artistTypeDefs,
  resolvers as artistResolvers,
} from './artist';
import {
  typeDefs as trackTypeDefs,
  resolvers as trackResolvers,
} from './track';
import {
  typeDefs as queryTypeDefs,
  resolvers as queryResolvers,
} from './query';

export const typeDefs = `
  ${artistTypeDefs}
  ${trackTypeDefs}
  ${queryTypeDefs}
`;

export const resolvers = {
  ...queryResolvers,
  ...artistResolvers.typeResolvers,
  ...trackResolvers.typeResolvers,
};
