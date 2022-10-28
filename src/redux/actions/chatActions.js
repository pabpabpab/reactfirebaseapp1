import types from "../../data/constants";

export const setCurrentChatId = (id) => ({
    type: types.SET_CURRENT_CHAT_ID,
    payload: id
})

export const setEditedChat = (chatData) => ({
    type: types.SET_EDITED_CHAT,
    payload: chatData
})

export const resetEditedChat = () => ({
    type: types.RESET_EDITED_CHAT,
})

/*
export const loginLoading = () => ({
    type: types.LOGIN_LOADING
})
 */