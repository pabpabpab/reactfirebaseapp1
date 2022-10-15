import appConst from '../../data/constants';
import packMessagesIntoDepo from '../../functions/packMessagesIntoDepo';
import addMsgIntoMap from './../../functions/addMsgIntoMap';
import deleteOneMessageFromMap from './../../functions/deleteOneMessageFromMap';

const initialState = {
    messages: [],
    lastAction: '',
};

const messageReducer = (state = initialState, action) => {
    let newMessages;
    switch (action.type) {
        case appConst.SET_ALL_MESSAGES:
            return {
                ...state,
                messages: packMessagesIntoDepo([...action.payload.messages], [...action.payload.contacts]),
            };
        case appConst.ADD_MESSAGE:
            newMessages = addMsgIntoMap(state, action);
            return {
                ...state,
                messages: newMessages,
                lastAction: appConst.ADD_MESSAGE,
            }
        case appConst.ADD_MESSAGE_BY_BOT:
            newMessages = addMsgIntoMap(state, action);
            return {
                ...state,
                messages: newMessages,
                lastAction: appConst.ADD_MESSAGE_BY_BOT,
            }
        case appConst.DELETE_MESSAGE:
            newMessages = deleteOneMessageFromMap(state, action);
            return {
                ...state,
                messages: newMessages,
                lastAction: appConst.DELETE_MESSAGE,
            };
        case appConst.DELETE_MESSAGES_BY_USER_ID:
            const messages = {...state.messages};
            delete messages[action.payload];
            return {
                ...state,
                messages: messages,
                lastAction: appConst.DELETE_MESSAGES_BY_USER_ID,
            };
        default:
            return state;
    }
}

export default messageReducer;

