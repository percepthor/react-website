import isEmpty from '../utils/isEmpty';

import { SET_CURRENT_USER, USER_INIT, USER_INIT_CORRECT,USER_INIT_ERROR } from '../actions/types';

let initialState = {
	isAuthenticated: false,
	user: {},
	first: false,
	error: { title: '', msg: '', isError: false }
};

export default function reducer (state = initialState, action) {
	switch (action.type) {
		case USER_INIT_ERROR:
			return {
				...state,
				error: {
					title: Object.keys(action.payload)[0],
					msg: Object.values(action.payload)[0],
					isError: true,
				}
			}
		case SET_CURRENT_USER: 
			return {
				...state,
				isAuthenticated: !isEmpty (action.payload),
				user: action.payload,
				error: initialState.error,
			}
		case USER_INIT:
			return {
				...state,
				first: true,
				error: initialState.error,
			}
		case USER_INIT_CORRECT:
			return {
				...state,
				first: false,
				error: initialState.error
			}

		default: return state;
	}

}
