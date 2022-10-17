import React, {useState} from 'react';
import useGetEditedChat from "../myHooks/useGetEditedChat";
import useSaveChat from "../myHooks/useSaveChat";

const initialState = {
    title: '',
    description: ''
}

const SaveChat = () => {
    const [chatData, setChatData] = useState(initialState);
    const {title, description} = chatData;

    // обработчик на несколько текстовых полей
    const handleChange = (e) => {
        const {name, value} = e.target;
        setChatData({...chatData, [name]: value});
    }

    const { editedChat } = useGetEditedChat(chatData, setChatData);
    const { doSaveChat } = useSaveChat(chatData, setChatData, editedChat);

    return (
        <form onSubmit={doSaveChat} className={'add-contact p-0 m-0 h-full'}>

            <div className="flex flex-col place-items-center justify-between">
                <div className="flex">
                    <label htmlFor={'title'}>Title</label>
                    <input id={'title'} name={'title'} onChange={handleChange} value={title}
                           className={'w-full p-1 border-black border-2'}/>
                </div>
                <div className="flex">
                    <label htmlFor={'description'}>Descr</label>
                    <input id={'description'} name={'description'} onChange={handleChange} value={description}
                           className={'w-full p-1 border-black border-2'}/>
                </div>
            </div>

            <button type="submit" className={'bg-gray-500 border-black border-2'}>
                { editedChat?.id ? 'Edit' : 'Add'}
            </button>
        </form>
    );

};

export default SaveChat;
