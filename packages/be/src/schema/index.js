import { typeDefs as artistTypeDefs } from './artist';
import {
  typeDefs as queryTypeDefs,
  resolvers as queryResolvers,
} from './query';

export const typeDefs = `
  ${artistTypeDefs}
  ${queryTypeDefs}
`;

export const resolvers = {
  ...queryResolvers,
};
