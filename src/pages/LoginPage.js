import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {initiateLogin} from '../redux/thunk/initiateLogin';
import {useNavigate} from 'react-router-dom';
import {getUser} from '../redux/selectors';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(getUser);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        dispatch(initiateLogin(email, password));
    };
/*
    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);
*/
    return (
        <div className={'block px-10 py-7 bg-gray-300 rounded border-gray-400 text-base text-black w-1/2'}>
            <h2 className={'font-bold my-3'}>Login</h2>
            <form onSubmit={handleSubmit}>
                E-mail
                <input
                    className={'block outline-0 border-2 border-solid border-gray-500 rounded p-2 my-2 text-base text-black'}
                    value={email} onChange={(e) => setEmail(e.target.value)} type="text"/>
                Password
                <input
                    className={'block outline-0 border-2 border-solid border-gray-500 rounded p-2 my-2 text-base text-black'}
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    type="password"/>
                <button
                    className={'bg-gray-400 outline-0 rounded py-3 px-5 my-2 text-base text-black drop-shadow-md'}
                    type={'submit'}>Sign In</button>
            </form>
        </div>
    );
};

export default LoginPage;