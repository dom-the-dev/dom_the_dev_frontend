import React, {useState} from 'react';
import NavBar from "../NavBar";
import Burger from "../Burger";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    return (
        <div>
            <div>
                dom the dev
            </div>
            <Burger navOpen={navOpen} setNavOpen={setNavOpen}/>
            <NavBar navOpen={navOpen}/>
        </div>
    );
};

export default Header;
