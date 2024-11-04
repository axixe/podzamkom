import React from 'react';
import './style.css';

export default function Checkbox({ label, content, changeCheckStatus }) {
    return (
        <label className="checkbox">
            <input type="checkbox" className="checkbox__input" checked={content} onChange={changeCheckStatus} />
            <span className="checkbox__element"></span>
            <span className="checkbox__label">{label}</span>
        </label>
    )
}