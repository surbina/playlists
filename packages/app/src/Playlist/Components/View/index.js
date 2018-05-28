import { graphql, compose } from 'react-apollo';
import { withRouter } from 'react-router';

import { GET_PLAYLIST } from '../../queries';
import PlaylistView from './presentational';

const mapPropsToOptions = ({ match }) => ({
  variables: {
    id: match.params.id,
  },
});

const mapResultsToProps = ({ data }) => {
  const { loading, playlist } = data;

  return {
    loading,
    playlist,
  };
}

export default compose(
  graphql(
    GET_PLAYLIST,
    {
      props: mapResultsToProps,
      options: mapPropsToOptions,
    },
  ),
  withRouter,
)(PlaylistView);
