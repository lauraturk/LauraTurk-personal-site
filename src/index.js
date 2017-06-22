import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from './components/App/App';
import './styles/main.css'

const history = createHistory()

ReactDOM.render(
  <Router history={ history }>
    <Route path="/" component={ App } />
  </Router>, document.getElementById('root')
)
registerServiceWorker();
