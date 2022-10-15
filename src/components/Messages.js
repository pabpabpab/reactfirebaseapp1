import React, { useEffect, useRef, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { getChatById } from './../redux/selectors';

import MessageItem from './MessageItem';
import appConst from '../data/constants';

const Messages = () => {
    const { chatId } = useParams();

    const getSelectedChat = useMemo(() => getChatById(chatId), [chatId]);
    const messages = useSelector(getSelectedChat);

    const dispatch = useDispatch();

    useEffect(
        () => {
            if (chatId) {
                dispatch({type: appConst.SET_CORRESPONDENT_ID, payload: +chatId});
            }
        },
        [chatId]
    );

    const chatDivRef = useRef(null);
    // пусть всегда div сообщений будет проскроллен вниз
    useEffect(() => {chatDivRef.current.scrollTop += 1000;});

    if (messages === undefined || messages === null) {
        return (
            <div ref={chatDivRef} className="messages">
                <div className="no-messages">
                    ...
                </div>
            </div>
        );
    }

    if (messages.length === 0) {
        return (
            <div ref={chatDivRef} className="messages">
                <div className="no-messages">
                    Нет сообщений
                </div>
            </div>
        );
    }

    return (
        <div ref={chatDivRef} className="messages">
            {
                messages.map((message) => <MessageItem message={message} key={message.id} />)
            }
        </div>
    );
};

export default Messages;