import React from 'react';
import Container from "./Container";

const Footer = () => {
	return (
		<footer className={"py-5"}>
			<Container>
					<div className={"flex justify-center items-center"}>
						<div className={"font-bold"}>
							dom <span className={"font-thin text-primary"}>the dev</span>
						</div>
					</div>
			</Container>
		</footer>
	);
};

export default Footer;
