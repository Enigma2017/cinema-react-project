import React from 'react';

export const InfoBlock = ({title, text}) => (
	<div className="movie-info-block d-flex">
		<p className="movies">{title}</p>
		<p className="movies-info">{text}</p>
	</div>
);