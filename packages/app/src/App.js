import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import 'bootstrap/dist/css/bootstrap.min.css';

import client from './apolloClient';
import { ArtistView } from './Artist';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ArtistView />
      </ApolloProvider>
    );
  }
}

export default App;
