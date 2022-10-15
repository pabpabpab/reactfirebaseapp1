import appConst from '../../data/constants';

const initialState = {
    loading: false,
};

const flagReducer = (state = initialState, action) => {
    switch (action.type) {
        case appConst.SET_LOADING_FLAG:
            return {
                ...state,
                loading: true,
            };
        case appConst.RESET_LOADING_FLAG:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}

export default flagReducer;