import React from 'react';
import PropTypes from 'prop-types';

const Burger = ({navOpen, setNavOpen}) => {

    return (
        <button onClick={() => setNavOpen(!navOpen)} type="button" className={"md:hidden "}>
            <span className="sr-only">Open Menu</span>
            <div className={"w-7 rounded h-0.5 bg-white my-1.5"}/>
            <div className={"w-7 rounded h-0.5 bg-white my-1.5"}/>
            <div className={"w-7 rounded h-0.5 bg-white my-1.5"}/>
        </button>
    );
};

Burger.propTypes = {
    navOpen: PropTypes.bool.isRequired,
    setNavOpen: PropTypes.func.isRequired,
};

export default Burger;
