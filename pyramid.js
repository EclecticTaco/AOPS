const pyramidDescent = (pyramid, target) => {
    const lastRow = pyramid.length - 1;
    let finalPath = [];
    const descent = (path, sum, currentVal, rowCount, prevCol) => {
        sum *= currentVal;
        if (sum > target) return
        if (rowCount == lastRow && sum  == target) {
            finalPath = path;
            return;
        }
        if (rowCount !== lastRow) {
            rowCount += 1;
            const left = prevCol;
            const right = prevCol += 1;
            descent([...path, 'L'], sum, pyramid[rowCount][left], rowCount, left)
            descent([...path, 'R'], sum, pyramid[rowCount][right], rowCount, right)
        }
    }
    descent([], 1, pyramid[0][0], 0, 0)
    return finalPath
}

module.exports = { pyramidDescent }