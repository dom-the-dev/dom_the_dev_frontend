import React from 'react';
import PropTypes from 'prop-types';

const Container = ({children}) => {
	return (
		<div className={"container px-5 md:px-2 max-w-xl"}>
			{children}
		</div>
	);
};

Container.propTypes = {
	children: PropTypes.node.isRequired
};

export default Container;