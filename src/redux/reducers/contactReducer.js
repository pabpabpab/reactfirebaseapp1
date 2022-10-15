import types from '../../data/constants';

const initialState = {
    contacts: [],
    correspondentId: 0, // текущий собеседник
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ALL_CONTACTS:
            return {
                ...state,
                contacts: [...action.payload],
            };
        case types.DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((item) => item.id !== action.payload),
            };
        case types.ADD_CONTACT:
            const newContact = {
                id: Date.now(),
                username: action.payload,
            };
            return {
                ...state,
                contacts: [...state.contacts, newContact]
            };
        case types.SET_CORRESPONDENT_ID:
            return {
                ...state,
                correspondentId: action.payload,
            };
        default:
            return state;
    }
}

export default contactReducer;


/*
import types from '../../data/constants';

const initialState = {
    chats: [],
    currentChatId: 0, // текущий чат
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ALL_CHATS:
            return {
                ...state,
                chats: [...action.payload],
            };
        case types.DELETE_CHAT:
            return {
                ...state,
                chats: state.chats.filter((item) => item.id !== action.payload),
            };
        case types.ADD_CHAT:
            const newChat = {
                id: Date.now(),
                username: action.payload,
            };
            return {
                ...state,
                chats: [...state.chats, newChat]
            };
        case types.SET_CURRENT_CHAT_ID:
            return {
                ...state,
                currentChatId: action.payload,
            };
        default:
            return state;
    }
}

export default contactReducer;
 */