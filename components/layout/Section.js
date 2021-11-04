import React from 'react';
import PropTypes from 'prop-types';

const Section = ({children, id, title, verticalCenter, moreLink, moreTitle}) => {
	return (
		<div id={id} className={`flex ${verticalCenter ? "h-screen items-center" : "pt-20"}`}>
			<div>
				<div className={`relative inline-block mb-8`}>
					<div className={`bg-primary w-full h-full absolute transform -rotate-6`}/>
					<h2 className={"relative font-bold inline-block"}
						style={{textShadow: "2px 3px 1px #000000"}}>
						{title}
					</h2>
				</div>
				{moreLink && moreTitle &&
				<a className={"ml-3 text-primary hover:underline"}
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