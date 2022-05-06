import { Link } from 'react-router-dom';
import {
    HeaderNavWrapper,
    HeaderNavWrapperBorder,
    HeaderNavUl
} from './header-nav-styled';
import {
    ButtonBlue,
    ButtonWhite
} from '../../components-styled/buttons-styled';

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
                    </HeaderNavUl>
                    <div>
                        <input onClick={handleToggle} type="checkbox" />
                        <ButtonWhite>Вход</ButtonWhite>
                        <ButtonBlue>Зарегистрироваться</ButtonBlue>
                    </div>
                </HeaderNavWrapper>
            </HeaderNavWrapperBorder>

        </>
    );
}

export default HeaderNav;
