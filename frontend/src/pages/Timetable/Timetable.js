import React, { useState } from "react";
import './style.css';

import Button from "../../components/formComponents/Button";
import Dropdown from '../../components/formComponents/Dropdown';
import Card from '../../components/Card';

export default function Timetable() {
    const [status, setStatus] = useState({
        period: {
            status: 1,
            values: ['День', 'Неделя', 'Месяц', 'Всё время']
        },
        sort: {
            status: 0,
            values: ['Сначала ближайшие', 'Сначала дальние']
        }       
    });

    const dropdowns = [
        { title: 'Период', key: 'period' },
        { title: 'Сортировка', key: 'sort' }
    ];

    const handleChangeStatus = (key, value) => {
        setStatus(prevStatus => ({
            ...prevStatus,
            [key]: {
                ...prevStatus[key],
                status: prevStatus[key].values.indexOf(value)
            }
        }));
    };

    const orders = [
        {
            id: 1,
            time: "14:00",
            quest: "КОМА"
        },
        {
            id: 2,
            time: "14:00",
            quest: "СДЕЛКА С ДЬЯВОЛОМ"
        },
        {
            id: 3,
            time: "14:00",
            quest: "ПОБЕГ"
        },
        {
            id: 4,
            time: "14:00",
            quest: "ВИРУС"
        }
    ];
    

    return (
        <section className='timetable'>
            <div className='timetable__header'>
                <div className='timetable__sort-wrapper'>
                    {dropdowns.map(({ title, key }) => (
                        <Dropdown 
                            key={key} 
                            title={title} 
                            status={status[key].values[status[key].status].toLowerCase()} 
                            data={status[key].values}
                            changeDropdownStatus={(value) => handleChangeStatus(key, value)}
                        />
                    ))}
                </div>
                <Button btnName='НОВЫЙ КВЕСТ' />
            </div>

            <div className='timetable__content'>
                <h2 className='timetable__title'>16 НОЯБРЯ - СУББОТА</h2>
                <div className='order-wrapper'>
                    {orders.map(({ id, time, quest }, index) => (
                        <Card
                            key={id} 
                            info={[`ВРЕМЯ: ${time}`, `КВЕСТ: ${quest}`]}
                            group={
                                orders.length <= 1 
                                    ? '' 
                                    : index === 0 
                                        ? 'top' 
                                        : index === orders.length - 1 
                                            ? 'bottom' 
                                            : 'middle'
                            } 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
