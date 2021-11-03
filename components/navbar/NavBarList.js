import React from 'react';
import PropTypes from 'prop-types';
import NavBarListItem from "./NavBarListItem";

const NavBarList = ({setNavOpen, navOpen}) => {
	return (
		<ul className={"md:flex"}>
			<NavBarListItem anchor={"#start"} title={"start"} navOpen={navOpen} setNavOpen={setNavOpen}/>
			<NavBarListItem anchor={"#about"} title={"about"} navOpen={navOpen} setNavOpen={setNavOpen}/>
			<NavBarListItem anchor={"#skills"} title={"skills"} navOpen={navOpen} setNavOpen={setNavOpen}/>
			<NavBarListItem anchor={"#github"} title={"github"} navOpen={navOpen} setNavOpen={setNavOpen}/>
			<NavBarListItem cta={true} anchor={"#contact"} title={"hire me"} navOpen={navOpen} setNavOpen={setNavOpen}/>
		</ul>
	);
};

NavBarList.propTypes = {
	setNavOpen: PropTypes.func.isRequired,
	navOpen: PropTypes.bool.isRequired
};

export default NavBarList;