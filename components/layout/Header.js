import React, {useState} from 'react';
import NavBar from "../navbar/NavBar";
import Burger from "../Burger";
import Container from "./Container";
import Link from 'next/link';

const Header = () => {
	const [navOpen, setNavOpen] = useState(false)
	return (
		<header className={"bg-dark py-5 fixed w-full z-50"}>
			<Container>
				<div className={"flex justify-between items-center"}>
					<Link href="/">
						<a>
							<div className={"font-bold"}>
								dom <span className={"font-thin text-primary"}>the dev</span>
							</div>
						</a>
					</Link>
					<Burger navOpen={navOpen} setNavOpen={setNavOpen}/>
					<NavBar navOpen={navOpen} setNavOpen={setNavOpen}/>
				</div>
			</Container>
		</header>
	);
};

export default Header;
