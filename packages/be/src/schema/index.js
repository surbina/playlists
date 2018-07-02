import merge from 'lodash/merge';
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
} from './query';
import {
  typeDefs as playlistTypeDefs,
  resolvers as playlistResolvers,
} from './playlist';

export const typeDefs = `
  ${artistTypeDefs}
  ${trackTypeDefs}
  ${queryTypeDefs}
  ${playlistTypeDefs}
`;

export const resolvers = merge(
  artistResolvers,
  trackResolvers,
  playlistResolvers,
);
