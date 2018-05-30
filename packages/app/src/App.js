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
import { LandingView } from './Landing';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/artist/:id" component={ArtistView} />
            <Route path="/playlist/:id" component={PlaylistView} />
            <Route path="/" component={LandingView} />
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
