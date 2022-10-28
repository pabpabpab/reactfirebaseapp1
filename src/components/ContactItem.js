import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomLink from './CustomLink';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import types from '../data/constants';
import {setEditedChat} from '../redux/actions/chatActions';
import {db} from '../service/firebase';

const ContactItem = ({ id, contact }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteChat = (id) => {
        db.child("chats").child(id).remove();
        dispatch({type: types.SET_CURRENT_CHAT_ID, payload: ''});
        navigate("/messenger");
    };

    const handleEditChat = (id) => {
        const editedItem = {
            id,
            title: contact.title,
            description: contact.description,
        };
        dispatch(setEditedChat(editedItem));
    };

    return (
        <div className={'contact-item'}>
            <CustomLink to={`/messenger/chat/${id}`}>
                {contact.title}
            </CustomLink>
            <div className="flex">
                <button
                    onClick={() => handleDeleteChat(id)}
                    className={'contact-item__delete-button mx-2'}>
                    del
                </button>
                <button
                    onClick={() => handleEditChat(id)}
                    className={'contact-item__delete-button'}>
                    edit
                </button>
            </div>
        </div>
    );
};

export default ContactItem;
