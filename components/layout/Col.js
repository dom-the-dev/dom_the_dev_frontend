import React from 'react';
import PropTypes from 'prop-types';

const Col = ({children, half}) => {
    return (
        <div className={`w-full ${half ? "md:w-1/2" : ""} px-2 pb-6 md:pb-0`}>
            {children}
        </div>
    );
};

Col.propTypes = {
    half: PropTypes.bool,
    children: PropTypes.node.isRequired
};

export default Col;
