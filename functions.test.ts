const {shuffleArray} = require('./utils')

let testArray = [1,2,3,4,5,6,7,8,9]

describe('shuffleArray should return', () => {
    test('shuffleArray should return the same length', () => {
        for (var i = testArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = testArray[i];
            testArray[i] = testArray[j];
            testArray[j] = temp;
        }
        console.log(testArray)
        expect(testArray).toHaveLength(9)
    })
    test('shuffle Array should return the same elements', () => {
        for (var i = testArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = testArray[i];
            testArray[i] = testArray[j];
            testArray[j] = temp;
        }
        console.log(testArray)
        expect(testArray).toContain(1)
        expect(testArray).toContain(2)
        expect(testArray).toContain(3)
        expect(testArray).toContain(4)
        expect(testArray).toContain(5)
        expect(testArray).toContain(6)
        expect(testArray).toContain(7)
        expect(testArray).toContain(8)
        expect(testArray).toContain(9)
    })
})
