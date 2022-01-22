import React from 'react';
import PropTypes from 'prop-types';

const Section = ({children, id, title, verticalCenter, moreLink, moreTitle}) => {
	return (
		<div id={id} className={`bg-white w-full h-full flex ${verticalCenter ? "h-screen items-center" : "pt-20 pb-20"}`}>
			<div className={"w-full"}>
				<div className={`relative inline-block ${moreLink ? "mb-0" : "mb-8"}`}>
					<h2 className={"relative font-normal inline-block"}>
						{title}
					</h2>
				</div>
				{moreLink && moreTitle &&
				<a className={"inline-block mb-10 md:ml-3 text-primary hover:underline"}
				   target={"_blank"}
				   rel={"noreferrer noopener"}
				   href={moreLink}>
					{moreTitle}
				</a>
				}
				<div>
					{children}
				</div>
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