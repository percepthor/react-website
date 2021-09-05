import React, { Component } from 'react';
import { BrowserRouter as  Router, Route, Switch, Redirect }  from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import store from './store';

import Landing from './components/Landing';
import Authentication from './components/Authentication';
import NotFound from './components/NotFound';

import PrivateRoute from './router/PrivateRoute';

import { user_token_check } from './actions/authActions';

user_token_check (store);

class App extends Component {

	render () {
		return (
			<Provider store= { store }>
				<Router>
					<div className="App">
						<Switch>
            	<Route exact path='/' component={ Landing } />

							
							
							<Route exact path='/auth' component={ Authentication } />

							{/* Other */}
							<Route exact path='/404' component={ NotFound } />
							<Redirect to="/404" />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}

}

export default App;
