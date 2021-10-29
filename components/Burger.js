import React from 'react';
import PropTypes from 'prop-types';

const Burger = ({navOpen, setNavOpen}) => {

    return (
        <button onClick={() => setNavOpen(!navOpen)} type="button">
            {navOpen ? 'open' : 'closed'}
            <div/>
            <div/>
            <div/>
        </button>
    );
};

Burger.propTypes = {
    navOpen: PropTypes.bool.isRequired,
    setNavOpen: PropTypes.func.isRequired,
};

export default Burger;
