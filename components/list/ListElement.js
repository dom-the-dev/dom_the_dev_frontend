import React from 'react';
import PropTypes from 'prop-types';

const ListElement = ({children}) => {
    return (
        <div className={"py-4 border-t"}>
            {children}
        </div>
    );
};

ListElement.propTypes = {
    children: PropTypes.node.isRequired
};

export default ListElement;
