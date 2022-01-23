import React, {useState, useEffect} from 'react';
import NavBar from "../navbar/NavBar";
import Burger from "../Burger";
import Container from "./Container";
import Link from 'next/link';
import {FaGlasses} from "@react-icons/all-files/fa/FaGlasses";
import {RiSunLine} from "@react-icons/all-files/ri/RiSunLine";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <header className={"bg-dark py-5 fixed w-full z-50"}>
            <Container>
                <div className={"flex justify-between items-center"}>
                    <Link href="/">
                        <a>
                            <div className={"font-normal text-white"}>
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
