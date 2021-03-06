import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const NavBarListItem = ({anchor, title, setNavOpen, navOpen, cta, link, newTab}) => {

	const ListItem = ({children}) => (
		<li className={`px-2 mt-10 md:mt-0 text-right text-4xl md:text-base `}>
			{children}
		</li>
	)

	if (anchor) {
		return (
			<ListItem>
			<a href={anchor}
			   target={newTab ? "_blank" : "_self"}
			   rel={"noreferrer"}
			   className={`px-3 py-1  hover:text-primary ${cta ? "border border-primary hover:bg-primary  rounded-2xl hover:text-dark transition text-primary bg-transparent" : ""}`}
			   onClick={() => setNavOpen(!navOpen)}>
				{title}
			</a>
			</ListItem>
		);
	}

	if (link) {
		return (
			<ListItem>
				<Link href={link}>
					<a
						className={`px-2 py-1  hover:text-primary ${cta ? "bg-primary text-dark hover:text-dark" : ""}`}
						onClick={() => setNavOpen(!navOpen)}>
						{title}
					</a>
				</Link>
			</ListItem>
		)
	}
};

NavBarListItem.propTypes = {
	anchor: PropTypes.string,
	link: PropTypes.string,
	title: PropTypes.string.isRequired,
	setNavOpen: PropTypes.func.isRequired,
	navOpen: PropTypes.bool.isRequired,
	cta: PropTypes.bool.isRequired,
	newTab: PropTypes.bool
};

NavBarListItem.defaultProps = {
	cta: false
}

export default NavBarListItem;