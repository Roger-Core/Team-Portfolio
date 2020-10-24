import React from 'react';

const Card = ({ photo, title, description, url }) => {
	return (
		<div
			style={{ width: '28rem', margin: '20px', borderRadius: '8px' }}
			className='card-deck'>
			<div className='card'>
				<img src={photo} className='card-img-top' alt='...' />
				<div className='card-body'>
					<h5 className='card-title'>{title}</h5>
					<p className='card-text'>{description}</p>
				</div>
				<div className='card-footer'>
					<small className='text-muted'>{url}</small>
				</div>
			</div>
		</div>
	);
};

export default Card;
