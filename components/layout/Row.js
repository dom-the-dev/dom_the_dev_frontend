import React from 'react';
import PropTypes from 'prop-types';

const Row = ({children}) => {
    return (
        <div className={"flex flex-wrap py-8 px-4"}>
            {children}
        </div>
    );
};

Row.propTypes = {};

export default Row;
