import HeaderNav from "../header-nav/header-nav";
import TickerLive from "../ticker-live/ticker-live";

function Header({ dataCrtypto }) {
    return (
        <>
            <TickerLive dataCrtypto={dataCrtypto} />
            <HeaderNav />
        </>
    );
}

export default Header;
