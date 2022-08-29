import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage.jsx';
import LoginPage from '../pages/Login/Login.jsx';

function Pages() {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
        </Routes>

    )
}

export default Pages