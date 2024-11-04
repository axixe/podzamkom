import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import DropdownList from '../DropdownList';

export default function InputDropdown({ content, options, error, changeDropdownStatus }) {
    const [ isOpen, setIsOpen ] = useState(false),
          dropdownRef = useRef(null);

    const closeDropdown = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    const handleClick = (e) => {
        e.preventDefault();

        setIsOpen(!isOpen);
    }

    const handleChangeStatus = (value) => {
        changeDropdownStatus(value);
        closeDropdown();
    };


    return (
        <div className='inp-dropdown-wrapper' ref={dropdownRef}>
            <button className='inp-dropdown' onClick={handleClick}>
                <span className={`inp-dropdown__label${content !== '' || isOpen ? ' inp-dropdown__label--filled' : ''}`}>ДОЛЖНОСТЬ</span>
                <span className='inp-dropdown__content'>{content}</span>
                <i className={`fa-solid fa-angle-down fa-lg icon inp-dropdown__icon${isOpen ? ' inp-dropdown__icon--rotate' : ''}`}></i>
            </button>
            {error && <span className='validation'>{error}</span>}

            {isOpen && <DropdownList listItems={options} changeStatus={handleChangeStatus} />}
        </div>
    )
}