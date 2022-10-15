import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import appConst from '../data/constants';
import {getCorrespondentId} from "../redux/selectors";

const MessageItem = ({ message }) => {
    const dispatch = useDispatch();
    const correspondentId = useSelector(
        getCorrespondentId,
        (prev, next) => prev === next
    );

    const handleDeleteMessage = (msgId) => {
        dispatch({type: appConst.DELETE_MESSAGE, payload: {msgId, correspondentId}});
    };

    return (
        <div title={message.id} className="message-item">
            <div>
                {message.username} пишет:<br/>
                {message.body}
            </div>
            <button
                onClick={() => handleDeleteMessage(message.id)}
                className={'message-item__delete-button'}>
                &#10006;
            </button>
        </div>
    );
};

MessageItem.propTypes = {
    message: PropTypes.shape({
        id: PropTypes.number.isRequired,
        userId: PropTypes.number,
        username: PropTypes.string.isRequired,
        toUserId: PropTypes.number,
        body: PropTypes.string.isRequired,
    }),
}

export default MessageItem;