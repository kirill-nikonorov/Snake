import {hot} from 'react-hot-loader';
import React from 'react';

import {Game} from '../Game';
import styled from 'styled-components';

const RootContainer = styled.div`
    height: 100vh;
    background-color: #aaa;
    display: flex;

    justify-content: center;
    align-items: center;
`;

const RootView = () => {
    return (
        <RootContainer>
            <Game />
        </RootContainer>
    );
};

export const Root = hot(module)(RootView);
