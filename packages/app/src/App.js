import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import client from './apolloClient';
import { ArtistView } from './Artist';
import { PlaylistView } from './Playlist';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/artist/:id" component={ArtistView} />
            <Route path="/playlist/:id" component={PlaylistView} />
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
