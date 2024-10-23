import React from "react";
import './style.css';

import Button from "../../components/Button";

export default function Timetable() {
    return (
        <div className='timetable'>
            <div className='timetable__header'>
                <div className='timetable__sort-wrapper'>
                    <div className='timetable__sort-period'>Период:</div>
                </div>
                <Button btnName='НОВЫЙ КВЕСТ' />
            </div>
        </div>
    )
}