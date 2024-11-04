import React from 'react';
import './style.css';

export default function DropdownList({ listItems, changeStatus }) {
    const handleClick = (e) => {
        changeStatus(e.target.textContent);
    };

    return (
        <ul className='dropdown-list'>
            {listItems.map(item => (
                <li 
                    key={item} 
                    className='dropdown-list__item' 
                    onClick={handleClick}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}
