import React, {useMemo} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {getOneContact} from '../redux/selectors';
import {useSelector} from 'react-redux';

const ProfilePage = () => {
    const { userId } = useParams();

    const getSelectedUser = useMemo(() => getOneContact(+userId), [userId]);
    const user = useSelector(getSelectedUser);

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(-1)}>
                Назад
            </button>
            <div>
                { user ? `Профайл пользователя ${user.username}` : 'Пользователь не найден' }
            </div>
        </div>
    );
};

export default ProfilePage;
