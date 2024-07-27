import React, { useState } from 'react';

function Navigation() {
	const [activeItem, setActiveItem] = useState(true)
	return (
		<>
			<nav className='py-2'>
				<ul className="d-flex justify-content-center navbar-nav-custom gap-2" id="nav-ul">
					<li className="nav-item-custom px-3 py-2">
						<a href="#about" className={`nav-link-custom ${activeItem ? 'active':''}`} onClick={() => setActiveItem(a => a = true)}>about her</a>	
					</li>
					<li className="nav-item-custom px-3 py-2">
						<a href="#contact" className={`nav-link-custom ${activeItem == false ? 'active':''}`} onClick={() => setActiveItem(a => a = false)}>contact</a>	
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navigation;