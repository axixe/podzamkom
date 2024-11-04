import React, { useState } from 'react';
import './style.css';

import Input from '../../components/formComponents/Input';
import Button from '../../components/formComponents/Button';
import Card from '../../components/Card';

export default function Promo() {
    const [ form, setForm ] = useState({
        inputs: [
            {
                label: 'ПРОМОКОД',
                maxl: '20',
                valid: '',
                value: ''
            },
            {
                label: 'СРОК ДЕЙСТВИЯ ПРОМОКОДА (В ДНЯХ)',
                maxl: '2',
                valid: 'КОЛИЧЕСТВО СИМВОЛОВ НЕ МОЖЕТ ПРЕВЫШАТЬ 2 СИМВОЛОВ',
                value: ''
            },
            {
                label: 'СКИДКА (В ПРОЦЕНТАХ)',
                maxl: '2',
                valid: '',
                value: ''
            }
        ]
    });

    const promocodes = [
        {
            id: 1,
            promo: '#newYear2024'
        },
        {
            id: 2,
            promo: '#newYear2023'
        },
        {
            id: 3,
            promo: '#newYear2022'
        },
        {
            id: 4,
            promo: '#newYear2021'
        }
    ];

    const handleChange = (type, index, newValue) => {
        setForm(prevForm => ({
            ...prevForm,
            [type]: prevForm[type].map((item, i) => 
                i === index ? {...item, value: newValue} : item
            )
        }));
    };

    const validTest = (e) => {
        
    };

    return (
        <section className='promo'>
            <form action='' className='promo__container-form'>
                {form.inputs.map(({ label, maxl, minl, valid, value }, index) => (
                    <Input
                        key={index}
                        label={label}
                        minl={minl}
                        maxl={maxl}
                        error={valid}
                        value={value}
                        onChange={(e) => handleChange('inputs', index, e.target.value)}
                    />
                ))}
                <Button btnName='СОЗДАТЬ' status='wide' />
            </form>

            <div className='promo__container-promo'>
                {promocodes.map(({ id, promo }) => (
                    <Card
                        key={id}
                        info={[`ПРОМОКОД: ${promo}`]}
                    />
                ))}
            </div>
        </section>
    )
}