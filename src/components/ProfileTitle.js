import React, { useMemo } from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { getContacts, getCorrespondentId } from './../redux/selectors';

// Компонент рендерит ссылку на профиль контакта с которым идет чат
export default function ProfileTitle() {
    const contacts = useSelector(getContacts);
    const correspondentId = useSelector(getCorrespondentId);

    const user = useMemo(
        () => contacts.find((item) => item.id === correspondentId),
        [contacts, correspondentId]
    );

    if (!user) {
        return (
            <div className={'profile'}>
                &nbsp;
            </div>
        );
    }

    return (
        <div className={'profile'}>
            <Link
                to={`/profile/${correspondentId}`}
                className={'link-profile'}>
                {user.username}
            </Link>
        </div>
    );
};