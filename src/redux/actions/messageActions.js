import types from "../../data/constants";

export const setEditedMessage = (messageData) => ({
    type: types.SET_EDITED_MESSAGE,
    payload: messageData
})

export const resetEditedMessage = () => ({
    type: types.RESET_EDITED_MESSAGE,
})