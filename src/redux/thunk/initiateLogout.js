import {logoutError, logoutLoading, logoutSuccess} from '../actions';
import {auth} from './../../service/firebase';

export const initiateLogout = () => {
    return (dispatch) => {
        dispatch(logoutLoading());
        auth
            .signOut()
            .then(() => dispatch(logoutSuccess()))
            .catch((e) => dispatch(logoutError(e.toString())));
    }
}