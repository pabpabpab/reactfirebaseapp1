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