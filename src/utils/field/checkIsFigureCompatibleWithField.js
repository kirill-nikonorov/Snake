export const checkIsFigureCompatibleWithField = (field, figure, x, y = 0, checkIsWithinBound) => {
    return figure.every((row, rowIndex) => {
        return row.every((cell, cellIndex) => {
            if (!cell) return true;
            const fieldXIndex = x + cellIndex;
            const fieldYIndex = y + rowIndex;

            const isFieldCellFree = !field.getIn([fieldYIndex, fieldXIndex]);

            if (checkIsWithinBound) {
                const isWithinBound = checkIsWithinBound(fieldXIndex, fieldYIndex);
                return isFieldCellFree && isWithinBound;
            } else return isFieldCellFree;
        });
    });
};
