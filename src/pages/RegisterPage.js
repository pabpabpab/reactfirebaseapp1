import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {initiateRegister} from '../redux/thunk/initiateRegister';
import {useNavigate} from 'react-router-dom';
import {getUser} from '../redux/selectors';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [displayName, setDisplayName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(getUser);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return;
        }
        dispatch(initiateRegister(email, password, displayName));
    };

    return (
        <div className={'block px-10 py-7 bg-gray-300 rounded border-gray-400 text-base text-black w-1/2'}>
            <h2 className={'font-bold my-3'}>Register</h2>
            <form onSubmit={handleSubmit}>
                Name
                <input
                    className={'block border-2 border-solid border-gray-500 rounded p-2 my-2 text-base text-black'}
                    value={displayName} onChange={(e) => setDisplayName(e.target.value)} type="text"/>
                E-mail
                <input
                    className={'block outline-0 border-2 border-solid border-gray-500 rounded p-2 my-2 text-base text-black'}
                    value={email} onChange={(e) => setEmail(e.target.value)} type="text"/>
                Password
                <input
                    className={'block outline-0 border-2 border-solid border-gray-500 rounded p-2 my-2 text-base text-black'}
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    type="password"/>
                Confirm password
                <input
                    className={'block outline-0 border-2 border-solid border-gray-500 rounded p-2 my-2 text-base text-black'}
                    value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}
                    type="password"/>
                <button
                    className={'bg-gray-400 outline-0 rounded py-3 px-5 my-2 text-base text-black drop-shadow-md'}
                    type={'submit'}>Sign Up</button>
            </form>
        </div>
    );
};

export default RegisterPage;