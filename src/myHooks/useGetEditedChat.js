import {useEffect} from 'react';
import {useSelector} from "react-redux";
import {getEditedChat} from "../redux/selectors";

const useGetEditedChat = (chatData, setChatData) => {
    // при редактировании вывести редактируемый чат
    const editedChat = useSelector(getEditedChat);
    useEffect(() => {
        if (!editedChat?.id) {
            return;
        }
        // вывод чата в инпут
        setChatData({
            ...chatData,
            title: editedChat?.title,
            description: editedChat?.description,
        });
    }, [editedChat]);

    return {
        editedChat,
    }
}

export default useGetEditedChat;