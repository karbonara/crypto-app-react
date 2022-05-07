import styled from 'styled-components';

export const HeaderNavWrapperBorder = styled.div`
    border-top: 1px solid rgb(239, 242, 245);
    border-bottom: 1px solid rgb(239, 242, 245);
`;
export const HeaderNavWrapper = styled.nav`
    width: 80vw;
    margin: 0 auto;
    padding: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 640px) {
        flex-wrap: wrap;
        justify-content: center;
    }
    & a {
        text-decoration: none;
        color: #000000;
    }
`;
export const HeaderNavUl = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    list-style: none;
    margin: 0;
    width: 50%;
    @media (max-width: 1300px) {
        display: none;
    }
    & a {
        padding: 8px 12px;
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        -webkit-box-align: center;
        align-items: center;
        transition: 0.2s;
        &:hover {
            color: #3861fb;
        }
    }
`;
// export const HeaderNavInput = styled.input`
//     display: none;
//     @media (max-width: 1300px) {
//         display: block;
//     }
// `;
// export const HeaderNavLabel = styled.label`
//     display: flex; 
//     align-items: center; 
//     position: fixed;
//     top: 20px;
//     left: 20px;
//     width: 26px;
//     height: 26px;
//     cursor: pointer;
//     z-index: 1;
// `;