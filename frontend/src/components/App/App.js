import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import './style.css';

import Header from "../Header";
import Sidebar from "../Sidebar";
import Content from '../Content';

export default function App() {
	return (
		<Router>
			<div className='app'>
				<Sidebar />
				<div className='app__content'>
					<HeaderWithRoute />
					<Content />
				</div>
			</div>
		</Router>
	)
}

function HeaderWithRoute() {
	const location = useLocation();
	let title;

	switch (location.pathname) {
		case '/':
			title = 'АДМИН-ПАНЕЛЬ';
			break;
		case '/timetable':
			title = 'РАСПИСАНИЕ ИГР';
			break;
		case '/promo':
			title = 'ПРОМОКОДЫ';
			break;
		case '/staff':
			title = 'СОТРУДНИКИ';
			break;
		case '/users':
			title = 'ПОЛЬЗОВАТЕЛИ';
			break;
		default: 
			title = '404';
			break;
	}

	return <Header title={title} />;
}