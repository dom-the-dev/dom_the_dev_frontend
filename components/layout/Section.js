import React from 'react';
import PropTypes from 'prop-types';

const Section = ({children, id, title, verticalCenter, moreLink, moreTitle}) => {
	return (
		<div id={id} className={`flex ${verticalCenter ? "h-screen items-center" : "pt-20"}`}>
			<div>
				<h2 className={"font-bold mb-10 inline-block"}>{title}</h2> <a className={"ml-3 text-primary hover:underline"} target={"_blank"} rel={"noreferrer noopener"} href={moreLink}>{moreTitle}</a>
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
	moreLink: PropTypes.string,
	moreTitle: PropTypes.string,
};

export default Section;