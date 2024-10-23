import React from "react";
import './style.css';

export default function Header({ title }) {
    return (
        <header className='header'>
            <div className='header__row'>
                <h1 className='header__title'>{title}</h1>

                <div className='header__active-panel'>
                    <div className='header__stroke header__stroke--vertical'></div>

                    <div className='header__notifications-wrapper'>
                        <i className="icon header__active-panel-icon fa-solid fa-bell"></i>
                        <div className='header__notifications'>99+</div>
                    </div>

                    <i className="icon header__active-panel-icon fa-solid fa-gear"></i>
                    <div className='header__avatar'></div>
                </div>

            </div>

            <div className='header__stroke header__stroke--horizontal'></div>
        </header>
    )
}