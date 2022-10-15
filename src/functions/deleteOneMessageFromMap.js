export default function deleteOneMessageFromMap(state, action) {
    const depo = state.messages;
    const {msgId, correspondentId} = action.payload;
    const key = correspondentId;
    if (depo.hasOwnProperty(key)) {
        const newValue = depo[key].filter((item) => item.id !== msgId);
        depo[key] = [...newValue];
    }
    return {...depo};
};

/*
export default function deleteOneMessageFromMap(state, action) {
    const map = state.messages;
    const {msgId, correspondentId} = action.payload;
    const key = correspondentId;
    if (map.has(key)) {
        const oldValue = map.get(key);
        const newValue = oldValue.filter((item) => item.id !== msgId);
        return map.set(key, newValue);
    }
    return map.get(key);
};
 */