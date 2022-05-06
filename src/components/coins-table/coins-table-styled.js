import styled from 'styled-components';

export const CoinsTableTr = styled.tr`
    box-sizing: border-box;
    border-spacing: 0px;
    background-color: #fff;
    &:hover {
        background-color: #f2f2f2;
    }
`;
export const CoinsTableTd = styled.td`
    border-bottom: 1px solid #eff2f5;
    padding: 10px;
    font-weight: 500;
    white-space: nowrap;
`;
export const CoinsTableHeaderTr = styled.tr`
    box-sizing: border-box;
    border-spacing: 0px;
    background-color: #fff;
`;
export const CoinsTableHeaderTh = styled.th`
    border-bottom: 1px solid #eff2f5;
    padding: 10px;
    font-weight: 500;
    white-space: nowrap;
    text-align: start;
`;