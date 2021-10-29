import React from 'react';
import PropTypes from 'prop-types';

const Col = ({children}) => {
    return (
        <div className={"w-full md:w-1/2"}>
            {children}
        </div>
    );
};

Col.propTypes = {

};

export default Col;
