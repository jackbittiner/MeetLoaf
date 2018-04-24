import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
import timeFormatter from './time-formatter'

const testCases = [
    {input: 0, expectedResult: "00 : 00 : 00"},
    {input: 61, expectedResult: "00 : 01 : 01"},
    {input: 3671, expectedResult: "01 : 01 : 11"},
    {input: 36000, expectedResult: "10 : 00 : 00"}
]

describe('timeFormatter', function() {

    describe('it should format seconds into hours, minutes and seconds', function() {
        
        testCases.forEach(test => {
            it(`should format ${test.input} as ${test.expectedResult}`, function() {
                expect(timeFormatter(test.input)).to.equal(test.expectedResult)
            }) ;
        });
    });
});