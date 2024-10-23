import React from "react";
import './style.css';

import logo from '../../assets/img/logo.svg';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__background'></div>
            <div className='sidebar__content'>
                <img className='sidebar__logo' src={logo} alt='logo' />

                <SidebarButtons />
            </div>
        </div>
    )
}

function SidebarButtons() {
    const buttons = {
        timetable: ['Расписание игр', 'fa-solid fa-calendar-days'],
        promo: ['Промокоды', 'fa-solid fa-ticket'],
        staff: ['Сотрудники', 'fa-solid fa-id-card'],
        users: ['Пользователи', 'fa-solid fa-user'],
        home: ['На главную', 'fa-solid fa-house'],
        support: ['Поддержка', 'fa-solid fa-headset']
    };

    return (
        <ul className='sidebar__button-wrapper'>
            {Object.entries(buttons).map(([key, [text, iconClass]]) => (
                <li key={key} className='sidebar__button'>
                    <i className={`${iconClass} icon`}></i>
                    {text}
                </li>
            ))}
        </ul>
    )
}