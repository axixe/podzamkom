import React, { useId } from "react";
import './style.css';

export default function Input({ label, minl, maxl, value, error, onChange = () => {} }) {
    const id = useId();

    return (
        <div className='input-wrapper'>
            <div className='input-content'>
                <input 
                    type='text'
                    placeholder=' '
                    value={value}
                    className='input-content__element'
                    id={id}
                    minLength={minl}
                    maxLength={maxl}
                    onChange={onChange}
                />
                <label htmlFor={id} className='input-content__label'>{label}</label>
            </div>

            {error && <span className='validation'>{error}</span>}
        </div>
    )
}