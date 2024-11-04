import React from 'react';
import './style.css';

export default function Card({ info, group }) {
    return (
        <div className={`card${group !== undefined ? ` card--${group}` : ''}`}>
            {/* <span className='card__status'>НОВЫЙ</span> */}
            <div className='card__info'>
                {info.map((item, index) => {
                    const [ label, value ] = item.split(': ');
                    return (
                        <div key={index} className='card__time'>{label}: <span className='card__span'>{value}</span></div>
                    )
                })}
            </div>
            <button className='card__details'>ПОДРОБНЕЕ</button>
        </div>
    )
}