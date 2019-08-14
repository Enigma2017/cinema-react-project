import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
	<div>
		<nav className="navbar-menu d-flex justify-content-around">
			<NavLink to="/">All films</NavLink>
			<NavLink to="/schedule">Schedule</NavLink>
		</nav>
	</div>
);