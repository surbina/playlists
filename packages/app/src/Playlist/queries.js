import gql from 'graphql-tag';

export const GET_PLAYLIST = gql`
  query getPlaylist($id: String) {
    playlist(id: $id) {
      id
      name
      tracks {
        items {
          id
          name
          artist {
            name
          }
        }
        total
      }
    }
  }
`;
