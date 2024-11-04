import React from "react";
import './style.css';

import logo from '../../assets/img/logo.svg';
import { useNavigate, useLocation } from 'react-router-dom';

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
    const location = useLocation();
    const activePath = location.pathname.split('/')[1];

    const buttons = {
        timetable: ['Расписание игр', 'fa-solid fa-calendar-days', 'timetable'],
        promo: ['Промокоды', 'fa-solid fa-ticket', 'promo'],
        staff: ['Сотрудники', 'fa-solid fa-id-card', 'staff'],
        users: ['Пользователи', 'fa-solid fa-user', 'users']
    };

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(`/${path}`);
    }

    return (
        <ul className='sidebar__button-wrapper'>
            {Object.entries(buttons).map(([key, [text, iconClass, link]]) => (
                <li 
                    key={key} 
                    className={`sidebar__button${activePath === link ? ' sidebar__button--active' : ''}`}
                    onClick={() => handleNavigate(link)}
                >
                    <i className={`${iconClass} icon`}></i>
                    {text}
                </li>
            ))}
        </ul>
    )
}