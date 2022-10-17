import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {getUser} from '../redux/selectors';
import Logout from "../components/Logout";

const HomePage = () => {
    const user = useSelector(getUser);

    const [startCountdown, setStartCountdown] = useState(0);

    const handleOut = () => {
        if (!user) {
            return;
        }
        setStartCountdown(3);
    }

    return (
        <div>
            HomePage

            {!user &&
                <div>
                    <Link to={'/register'}
                          className={'inline-block text-base text-black py-3 px-6 rounded bg-gray-300 m-1'}>
                        Register
                    </Link>
                    <Link to={'/login'}
                          className={'inline-block text-base text-black py-3 px-6 rounded bg-gray-300 m-1'}>
                        Login
                    </Link>
                </div>
            }

            {user &&
            <div>
                <div className="my-5">
                    {`${user.displayName}, ${user.email}, uid = ${user.uid}`}
                </div>

                <Link to={'/messenger'}
                      className={'inline-block text-base text-black py-3 px-6 rounded bg-gray-300 m-1'}>
                    Messenger
                </Link>
                <button
                    onClick={handleOut}
                    className={'inline-block text-base text-black py-3 px-6 rounded bg-gray-300 m-1'}>
                    Logout
                </button>
            </div>
            }

            {startCountdown > 0 && <Logout startCountdown={startCountdown} />}
        </div>
    );
}

export default HomePage;
