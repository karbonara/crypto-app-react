import { Link } from 'react-router-dom';
import {
    HeaderNavWrapper,
    HeaderNavWrapperBorder,
    HeaderNavUl,
} from './header-nav-styled';
import {
    ButtonBlue,
    ButtonWhite
} from '../../components-styled/buttons-styled';
import './style.css'

function HeaderNav({ handleToggle }) {
    return (
        <>
            <HeaderNavWrapperBorder>
                <HeaderNavWrapper>
                    <Link to="/">
                        <img
                            width={160}
                            src="https://s2.coinmarketcap.com/static/cloud/img/cmc-birthday-logo-black.png?_=0270cfe"
                            alt="logo"
                        />
                    </Link>
                    <HeaderNavUl>
                        <li>
                            <Link to="/cryptocurrencies">Криптовалюты</Link>
                        </li>
                        <li>
                            <Link to="/exchanges">Биржи</Link>
                        </li>
                        <li>
                            <Link to="/more">Подробнее</Link>
                        </li>
                        <li>
                            <Link to="/about">О нас</Link>
                        </li>
                    </HeaderNavUl>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input onClick={handleToggle} id="menu__toggle" type="checkbox" />
                        <label className="menu__btn" htmlFor="menu__toggle">
                            <span></span>
                        </label>
                        {/* 
                        <HeaderNavInput onClick={handleToggle} id="menu__toggle" type="checkbox"></HeaderNavInput>
                        <HeaderNavLabel htmlFor="menu__toggle"></HeaderNavLabel> */}

                        <ButtonWhite>Вход</ButtonWhite>
                        <ButtonBlue>Зарегистрироваться</ButtonBlue>
                    </div>
                </HeaderNavWrapper>
            </HeaderNavWrapperBorder>

        </>
    );
}

export default HeaderNav;
