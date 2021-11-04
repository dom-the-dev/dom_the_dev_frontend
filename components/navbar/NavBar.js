import React from 'react';
import PropTypes from 'prop-types';
import NavBarList from "./NavBarList";

const NavBar = ({navOpen, setNavOpen}) => (
	<div className={`transition-transform transform ease-in ease-out duration-300 ${navOpen ? "" : "-translate-y-full md:-translate-y-0"} 
                    md:translate-x-0 md:block 
                    fixed md:static 
                    bg-dark md:bg-transparent 
                    left-0 right-0 top-0 bottom-0
                    text-primary md:text-white
                    p-5 md:py-0
                    border-b-2 border-primary md:border-0
                    `}>

		<NavBarList navOpen={navOpen} setNavOpen={setNavOpen}/>
	</div>
);

NavBar.propTypes = {
	navOpen: PropTypes.bool.isRequired,
};


export default NavBar;
