import React from "react";
import styled from 'styled-components'
import {Figure} from "./Figure";

import {connect} from "react-redux";

import {startNewGame, toggleGameOn} from '../actions/gameStatus'
import {tableBackgroundCells} from "../constants/figures";
import {Cell} from "./Cell";


const TableContainer = styled.div`
        height: 100%;
        width: 100%;

        position: relative;
        `;

class TableView extends React.Component {


    render() {
        const {snake: {cells: snakeCells}, foodCell} = this.props;
        const x = foodCell.get('x');
        const y = foodCell.get('y');


        return (
            <TableContainer>
                <Figure figureCells={tableBackgroundCells}/>
                <Figure figureCells={snakeCells} color={"green"}/>
                <Cell x={x} y={y} color={"red"}/>
            </TableContainer>
        )
    }
}

const mapStateToProps = (state) => {
    const cells = state.getIn(["snake", 'cells']);
    const foodCell = state.get("foodCell");


    return {snake: {cells: cells}, foodCell}
};

export const Table = connect(mapStateToProps, {
    startNewGame,
    toggleGameOn,
})(TableView);

