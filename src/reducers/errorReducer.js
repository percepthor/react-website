import { ERRORS_CLEAR, ERRORS_GET } from '../actions/types';

let initialState = {};

export default function reducer (state = initialState, action) {

    switch (action.type) {
        case ERRORS_CLEAR: return {};

        case ERRORS_GET: return action.payload || {server: "Server error"};

        default: return state;
    }

}
