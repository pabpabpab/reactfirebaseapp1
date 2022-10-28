import {useEffect} from 'react';
import {useSelector} from "react-redux";
import {getEditedMessage} from "../redux/selectors";

const useGetEditedMessage = (setMessageBody) => {
    // при редактировании вывести редактируемое сообщение
    const editedMessage = useSelector(getEditedMessage);
    useEffect(() => {
        if (!editedMessage?.id) {
            return;
        }
        // вывод сообщения в инпут
        setMessageBody(editedMessage?.body);
    }, [editedMessage])

    return {
        editedMessage,
    }
}

export default useGetEditedMessage;