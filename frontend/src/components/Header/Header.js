import React, { useState } from "react";
import './style.css';

import DropdownList from '../formComponents/DropdownList';

export default function Header({ title }) {
    const [notificationsStatus, setNotificationsStatus] = useState(false);

    const handleNotificationsClick = () => {
        setNotificationsStatus(!notificationsStatus);
    }

    return (
        <header className='header'>
            <div className='header__row'>
                <h1 className='header__title'>{title}</h1>

                <div className='header__active-panel'>
                    <div className='header__stroke header__stroke--vertical'></div>

                    <div className='header__notifications-wrapper'>
                        <button className='header__notifications' onClick={handleNotificationsClick}>
                            <i className="fa-solid fa-bell icon header__active-panel-icon"></i>
                            <div className='header__notifications-count'>9+</div>
                        </button>
                    </div>

                    <i className="icon header__active-panel-icon fa-solid fa-gear"></i>
                    <div className='header__avatar'></div>
                </div>

            </div>

            <div className='header__stroke header__stroke--horizontal'></div>
        </header>
    )
}

function HeaderDropdownList() {
    return (
        ul.header-dropdown>li.header-dropdown__item
    )
}