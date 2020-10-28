import React from 'react';
import { Link } from 'react-router-dom';

import './Sidedrawer.scss';

const Index = (props) => {
	let drawerClasses = 'side-drawer';

	if (props.show) {
		drawerClasses = 'side-drawer open';
	}

	return (
		<nav className={drawerClasses}>
			<ul>
				<h2
					style={{
						marginBottom: '25px',
						marginLeft: '35px',
						color: '#22ce78',
					}}>
					MENU
				</h2>
				<a href='#home'>
					<i className='fa fa-home' aria-hidden='true'></i>
					<li>Home</li>
					<hr />
				</a>
				<a href='#portfolio'>
					<i className='fas fa-briefcase' aria-hidden='true'></i>
					<li>Portfolio</li>
					<hr />
				</a>
				<a href='#about'>
					<i className='fas fa-users' aria-hidden='true'></i>
					<li>About</li>
					<hr style={{ color: '#22ce78' }} />
				</a>
				<a href='#technologies'>
					<i className='fas fa-address-card' aria-hidden='true'></i>
					<li>Technologies</li>
					<hr />
				</a>
			</ul>
		</nav>
	);
};

export default Index;
