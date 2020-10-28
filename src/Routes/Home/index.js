import React from 'react';
import TechIcons from '../TechIcons';

import './Home.scss';

import Projects from '../../Projects';

const Home = () => {
	return (
		<div className='main'>
			<div id='home' className='presentation'>
				<h1>{'<Hello World />'}</h1>
				<br />
				<div className='story'>
					<h4>We will work together for your creative project.</h4>
				</div>
			</div>
			<Projects />
			<div className='col-md-12 text-center'>
				<h3>Developers Team</h3>
				<p id='about' className='about-us'>
					Our team is highly trained and updated on new trends in web page
					design <br /> to meet the most demanding needs of customers.
					<br /> Contact us for any job: <strong> bedevs.mex@gmail.com</strong>
				</p>
				<h3 id='technologies'>Technologies</h3>
				<p></p>
				<TechIcons />
			</div>
		</div>
	);
};

export default Home;
