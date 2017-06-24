import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from './components/App/App';
import './styles/main.css'

const history = createHistory()
const ShowAppwithLocation = withRouter(App)

ReactDOM.render(
  <Router history={history}>
    <ShowAppwithLocation />
  </Router>, document.getElementById('root')
)
registerServiceWorker();
