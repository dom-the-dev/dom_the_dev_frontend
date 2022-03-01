import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import NavBarListItem from "./NavBarListItem";
import {RiSunLine} from "@react-icons/all-files/ri/RiSunLine";
import {FaGlasses} from "@react-icons/all-files/fa/FaGlasses";

const NavBarList = ({setNavOpen, navOpen}) => {
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

        setNavOpen(false)
        setDarkMode(!darkMode)
        document.documentElement.classList.toggle('dark')
    }

    const DarkModeSwitch = () => (
        <button className={`bg-primary text-sm p-2 text-dark rounded-full text-white z-50`} onClick={switchDarkMode}>
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
    )

    return (
        <ul className={`md:flex`}>
            <li className={`px-2 mt-10 md:mt-0 text-right text-4xl md:text-base`}>
                <button onClick={() => setNavOpen(!navOpen)} type={`button`} className={`md:hidden`}>
                    <span className={`sr-only`}>Close Menu</span>
                    <div className={`w-8 rounded h-0.5 bg-white my-1.5 transform origin-top-left rotate-45`}/>
                    <div className={`w-8 rounded h-0.5 bg-white mt-5 transform origin-top-left -rotate-45`}/>
                </button>
            </li>

            <li className={`px-2 mt-10 md:mt-0 text-right text-4xl md:text-base`}>
                <DarkModeSwitch/>
            </li>

            <NavBarListItem anchor={`#projects`} title={`projects`} navOpen={navOpen} setNavOpen={setNavOpen}/>
            <NavBarListItem anchor={`#youtube`} title={`youtube`} navOpen={navOpen} setNavOpen={setNavOpen}/>
            <NavBarListItem anchor={`#github`} title={`github`} navOpen={navOpen} setNavOpen={setNavOpen}/>
            <NavBarListItem anchor={`cv.pdf`} newTab={true} title={`cv`} navOpen={navOpen} setNavOpen={setNavOpen}/>

            <NavBarListItem cta={true} anchor={`#contact`} title={`contact`} navOpen={navOpen} setNavOpen={setNavOpen}/>
        </ul>
    );
};

NavBarList.propTypes = {
    setNavOpen: PropTypes.func.isRequired,
    navOpen: PropTypes.bool.isRequired
};

export default NavBarList;