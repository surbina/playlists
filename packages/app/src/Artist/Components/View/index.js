import { graphql } from 'react-apollo';

import { GET_ARTIST } from '../../queries';
import Artist from './presentational';

const mapResultsToProps = ({ data }) => {
  const { loading, artist } = data;

  return {
    loading,
    artist,
  };
}

export default graphql(
  GET_ARTIST,
  {
    props: mapResultsToProps,
    options: {
      variables: {
        id: 'artist-2',
      },
    },
  },
)(Artist);
