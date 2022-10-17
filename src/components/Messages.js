import React, {useEffect, useRef, useMemo, useState} from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import MessageItem from './MessageItem';
import {setCurrentChatId} from '../redux/actions/chatActions';

import {db} from "../service/firebase";

const Messages = () => {
    const dispatch = useDispatch();

    const { chatId } = useParams();
    dispatch(setCurrentChatId(chatId));

    const [messages, setMessages] = useState(null);

    // -----------получить сообщения с сервера----------
    useEffect(() => {
        if (!chatId) {
            return;
        }
        db.child("messages").child(chatId).on("value", (snap) => {
            if (snap.val() !== null) {
                // snap.val() это целиком база (по ключу "chats") в виде одного объекта
                setMessages({...snap.val()});
            }
        });
        // эта ф-ия вызывается при unmount компонента
        return () => {
            setMessages({});
        }
    }, [chatId]);
    // -----------/получить сообщения с сервера----------

    // -----пусть всегда div сообщений будет проскроллен вниз--------
    const chatDivRef = useRef(null);
    useEffect(() => {chatDivRef.current.scrollTop += 1000;});
    // -------------------------------------------------------------

    if (messages === undefined || messages === null) {
        return (
            <div ref={chatDivRef} className="messages">
                <div className="no-messages">
                    ...
                </div>
            </div>
        );
    }

    if (Object.keys(messages).length === 0) {
        return (
            <div ref={chatDivRef} className="messages">
                <div className="no-messages">
                    Нет сообщений
                </div>
            </div>
        );
    }

    if (Object.keys(messages).length > 0)
    return (
        <div ref={chatDivRef} className="messages">
            {
                Object.keys(messages).map((id) => {
                    return (
                        <MessageItem
                            id={id}
                            message={messages[id]}
                            key={id}
                        />
                    )
                })
            }
        </div>
    );
};

export default Messages;

/*
import React, { useEffect, useRef, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { getChatById } from './../redux/selectors';

import MessageItem from './MessageItem';
import appConst from '../data/constants';
import types from "../data/constants";

const Messages = () => {
    const dispatch = useDispatch();

    const { chatId } = useParams();
    dispatch({type: types.SET_CURRENT_CHAT_ID, payload: chatId});

    console.log('chatId', chatId);

    const getSelectedChat = useMemo(() => getChatById(chatId), [chatId]);
    const messages = useSelector(getSelectedChat);

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
 */