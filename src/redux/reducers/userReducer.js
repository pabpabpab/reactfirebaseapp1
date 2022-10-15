import types from '../../data/constants';

const initialState = {
    loading: false,
    error: '',
    currentUser: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_LOADING:
        case types.LOGIN_LOADING:
        case types.LOGOUT_LOADING:
            return {
                ...state,
                loading: true,
            };
        case types.REGISTER_ERROR:
        case types.LOGIN_ERROR:
        case types.LOGOUT_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
            };
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
            };
        default:
            return state;
    }
}

export default userReducer;