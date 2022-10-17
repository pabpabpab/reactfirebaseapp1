import {registerError, registerLoading, registerSuccess} from '../actions/userActions';
import {auth} from './../../service/firebase';

export const initiateRegister = (email, password, displayName) => {
    return (dispatch) => {
        dispatch(registerLoading());
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName
                });
                dispatch(registerSuccess(user));
                console.log(user);
            })
            .catch((e) => dispatch(registerError(e.toString())));
    }
}