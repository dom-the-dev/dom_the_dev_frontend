import React from 'react';
import PropTypes from 'prop-types';
import NavBarList from "./NavBarList";

const NavBar = ({navOpen, setNavOpen}) => (
	<div className={`transition-transform transform ease-in ease-out duration-300 ${navOpen ? "" : "translate-x-full"} 
                    md:translate-x-0 md:block 
                    fixed md:static 
                    bg-primary md:bg-transparent 
                    left-0 right-0 top-0 bottom-0
                    text-dark md:text-white
                    p-5 md:py-0
                    `}>

		<button onClick={() => setNavOpen(!navOpen)} type="button" className={"md:hidden"}>
			<span className="sr-only">Close Menu</span>
			<div className={"w-7 rounded h-0.5 bg-white my-1.5 transform origin-top-left rotate-45"}/>
			<div className={"w-7 rounded h-0.5 bg-white mt-5 transform origin-top-left -rotate-45"}/>
		</button>

		<NavBarList navOpen={navOpen} setNavOpen={setNavOpen}/>
	</div>
);

NavBar.propTypes = {
	navOpen: PropTypes.bool.isRequired,
};


export default NavBar;
