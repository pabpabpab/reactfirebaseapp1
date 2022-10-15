import getUsernameById from './getUsernameById.js';

export default function packMessagesIntoDepo(messages, contacts) {
    const depo = {};
    messages.forEach((item) => {
        item.username = getUsernameById(contacts, item.userId);
        if (!depo.hasOwnProperty(item.userId)) {
            depo[item.userId] = [];
        }
        depo[item.userId].push(item);
    })
    return depo;
};

/*
export default function packMessagesIntoMap(messages) {
    const depo = {};
    messages.forEach((item) => {
        depo.hasOwnProperty(item.userId)
            ? depo[item.userId] = [ ...depo[item.userId], ...[item] ]
            : depo[item.userId] = [item]
    })
    return depo;
};
*/
/*
export default function packMessagesIntoMap(messages) {
    const map = new Map();
    messages.forEach((item) => {
        map.has(item.userId)
            ? map.set(item.userId, [ ...map.get(item.userId), ...[item] ])
            : map.set(item.userId, [item])
    })
    return map;
};
*/