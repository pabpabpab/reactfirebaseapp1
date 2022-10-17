import { Route, Routes } from 'react-router-dom';

import Contacts from '../components/Contacts';
import Messages from '../components/Messages';
import NoChat from '../components/NoChat';
import SaveMessage from '../components/SaveMessage';

import ProfileTitle from '../components/ProfileTitle';
import SaveChat from '../components/SaveChat';

function MessengerPage() {
    return (
        <div className="messenger-app">
            <SaveChat/>
            <Contacts/>
            <ProfileTitle/>
            <Routes>
                <Route index element={<NoChat/>}/>
                <Route path="chat/:chatId" element={<Messages/>}/>
            </Routes>
            <SaveMessage/>
        </div>
    );
}

export default MessengerPage;