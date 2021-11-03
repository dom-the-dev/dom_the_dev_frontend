import React, {useState} from 'react';
import NavBar from "../navbar/NavBar";
import Burger from "../Burger";
import Container from "./Container";

const Header = () => {
	const [navOpen, setNavOpen] = useState(false)
	return (
		<header className={"py-5"}>
			<Container>
				<div className={"flex justify-between items-center"}>
					<div className={"font-bold"}>
						dom <span className={"font-thin text-primary"}>the dev</span>
					</div>
					<Burger navOpen={navOpen} setNavOpen={setNavOpen}/>
					<NavBar navOpen={navOpen} setNavOpen={setNavOpen}/>
				</div>
			</Container>
		</header>
	);
};

export default Header;
