const pyramid = require("../pyramid");
const assert = require('assert');
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

const pyramid3 = [
    [1],
    [2,3]
] // 2

const pyramid4 = [
    [1],
] // 1

const pyramid5 = [
    [4],
] // 4

const pyramid6 = [
    [1],
    [2,3],
    [6,8,10],
    [9,3,1,2],
    [60,7,4,5,6]
] // 192
const cases = [
    [pyramid1, 2, ['L', 'R']],
    [pyramid2, 720, ['L', 'R', 'L', 'L']],
    [pyramid3, 2, ['L']],
    [pyramid4, 1, []],
    [pyramid5, 4, []],
    [pyramid6, 192, ['L', 'R', 'L', 'R']]
]

for (let i = 0; i < cases.length; i += 1) {
    const aPyramid = cases[i][0];
    const target = cases[i][1]
    const expected = cases[i][2];
    const output = pyramid.pyramidDescent(aPyramid, target)
    describe('pyramidDescent', function(){
        it('should return a valid path', function(){
            assert.deepStrictEqual(output, expected)
        })
    })
} 

