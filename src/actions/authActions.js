import axios from 'axios';
import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode';

import { SET_CURRENT_USER  } from './types';

const cookies = new Cookies ();

// set logged user
export const user_set_current = (decoded) => {

	return {
		type: SET_CURRENT_USER,
		payload: decoded
	}

}

// log user out
export const auth_token_remove = () => dispatch => {

	// const cookies = new Cookies ();
	process.env.REACT_APP_RUNTIME === "Production" || process.env.REACT_APP_RUNTIME === "Test" ?
		cookies.remove ('percepthor-jwt', {
				path: "/", 
				domain: ".verstand.com.mx"}) :
		cookies.remove ('percepthor-jwt', {
				path: "/", 
				domain: ".localhost.com"});
	
	// remove auth header for future requests
	window.location.reload();
	auth_token_set (null);
	dispatch (user_set_current ({}));
	// dispatch (alert_set ('You have logged out!', 'success'));

};

// check for user token
export const user_token_check = (store) => {

	// const cookies = new Cookies ();
	let jwt = cookies.get ("percepthor-jwt");

	// localStorage.jwtToken
	if (jwt) {
		// decode token and get user info
		// let decoded = jwt_decode (localStorage.jwtToken);
		// check for expired token
		let decoded = jwt_decode (jwt);
		let currentTime = Date.now () / 1000;
		if (decoded.exp < currentTime) {
			// logout the user
			store.dispatch (auth_token_remove ());
			// store.dispatch (profile_clear_current ());
			
			process.env.REACT_APP_RUNTIME === "Production" 
			? window.location.href = "https://verstand.com.mx/login"
			: process.env.REACT_APP_RUNTIME === "Test"
				? window.location.href = "http://test.verstand.com.mx/login"
				: window.location.href = "http://localhost.com/login"
		}

		else {
			auth_token_set (jwt);           // set auth token header auth
			store.dispatch (user_set_current (decoded));
		}
	}

}

// set auth token for each request
const auth_token_set = token => {

	// Apply to every request
	if (token) axios.defaults.headers.common['Authorization'] = token;
	else delete axios.defaults.headers.common['Authorization'];
	
};
