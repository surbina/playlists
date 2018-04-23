import { typeDefs as artistTypeDefs } from './artist';
import { typeDefs as trackTypeDefs } from './track';
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
};
