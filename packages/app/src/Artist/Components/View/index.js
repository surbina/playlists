import { graphql, compose } from 'react-apollo';
import { withRouter } from 'react-router';

import { GET_ARTIST } from '../../queries';
import Artist from './presentational';

const mapPropsToOptions = ({ match }) => ({
  variables: {
    id: match.params.id,
  },
});

const mapResultsToProps = ({ data }) => {
  const { loading, artist } = data;

  return {
    loading,
    artist,
  };
}

export default compose(
  graphql(
    GET_ARTIST,
    {
      props: mapResultsToProps,
      options: mapPropsToOptions,
    },
  ),
  withRouter,
)(Artist);
