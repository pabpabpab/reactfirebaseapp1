import React, {useEffect, useState} from 'react';
// import addBotMessage from './../functions/addBotMessage';

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import useGetEditedMessage from "../myHooks/useGetEditedMessage";
import useSaveMessage from "../myHooks/useSaveMessage";

const SaveMessage = () => {
    const [messageBody, setMessageBody] = useState('');
    const { editedMessage } = useGetEditedMessage(setMessageBody);
    const { doSaveMessage } = useSaveMessage(messageBody, setMessageBody, editedMessage);

    return (
        <form onSubmit={doSaveMessage} className="input">
            <TextField
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
                id="outlined-basic"
                variant="outlined"
                autoFocus
                sx={{
                    backgroundColor: '#fff',
                }}/>
            <Button
                type="submit"
                variant="contained"
                size="small">
                Send
            </Button>
        </form>
    );
};

export default SaveMessage;


/*
import React, {useEffect} from 'react';
import useInput from '../myHooks/useInput';
import myData from '../data/myData';
import {useDispatch, useSelector} from 'react-redux';
import appConst from '../data/constants';
import addBotMessage from './../functions/addBotMessage';

import {getCorrespondentId, getLastMsgId} from '../redux/selectors';
import Input from './Input';

const InputContainer = () => {
    const dispatch = useDispatch();
    const lastMsgId = useSelector(getLastMsgId);
    const correspondentId = useSelector(getCorrespondentId);

     //const currentChatId = useSelector(getCurrentChatId,  (prev, next) => prev !== next);

    // объект textInput
    const textInput = useInput('');

    const addMessageWithThunk = (msg) => (dispatch, getState) => {
        // отправит снова в thunk (или следующий мидлвар),
        // а там т.к. этот экшн не функция, то сразу в редюсер
        dispatch({type: appConst.ADD_MESSAGE, payload: msg});
        // console.log('state', getState());

        if (msg.id > 0) {
            const toUserId = correspondentId;
            const fromNick = msg.username;
            setTimeout(() => addBotMessage(dispatch, toUserId, fromNick), 1500);
        }
    }

    // при нажатии на кнопку Send
    const doMessage = (e) => {
        e.preventDefault();
        const msg = {
            id: lastMsgId + 1,
            userId: myData.userId,
            toUserId: correspondentId,
            username: myData.username,
            body: textInput.value,
        };
        textInput.clear();

        // если в качестве экшена передана функция, то redux-thunk вызовет
        // ее, передавая ей аргументами функции dispatch и getState.
        dispatch(addMessageWithThunk(msg));
    }

    return (
        <>
            <Input textInput={textInput.bind} doMessage={doMessage}/>
        </>
    );
};

export default InputContainer;
 */