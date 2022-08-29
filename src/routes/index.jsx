import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

function Pages() {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<HomePage />} />
        </Routes>

    )
}

export default Pages