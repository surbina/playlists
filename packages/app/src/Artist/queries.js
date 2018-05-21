import gql from 'graphql-tag';

const ARTIST_FRAGMENT = `
  fragment artistData on Artist {
    id
    name
    description
  }
`;

export const GET_ARTIST = gql`
  query getArtist($id: String) {
    artist(id: $id) {
      ...artistData
    }
  }
  ${ARTIST_FRAGMENT}
`;
