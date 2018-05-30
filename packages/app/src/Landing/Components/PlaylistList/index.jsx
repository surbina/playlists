import { graphql } from 'react-apollo';

import { GET_PLAYLISTS } from '../../queries';
import PlaylistList from './presentational';

const mapResultsToProps = ({ data }) => {
  const { loading, playlists } = data;

  return {
    loading,
    playlists: !loading ? playlists.items : [],
  };
};

export default graphql(
  GET_PLAYLISTS,
  {
    props: mapResultsToProps,
  },
)(PlaylistList);
