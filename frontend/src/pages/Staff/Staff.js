import React, { useState } from 'react';
import './style.css';

import Input from '../../components/formComponents/Input';
import Button from '../../components/formComponents/Button';
import Card from '../../components/Card';
import InputDropdown from '../../components/formComponents/InputDropdown';
import Checkbox from '../../components/formComponents/Checkbox';

export default function Staff() {
    const [ form, setForm ] = useState({
        inputs: [
            {
                label: 'USERNAME ПОЛЬЗОВАТЕЛЯ',
                maxl: '20',
                valid: 'ИМЯ ПОЛЬЗОВАТЕЛЯ НЕ НАЙДЕНО',
                value: ''
            }
        ],
        dropdowns: [
            {
                label: 'ДОЛЖНОСТЬ',
                data: ['СТАЖЁР', 'АКТЁР', 'АДМИНИСТРАТОР'],
                valid: 'ВЫБЕРИТЕ НОВУЮ ДОЛЖНОСТЬ ПОЛЬЗОВАТЕЛЯ',
                value: ''
            }
        ],
        checkboxes: [
            {
                label: 'ЗАПИСИ',
                value: false
            },
            {
                label: 'ПРОМО',
                value: false
            },
            {
                label: 'СОТРУД.',
                value: false
            },
            {
                label: 'ОТЗЫВЫ',
                value: false
            }
        ]
    });

    const staffs = [
        {
            id: 1,
            name: 'ВАРЯ',
            post: 'АДМИН'
        },
        {
            id: 2,
            name: 'АЛЕКСАНДР',
            post: 'АКТЁР'
        },
        {
            id: 3,
            name: 'ЯРИК',
            post: 'АКТЁР'
        },
        {
            id: 4,
            name: 'БОРИС',
            post: 'АКТЁР'
        }
    ];

    const handleChange = (type, index, newValue) => {
        setForm(prevForm => ({
            ...prevForm,
            [type]: prevForm[type].map((item, i) => 
                i === index ? {...item, value: newValue} : item
            )
        }));

        console.log(form.checkboxes);
    };

    const validTest = () => {

    };

    return (
        <section className='staff'>
            <form action='' className='staff__container-form'>
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
                
                {form.dropdowns.map(({ label, value, valid, data }, index) => (
                    <InputDropdown 
                        key={index}
                        label={label}
                        content={value}
                        options={data}
                        error={valid}
                        changeDropdownStatus={(selectedValue) => handleChange('dropdowns', index, selectedValue)}
                    />
                ))}

                <h3 className='staff__subtitle'>ПРАВА ПОЛЬЗОВАТЕЛЯ:</h3>

                <div className='staff__access-rights-wrapper'>
                    {form.checkboxes.map(({ label, value }, index) => (
                        <Checkbox
                            key={index}
                            label={label}
                            content={value}
                            changeCheckStatus={(e) => handleChange('checkboxes', index, e.target.checked)}
                        />
                    ))}
                </div>
                <Button btnName='ДОБАВИТЬ' status='wide' />
            </form>

            <div className='staff__container-staff'>
                {staffs.map(({ id, name, post }) => (
                    <Card
                        key={id}
                        info={[`ИМЯ: ${name}`, `ДОЛЖНОСТЬ: ${post}`]}
                    />
                ))}
            </div>
        </section>
    )
}