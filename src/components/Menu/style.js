import styled from 'styled-components';
import {TABLE_HEIGHT_PX, TABLE_WIDTH_PX} from '../../constants/common';

const theSmallestSide = Math.min(TABLE_WIDTH_PX, TABLE_HEIGHT_PX);
export const BigSymbols = styled.div`
    font-size: ${theSmallestSide / 6}px;
    color: white;
`;
export const InfoText = styled.div`
    font-size: ${theSmallestSide / 12}px;
    color: white;
`;

export const TextCentralizer = styled.div`
    text-align: center;
    width: 100%;
`;

export const MenuContainer = styled.div`
    display: ${({isVisible}) => (isVisible ? 'flex' : 'none')}
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1 ;
    background: rgb(47,60,73 , 0.7);
    align-items: center;
    justify-content: space-around;
    align-content: center
    flex-wrap: wrap;
    color:white;
 `;
