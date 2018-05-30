import gql from 'graphql-tag';

export const GET_ARTISTS = gql`
  query getArtists {
    artists {
      items {
        id
        name
      }
    }
  }
`;

export const GET_PLAYLISTS = gql`
  query getPlaylists {
    playlists {
      items {
        id
        name
      }
    }
  }
`;
