import styled from 'styled-components';

export const HeaderNavMobileWrapper = styled.div`
    position: absolute;
    background: #fff;
    width: 100%;
    height: 100%;
    top: 0;
    @media (min-width: 1300px) {
        display: none;
    }
`;
export const HeaderNavMobileUl = styled.ul`
    padding: 0;
    & li {
        padding: 0px 8px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        height: 48px;
        transition: all 0.2s ease 0s;
        border-bottom: 1px solid rgb(239, 242, 245);
        & a {
            color: rgb(23, 25, 36);
            text-decoration: none;
            font-size: 16px;
            font-weight: 600;
            line-height: 16px;
        }
    }
`;