import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import { getContacts } from './../redux/selectors';

const Contacts = () => {
    const contacts = useSelector(
        getContacts,
        (prev, next) => prev.length === next.length
    );

    return (
        <div className="contacts">
            {
                contacts.map((contact) => {
                    return (
                        <ContactItem
                            contact={contact}
                            key={contact.id}
                        />
                    )
                })
            }
        </div>
    );
};

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
}

export default Contacts;





/*
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import ContactItem from './ContactItem';
import { getContacts } from './../redux/selectors';
import {db} from '../service/firebase';

const Contacts = () => {

    const [chatList, setChatList] = useState({});

    useEffect(() => {
        db.child("chats").on("value", (snap) => {
            if (snap.val() !== null) {
                console.log(snap.val());
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
*/