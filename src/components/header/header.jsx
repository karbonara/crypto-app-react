import { useState } from "react";
import HeaderNavMobile from "../header-nav-mobile/header-nav-mobile";
import HeaderNav from "../header-nav/header-nav";
import TickerLive from "../ticker-live/ticker-live";

function Header({ dataCrtypto }) {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(true)
    }
    const handleToggleClose = () => {
        setToggle(false)
    }

    return (
        <>
            <TickerLive dataCrtypto={dataCrtypto} />
            <HeaderNav handleToggle={handleToggle} />
            <HeaderNavMobile handleToggleClose={handleToggleClose} toggle={toggle} />
        </>
    );
}

export default Header;
