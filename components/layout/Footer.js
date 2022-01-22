import React from 'react';
import Container from "./Container";
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className={"py-5 bg-dark dark:bg-white text-white dark:text-dark"}>
			<Container>
					<div className={"text-center"}>
						<div className={"font-normal"}>
							dom <span className={"font-thin text-primary"}>the dev</span>
						</div>

						<div className={"text-xs"}>
							<Link href="/impressum">
								<a>Impressum</a>
							</Link>
						</div>
					</div>
			</Container>
		</footer>
	);
};

export default Footer;
