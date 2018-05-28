import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import client from './apolloClient';
import { ArtistView } from './Artist';

class App extends Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <Route path="/artist/:id" component={ArtistView}/>
        </ApolloProvider>
      </Router>
    );
  }
}

export default App;
