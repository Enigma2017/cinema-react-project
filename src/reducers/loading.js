import {IS_LOADING, LOADING_FAIL, SET_MOVIES} from "../constants";

const initialValues = {
    isLoading: false
};

export const loading = (state = initialValues, action) => {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case LOADING_FAIL:
        case SET_MOVIES:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
};
