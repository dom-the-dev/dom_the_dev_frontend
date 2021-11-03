import React from 'react';
import PropTypes from 'prop-types';

const Section = ({children, id, title, verticalCenter}) => {
	return (
		<div id={id} className={`flex ${verticalCenter ? "h-screen items-center" : "pt-20"}`}>
			<div>
				<h2 className={"font-bold mb-10"}>{title}</h2>
				{children}
			</div>
		</div>
	);
};

Section.propTypes = {
	children: PropTypes.node.isRequired,
	id: PropTypes.string.isRequired,
	title: PropTypes.string,
	verticalCenter: PropTypes.bool,
};

export default Section;