import React from 'react';

import Card from '../Components/Card';
import config from '../project-config';

import './Projects.scss';

const { projects } = config;

const Projects = () => {
	return (
		<div className='projects'>
			{projects.map((item) => (
				<Card
					key={item.id}
					title={item.title}
					description={item.description}
					url={item.url}
				/>
			))}
		</div>
	);
};

export default Projects;
