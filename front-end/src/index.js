import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './store';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
	<Provider store={store}>
			<Router>
      <div>
        <div>
          <Switch>
            <Route path='/' component={} exact />
            <Route path='/' component={} />
            <Route path='/' component={} />
          </Switch>
        </div>
      </div>
    </Router>
	</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
