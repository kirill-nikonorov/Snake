import React from 'react';
import styled from 'styled-components';
import {Figure} from './Figure/Figure';

import {connect} from 'react-redux';

import {startNewGame, toggleGameOn} from '../actions/gameStatus';
import {tableBackgroundCells} from '../constants/figures';
import {Cell} from './Figure/Cell';

const TableContainer = styled.div`
    height: 100%;
    width: 100%;

    position: relative;
`;

class TableView extends React.Component {
    render() {
        const {
            snake: {cells: snakeCells},
            foodCell
        } = this.props;
        const x = foodCell.get('x');
        const y = foodCell.get('y');

        return (
            <TableContainer>
                <Figure figureCells={tableBackgroundCells} />
                <Cell x={x} y={y} color={'red'} />

                <Figure figureCells={snakeCells} color={'green'} headed/>
            </TableContainer>
        );
    }
}

const mapStateToProps = state => {
    const tableObjects = state.get('tableObjects');
    const cells = tableObjects.getIn(['snake', 'cells']);
    const foodCell = tableObjects.get('foodCell');

    return {snake: {cells: cells}, foodCell};
};

export const Table = connect(
    mapStateToProps,
    {
        startNewGame,
        toggleGameOn
    }
)(TableView);
