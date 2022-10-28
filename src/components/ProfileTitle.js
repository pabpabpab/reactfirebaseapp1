import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { getCurrentChatId } from './../redux/selectors';
import {db} from "../service/firebase";

// Компонент рендерит заголовок текущего чата
export default function ProfileTitle() {

    const currentChatId = useSelector(getCurrentChatId);

    const [currentChat, setCurrentChat] = useState({});

    useEffect(() => {
        if (!currentChatId) {
            return;
        }
        db.child("chats").child(currentChatId).on("value", (snap) => {
            if (snap.val() !== null) {
                setCurrentChat({...snap.val()});
            }
        });
        // эта ф-ия вызывается при unmount компонента
        return () => {
            setCurrentChat({});
        }
    }, [currentChatId]);

    return (
        <div className={'profile'}>
            {currentChat?.title ?? ''}
        </div>
    );
};


/*
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
*/