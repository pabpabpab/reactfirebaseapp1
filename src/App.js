import './App.sass';
import theme from './theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import {Route, Routes} from 'react-router-dom';
import {Fragment} from "react";

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import MessengerPage from './pages/MessengerPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {

    return (
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
                    <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
                    <Route path="/messenger/*" element={<MessengerPage />} />
                    <Route path="/profile/:userId" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </ThemeProvider>
    );
}

export default App;
/*
<Route path="/messenger/*" element={<PrivateRoute><MessengerPage /></PrivateRoute>} />
 */