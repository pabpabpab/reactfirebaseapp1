import {db} from "../service/firebase";
import {resetEditedMessage} from "../redux/actions/messageActions";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentChatId, getUser} from "../redux/selectors";

// при нажатии на кнопку Add или Edit
const useSaveMessage = (messageBody, setMessageBody, editedMessage) => {
    const dispatch = useDispatch();
    const currentChatId = useSelector(getCurrentChatId);

    const user = useSelector(getUser);

    const doSaveMessage = (e) => {
        e.preventDefault();

        if (!currentChatId) {
            return;
        }

        if (!messageBody) {
            console.log('Не заполнено сообщение');
            return;
        }

        const msg = {
            userId: user.uid,
            username: user.displayName,
            body: messageBody,
        };

        if (editedMessage?.id) {
            // редактирование данных сообщения
            db.child("messages").child(currentChatId).child(editedMessage.id).set(msg, (e) => {
                e && console.log(e);
            });
            dispatch(resetEditedMessage());
        } else {
            // создание сообщения
            db.child("messages").child(currentChatId).push(msg, (e) => {
                e && console.log(e);
            });
        }

        setMessageBody('');
    }

    return {
        doSaveMessage,
    }
}

export default useSaveMessage;