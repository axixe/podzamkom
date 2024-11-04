import React from "react";
import { Routes, Route } from 'react-router-dom';
import './style.css';

import Timetable from '../../pages/Timetable';
import Promo from '../../pages/Promo';
import Staff from '../../pages/Staff';
import Users from '../../pages/Users';

export default function Content() {
    return (
        <>
            <Routes>
                <Route path='/timetable' element={<Timetable />} />
                <Route path='/promo' element={<Promo />} />
                <Route path='/staff' element={<Staff />} />
                <Route path='/users' element={<Users />} />
            </Routes>
        </>
    )
}