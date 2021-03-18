const pyramidDescent = (pyramid, target) => {
    const lastRow = pyramid.length - 1;
    let finalPath;
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


const pyramid1 = [
    [1],
    [2,3],
    [4,1,1]
] // 2

const pyramid2 = [
    [2],
    [4,3],
    [3,2,6],
    [2,9,5,2],
    [10,5,2,15,5]
] // 720 

const pyramidEdgeCase2 = [
    [1]
]

/* console.log('expected path = [L, R] ' ,'out put path = ', pyramidDescent(pyramid1, 2))
console.log('expected path = [L, R, L, L] ' ,'out put path = ', pyramidDescent(pyramid2, 720))
console.log(test(pyramidDescent(pyramid1, 2), ['L', 'R']))
console.log(test(pyramidDescent(pyramid2, 720), ['L', 'R', 'L', 'L'])) */

module.exports = { pyramidDescent }