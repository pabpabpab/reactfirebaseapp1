import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {initiateLogout} from "../redux/thunk/initiateLogout";
import {Link, useNavigate} from 'react-router-dom';
import {getUser} from '../redux/selectors';

const HomePage = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    const navigate = useNavigate();


    console.log('user at homepage', user);


    const handleOut = () => {
        if (user) {
            dispatch(initiateLogout());
        }
        setTimeout(() => {
            navigate('/login');
        }, 3000)
    }

    return (
        <div>
            HomePage
            {!user &&
                <div>
                    <Link to={'/register'} className={'inline-block text-base text-black py-3 px-6 rounded bg-gray-300 m-1'}>Register</Link>
                    <Link to={'/login'} className={'inline-block text-base text-black py-3 px-6 rounded bg-gray-300 m-1'}>Login</Link>
                </div>
            }
            {user &&
            <div>
                <Link to={'/messenger'}
                      className={'inline-block text-base text-black py-3 px-6 rounded bg-gray-300 m-1'}>Messenger</Link>
                <button
                    onClick={handleOut}
                    className={'inline-block text-base text-black py-3 px-6 rounded bg-gray-300 m-1'}>Logout</button>
            </div>
            }
        </div>
    );
}

export default HomePage;