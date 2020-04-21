import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import NowPlaying from './Components/NowPlaying';
import Queue from './Components/Queue';
import Library from './Components/Library';
import Playlists from './Components/Playlists';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/nowPlaying" component={NowPlaying} />
      <Route path="/queue" component={Queue} />
      <Route path="/playlists" component={Playlists} />
      <Route path="/library" component={Library} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
