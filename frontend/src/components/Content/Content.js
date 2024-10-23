import React from "react";
import { Routes, Route } from 'react-router-dom';
import './style.css';

import Timetable from "../../pages/Timetable";

export default function Content() {
    return (
        <>
            <Routes>
                <Route path='/timetable' element={<Timetable />} />
            </Routes>
        </>
    )
}