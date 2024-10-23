import React from "react";
import './style.css';

export default function Button({ btnName, status, isDisabled }) {
    return (
        <button className={`btn${status !== undefined ? ` btn--${status}` : ''}`} disabled={isDisabled}>{btnName}</button>
    )
}