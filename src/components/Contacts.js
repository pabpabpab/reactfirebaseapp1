import React, {useEffect, useState} from 'react';
import ContactItem from './ContactItem';
import {db} from '../service/firebase';

const Contacts = () => {

    const [chatList, setChatList] = useState({});

    useEffect(() => {
        db.child("chats").on("value", (snap) => {
            if (snap.val() !== null) {
                // snap.val() это целиком база (по ключу "chats") в виде одного объекта
                setChatList({...snap.val()});
            }
        });
        // эта ф-ия вызывается при unmount компонента
        return () => {
            setChatList({});
        }
    }, []);

    return (
        <div className="contacts">
            {
                Object.keys(chatList).map((id) => {
                    return (
                        <ContactItem
                            id={id}
                            contact={chatList[id]}
                            key={id}
                        />
                    )
                })
            }
        </div>
    );

};

export default Contacts;
