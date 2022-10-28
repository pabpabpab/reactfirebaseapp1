import types from '../../data/constants';

const initialState = {
    currentChatId: '', // текущий чат
    editedChat: {id: '', title: '', description: ''}, // редактируемый чат
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CURRENT_CHAT_ID:
            return {
                ...state,
                currentChatId: action.payload,
            };
        case types.SET_EDITED_CHAT:
            return {
                ...state,
                editedChat: {...action.payload},
            };
        case types.RESET_EDITED_CHAT:
            return {
                ...state,
                editedChat: {id: '', title: '', description: ''},
            };
        default:
            return state;
    }
}

export default chatReducer;


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