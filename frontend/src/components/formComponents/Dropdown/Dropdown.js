import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import DropdownList from '../DropdownList';

export default function Dropdown({ title, status, data, changeDropdownStatus }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

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

    const handleChangeStatus = (value) => {
        changeDropdownStatus(value);
        closeDropdown();
    };

    return (
        <div className='dropdown-container' ref={dropdownRef}>
            <button className='dropdown' onClick={toggleDropdown}>
                <span className='dropdown__name'>{title}:</span>
                <span className='dropdown__configuration'>{status}</span>
            </button>

            {isOpen && <DropdownList listItems={data} changeStatus={handleChangeStatus} />}
        </div>
    );
}
