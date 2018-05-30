import { graphql } from 'react-apollo';

import { GET_ARTISTS } from '../../queries';
import ArtistList from './presentational';

const mapResultsToProps = ({ data }) => {
  const { loading, artists } = data;

  return {
    loading,
    artists: !loading ? artists.items : [],
  };
};

export default graphql(
  GET_ARTISTS,
  {
    props: mapResultsToProps,
  },
)(ArtistList);
