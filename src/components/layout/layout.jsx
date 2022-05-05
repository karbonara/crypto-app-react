import { Outlet } from 'react-router-dom';
import Header from '../header/header';

function Layout({ dataCrtypto }) {
    return (
        <>
            <header>
                <Header dataCrtypto={dataCrtypto} />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
