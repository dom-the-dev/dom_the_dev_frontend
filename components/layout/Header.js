import React, {useState, useEffect} from 'react';
import NavBar from "../navbar/NavBar";
import Burger from "../Burger";
import Container from "./Container";
import Link from 'next/link';
import {FaGlasses} from "@react-icons/all-files/fa/FaGlasses";
import {RiSunLine} from "@react-icons/all-files/ri/RiSunLine";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined' && localStorage.theme === "dark") {
            setDarkMode(true)
        }
    }, []);

    const switchDarkMode = () => {
        if (darkMode) {
            localStorage.removeItem("theme")
        } else {
            localStorage.setItem("theme", "dark")
        }

        setDarkMode(!darkMode)
        document.documentElement.classList.toggle('dark')
    }

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
                    <button className={`text-white`} onClick={switchDarkMode}>
                        {darkMode ?
                            <>
                                <span className="sr-only">set light mode</span>
                                <RiSunLine title={"Light on"}/>
                            </>
                            :
                            <>
                                <span className="sr-only">set dark mode</span>
                                <FaGlasses title={"Light off"}/>
                            </>
                        }
                    </button>
                    {/*<Burger navOpen={navOpen} setNavOpen={setNavOpen}/>*/}
                    {/*<NavBar navOpen={navOpen} setNavOpen={setNavOpen}/>*/}
                </div>
            </Container>
        </header>
    );
};

export default Header;
