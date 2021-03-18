const pyramid = require("./pyramid")

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

const pyramidEdgeCase1 = [
    [1]
] // []

const test = (output, expected) => {
    if (output.length !== expected.length) return false
    for (let i = 0; i < output.length; i += 1) {
        if (output[i] !== expected[i]) return false
    }
    return true
}

const cases = [
    [pyramid1, 2, ['L', 'R']],
    [pyramid2, 720, ['L', 'R', 'L', 'L']],
    [pyramidEdgeCase1, 1, []],
]
let pass = true
let fail = []
for (let i = 0; i < cases.length; i += 1) {
    const pyramid = cases[i][0];
    const target = cases[i][1]
    const expected = cases[i][2];
    
}

if (pass) {
    console.log('All test cases pass!')
} else {
    console.log('One more more test cases failed. Failed test cases: ', fail)
}
console.log(test(pyramid.pyramidDescent(pyramid1, 2), ['L', 'R']))


