import { REMOVE_ALERT, SET_ALERT } from '../type';

const initialState = [];

const alertReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_ALERT:
            return [...state, payload];
        case REMOVE_ALERT:
            return state.filter((alert) => alert.id !== payload);
        default:
            return state;
    }
};

export default alertReducer;

