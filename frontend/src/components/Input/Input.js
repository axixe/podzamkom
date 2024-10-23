import React from "react";
import './style.css';

export default function Input() {
    return (
        <div className='input-wrapper'>
            <label className='input-wrapper__label' htmlFor='inp'>ПРОМОКОД</label>
            <input className='input-wrapper__element' type='text' placeholder='НАПРИМЕР: #newYear24' id='inp' />
        </div>
    )
}