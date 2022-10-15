import appConst from '../data/constants';

export default function AddBotMessage(dispatch, toUserId, fromNick) {
    const botMsg = {
        id: Date.now(),
        userId: 0,
        username: 'Bot',
        toUserId: toUserId,
        body: `Сообщение ${fromNick} отправлено`,
    }
    dispatch({type: appConst.ADD_MESSAGE_BY_BOT, payload: botMsg});
};