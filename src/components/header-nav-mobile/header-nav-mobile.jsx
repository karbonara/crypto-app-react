import { Link } from 'react-router-dom';
import {
    HeaderNavMobileWrapper,
    HeaderNavMobileUl
} from './header-nav-mobile-styled';

function HeaderNavMobile({ handleToggleClose, toggle }) {
    return (
        <>
            {toggle && <HeaderNavMobileWrapper>
                <input onClick={handleToggleClose} type="checkbox" />
                <nav>
                    <HeaderNavMobileUl>
                        <li>
                            <Link to="/">Криптовалюты</Link>
                        </li>
                        <li>
                            <Link to="/">Криптовалюты</Link>
                        </li>
                        <li>
                            <Link to="/">Криптовалюты</Link>
                        </li>
                        <li>
                            <Link to="/">Криптовалюты</Link>
                        </li>
                        <li>
                            <Link to="/">Криптовалюты</Link>
                        </li>
                    </HeaderNavMobileUl>
                </nav>
            </HeaderNavMobileWrapper>}
        </>
    );
}

export default HeaderNavMobile;
