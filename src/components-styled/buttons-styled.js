import styled from 'styled-components';

export const ButtonBlue = styled.button`
-webkit-box-align: center;
    align-items: center;
    background: rgb(56, 97, 251);
    border: 0px;
    border-radius: 8px;
    display: inline-flex;
    color: rgb(255, 255, 255);
    cursor: pointer;
    -webkit-box-pack: center;
    justify-content: center;
    outline: 0px;
    font-weight: 600;
    width: auto;
    height: 32px;
    font-size: 12px;
    padding: 0px 16px;
    line-height: 18px;
    transition: 0.2s;
    &:hover {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), rgb(56, 97, 251);
        color: rgb(255, 255, 255);
        text-decoration: none;
    }
`;
export const ButtonWhite = styled.button`
-webkit-box-align: center;
    align-items: center;
    background: transparent;
    border: 0px;
    border-radius: 8px;
    display: inline-flex;
    color: rgb(0, 0, 0);
    cursor: pointer;
    -webkit-box-pack: center;
    justify-content: center;
    outline: 0px;
    font-weight: 600;
    width: auto;
    height: 32px;
    font-size: 12px;
    padding: 0px 16px;
    line-height: 18px;
    transition: 0.2s;
    &:hover {
        background: rgb(248, 250, 253);
        color: rgb(0, 0, 0);
        text-decoration: none;
    }
`;
