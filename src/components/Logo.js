import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => (
	<div>
		<Link to="/" className="logo-top">
			<p>React<i className="fa fa-video-camera"></i></p>
			<p>Cinema</p>
		</Link>
	</div>
);