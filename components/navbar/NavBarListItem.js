import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const NavBarListItem = ({anchor, title, setNavOpen, navOpen, cta, link}) => {

	if (anchor) {
		return (
			<li className={`px-2 mt-10 md:mt-0 text-right text-4xl md:text-base `}>
				<a href={anchor}
				   className={`px-2 py-1  hover:text-primary ${cta ? "bg-primary text-dark hover:text-dark" : ""}`}
				   onClick={() => setNavOpen(!navOpen)}>
					{title}
				</a>
			</li>
		);
	}

	if (link) {
		return (
			<li className={`px-2 mt-10 md:mt-0 text-right text-4xl md:text-base `}>
				<Link href={link}>
					<a
						className={`px-2 py-1  hover:text-primary ${cta ? "bg-primary text-dark hover:text-dark" : ""}`}
						onClick={() => setNavOpen(!navOpen)}>
						{title}
					</a>
				</Link>
			</li>
		)
	}
};

NavBarListItem.propTypes = {
	anchor: PropTypes.string,
	link: PropTypes.string,
	title: PropTypes.string.isRequired,
	setNavOpen: PropTypes.func.isRequired,
	navOpen: PropTypes.bool.isRequired,
	cta: PropTypes.bool.isRequired
};

NavBarListItem.defaultProps = {
	cta: false
}

export default NavBarListItem;