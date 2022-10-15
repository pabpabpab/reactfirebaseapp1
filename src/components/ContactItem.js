import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomLink from './CustomLink';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import appConst from '../data/constants';

const ContactItem = ({ contact }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteContact = (userId) => {
        dispatch({type: appConst.DELETE_CONTACT, payload: userId});
        dispatch({type: appConst.DELETE_MESSAGES_BY_USER_ID, payload: userId});
        dispatch({type: appConst.SET_CORRESPONDENT_ID, payload: 0});
        navigate("/messenger");
    };

    return (
        <div className={'contact-item'}>
            <CustomLink to={`/messenger/chat/${contact.id}`}>
                {contact.username}
            </CustomLink>
            <button
                onClick={() => handleDeleteContact(contact.id)}
                className={'contact-item__delete-button'}>
                &#10006;
            </button>
        </div>
    );
};

ContactItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
    }),
}

export default ContactItem;




/*
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomLink from './CustomLink';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import appConst from '../data/constants';
import {db} from '../service/firebase';

const ContactItem = ({ id, contact }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteChat = (id) => {
        console.log(id);
        db.child("chats").child(id).remove();

        // dispatch({type: appConst.DELETE_CONTACT, payload: id});
        // dispatch({type: appConst.DELETE_MESSAGES_BY_USER_ID, payload: id});
        // dispatch({type: appConst.SET_CORRESPONDENT_ID, payload: 0});
        navigate("/messenger");
    };

    return (
        <div className={'contact-item'}>
            <CustomLink to={`/messenger/chat/${id}`}>
                {contact.name1}
            </CustomLink>
            <button
                onClick={() => handleDeleteChat(id)}
                className={'contact-item__delete-button'}>
                &#10006;
            </button>
        </div>
    );
};

export default ContactItem;
*/