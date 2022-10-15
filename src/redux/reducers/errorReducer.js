import appConst from '../../data/constants';

const initialState = {
    error: '',
};

const flagReducer = (state = initialState, action) => {
    switch (action.type) {
        case appConst.SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case appConst.RESET_ERROR:
            return {
                ...state,
                error: '',
            };
        default:
            return state;
    }
}

export default flagReducer;