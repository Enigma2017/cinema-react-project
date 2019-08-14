import React from 'react';

import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { User } from './User';

export const Header = () => (
	<header>
		<div className="container">
			<div className="row">
				<div className="col-4">
					<Logo />
				</div>
				<div className="col-5">
					<Navbar />
				</div>
				<div className="col-3">
					<User />
				</div>
			</div>
		</div>
	</header>

);