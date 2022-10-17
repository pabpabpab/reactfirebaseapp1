import React, {useEffect, useState} from 'react';
import {initiateLogout} from "../redux/thunk/initiateLogout";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Logout = ({ startCountdown }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [countdown, setCountdown] = useState(1000);

    useEffect(() => {
        if (startCountdown === 0) {
            return;
        }
        setCountdown(startCountdown);
        let timerId = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);

        return () => clearTimeout(timerId);
    }, [startCountdown]);


    useEffect(() => {
        if (countdown > 0) {
            return;
        }
        dispatch(initiateLogout());
        navigate('/login');
    }, [countdown]);


    return (
        <div className={'px-3 py-10'}>
            Выход будет произведен через {countdown} секунд...
        </div>
    );
};

export default Logout;