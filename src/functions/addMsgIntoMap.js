export default function addMsgIntoMap(state, action) {
    const depo = state.messages;
    const msg = action.payload;
    const key = msg.toUserId;
    if (!depo.hasOwnProperty(key)) {
        depo[key] = [];
    }
    depo[key].push(msg);
    return {...depo};
};

/*
export default function addMsgIntoMap(state, action) {
    const map = state.messages;
    const msg = action.payload;
    const key = msg.toUserId;
    if (map.has(key)) {
        const oldValue = map.get(key);
        const newValue = [ ...oldValue, msg ];
        return map.set(key, newValue);
    } else {
        return map.set(key, [msg]);
    }
};
 */