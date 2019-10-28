import {hot} from 'react-hot-loader';
import React from "react";

import {Game} from '../Game';
import styled from "styled-components";
import DevTools from '../devTools/DevTools';

const RootContainer = styled.div`
        height: 100vh;
        background-color: #aaa;
        display: flex;
        
        justify-content: center;
        align-items: center;
        
        `;


const Root = () => {
    return (
        <RootContainer>
            <Game/>
            <DevTools/>
        </RootContainer>
    )
};

export default hot(module)(Root)