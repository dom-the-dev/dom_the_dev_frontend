import React from 'react';
import PropTypes from 'prop-types';
import NavBarListItem from "./NavBarListItem";

const NavBarList = ({setNavOpen, navOpen}) => {
	return (
		<ul className={`md:flex`}>
			<li className={`px-2 mt-10 md:mt-0 text-right text-4xl md:text-base`}>
				<button onClick={() => setNavOpen(!navOpen)} type={`button`} className={`md:hidden`}>
					<span className={`sr-only`}>Close Menu</span>
					<div className={`w-8 rounded h-0.5 bg-white my-1.5 transform origin-top-left rotate-45`}/>
					<div className={`w-8 rounded h-0.5 bg-white mt-5 transform origin-top-left -rotate-45`}/>
				</button>
			</li>
			{/*<NavBarListItem anchor={`#start`} title={`start`} navOpen={navOpen} setNavOpen={setNavOpen}/>*/}
			{/*<NavBarListItem anchor={`#about`} title={`about`} navOpen={navOpen} setNavOpen={setNavOpen}/>*/}
			{/*<NavBarListItem anchor={`#skills`} title={`skills`} navOpen={navOpen} setNavOpen={setNavOpen}/>*/}
			{/*<NavBarListItem anchor={`#github`} title={`github`} navOpen={navOpen} setNavOpen={setNavOpen}/>*/}

			<NavBarListItem cta={true} anchor={`#contact`} title={`contact`} navOpen={navOpen} setNavOpen={setNavOpen}/>
		</ul>
	);
};

NavBarList.propTypes = {
	setNavOpen: PropTypes.func.isRequired,
	navOpen: PropTypes.bool.isRequired
};

export default NavBarList;