import {db} from "../service/firebase";
import {useDispatch} from "react-redux";
import {resetEditedChat} from "../redux/actions/chatActions";

// при нажатии на кнопку Add или Edit
const useSaveChat = (chatData, setChatData, editedChat) => {
    const {title, description} = chatData;
    const dispatch = useDispatch();

    const clearInput = () => {
        setChatData({...chatData, title: '', description: ''});
    }

    // при нажатии на кнопку Add или Edit
    const doSaveChat = (e) => {
        e.preventDefault();
        if (!title || !description) {
            console.log('Не заполнены поля');
            return;
        }
        if (editedChat?.id) {
            // редактирование данных чата
            db.child("chats").child(editedChat.id).set({ title, description }, (e) => {
                e && console.log(e);
            });
            dispatch(resetEditedChat());
        } else {
            // создание чата
            db.child("chats").push(chatData, (e) => {
                e && console.log(e);
            });
        }
        clearInput();
    }

    return {
        doSaveChat,
    }
}

export default useSaveChat;