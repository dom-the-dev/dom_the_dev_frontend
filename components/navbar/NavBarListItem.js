import React from 'react';
import PropTypes from 'prop-types';

const NavBarListItem = ({anchor, title, setNavOpen, navOpen, cta}) => {
	return (
		<li className={`px-2 mt-10 md:mt-0 text-right text-4xl md:text-base `}>
			<a href={anchor} className={`px-2 py-1 rounded hover:text-primary ${cta ? "text-right bg-dark md:bg-primary text-white hover:text-dark" : ""}`} onClick={() => setNavOpen(!navOpen)}>
				{title}
			</a>
		</li>
	);
};

NavBarListItem.propTypes = {
	anchor: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	setNavOpen: PropTypes.func.isRequired,
	navOpen: PropTypes.bool.isRequired,
	cta: PropTypes.bool.isRequired
};

NavBarListItem.defaultProps = {
	cta: false
}

export default NavBarListItem;