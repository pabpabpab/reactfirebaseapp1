import {loginError, loginLoading, loginSuccess} from '../actions';
import {auth} from './../../service/firebase';

export const initiateLogin = (email, password) => {
    return (dispatch) => {
        dispatch(loginLoading());
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(loginSuccess(user));
                console.log(user);
            })
            .catch((e) => dispatch(loginError(e.toString())));
    }
}