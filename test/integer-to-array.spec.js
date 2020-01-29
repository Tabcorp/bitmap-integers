require('should');

const { toIntegerArray, toBooleanArrayLE, toBooleanArrayBE } = require(`${SRC}/integer-to-array`);

const singleIntegerArrays = [
  {
    expectedArray: [1],
    givenValue: 1
  }, {
    expectedArray: [2],
    givenValue: 2
  }, {
    expectedArray: [3],
    givenValue: 4
  }, {
    expectedArray: [4],
    givenValue: 8
  }, {
    expectedArray: [5],
    givenValue: 16
  }, {
    expectedArray: [6],
    givenValue: 32
  }, {
    expectedArray: [7],
    givenValue: 64
  }, {
    expectedArray: [8],
    givenValue: 128
  }, {
    expectedArray: [9],
    givenValue: 256
  }, {
    expectedArray: [10],
    givenValue: 512
  }
];

const multipleIntegerArrays = [
  {
    expectedArray: [1, 2],
    givenValue: 3
  }, {
    expectedArray: [1, 2, 3, 4],
    givenValue: 15
  }, {
    expectedArray: [4, 5, 6],
    givenValue: 56
  }
];

const singleBooleanArraysLE = [
  {
    givenValue: 1,
    expectedArray: [T]
  }, {
    givenValue: 2,
    expectedArray: [F, T]
  }, {
    givenValue: 4,
    expectedArray: [F, F, T]
  }, {
    givenValue: 8,
    expectedArray: [F, F, F, T]
  }, {
    givenValue: 16,
    expectedArray: [F, F, F, F, T]
  }, {
    givenValue: 32,
    expectedArray: [F, F, F, F, F, T]
  }, {
    givenValue: 64,
    expectedArray: [F, F, F, F, F, F, T]
  }, {
    givenValue: 128,
    expectedArray: [F, F, F, F, F, F, F, T]
  }, {
    givenValue: 256,
    expectedArray: [F, F, F, F, F, F, F, F, T]
  }, {
    givenValue: 512,
    expectedArray: [F, F, F, F, F, F, F, F, F, T]
  }
];

const multipleBooleanArraysLE = [
  {
    givenValue: 3,
    expectedArray: [T, T]
  }, {
    givenValue: 15,
    expectedArray: [T, T, T, T]
  }, {
    givenValue: 56,
    expectedArray: [F, F, F, T, T, T]
  }, {
    givenValue: 37,
    expectedArray: [T, F, T, F, F, T]
  }
];

const singleBooleanArraysBE = [
  {
    givenValue: 1,
    expectedArray: [T]
  }, {
    givenValue: 2,
    expectedArray: [T, F]
  }, {
    givenValue: 4,
    expectedArray: [T, F, F]
  }, {
    givenValue: 8,
    expectedArray: [T, F, F, F]
  }, {
    givenValue: 16,
    expectedArray: [T, F, F, F, F]
  }, {
    givenValue: 32,
    expectedArray: [T, F, F, F, F, F]
  }, {
    givenValue: 64,
    expectedArray: [T, F, F, F, F, F, F]
  }, {
    givenValue: 128,
    expectedArray: [T, F, F, F, F, F, F, F]
  }, {
    givenValue: 256,
    expectedArray: [T, F, F, F, F, F, F, F, F]
  }, {
    givenValue: 512,
    expectedArray: [T, F, F, F, F, F, F, F, F, F]
  }
];

const multipleBooleanArraysBE = [
  {
    givenValue: 3,
    expectedArray: [T, T]
  }, {
    givenValue: 15,
    expectedArray: [T, T, T, T]
  }, {
    givenValue: 56,
    expectedArray: [T, T, T, F, F, F]
  }, {
    givenValue: 37,
    expectedArray: [T, F, F, T, F, T]
  }
];

describe('IntegerToArray', function() {
  describe('toIntegerArray', function() {
    it('should return an empty array when not passed in a positive number: undefined', function() {
      return toIntegerArray().should.eql([]);
    });
    it('should return an empty array when not passed in a positive number: null', function() {
      return toIntegerArray(null).should.eql([]);
    });
    it('should return an empty array when not passed in a positive number: string', function() {
      return toIntegerArray("hello world").should.eql([]);
    });
    it('should return an empty array when not passed in a positive number: object', function() {
      return toIntegerArray({
        a: 123,
        b: "hello world"
      }).should.eql([]);
    });
    it('should return an empty array when not passed in a positive number: boolean', function() {
      return toIntegerArray(false).should.eql([]);
    });
    it('should return an empty array when not passed in a positive number: array', function() {
      return toIntegerArray([1, 2]).should.eql([]);
    });
    it('should return an empty array when not passed in a positive number: negative number', function() {
      return toIntegerArray(-2).should.eql([]);
    });
    it('should floor any floats that are passed in', function() {
      return toIntegerArray(3.5).should.eql([1, 2]);
    });
    singleIntegerArrays.forEach(function(arg) {
      var expectedArray, givenValue;
      givenValue = arg.givenValue, expectedArray = arg.expectedArray;
      return it("should return correct single element array for value: [" + givenValue + "]", function() {
        return toIntegerArray(givenValue).should.eql(expectedArray);
      });
    });
    return multipleIntegerArrays.forEach(function(arg) {
      var expectedArray, givenValue;
      givenValue = arg.givenValue, expectedArray = arg.expectedArray;
      return it("should return correct multiple element array for value: [" + givenValue + "]", function() {
        return toIntegerArray(givenValue).should.eql(expectedArray);
      });
    });
  });
  describe('toBooleanArrayLE', function() {
    it('should return an empty array when not passed in a positive number: undefined', function() {
      return toBooleanArrayLE().should.eql([]);
    });
    it('should return an empty array when not passed in a positive number: null', function() {
      return toBooleanArrayLE(null).should.eql([]);
    });
    it('should return an empty array when not passed in a positive number: string', function() {
      return toBooleanArrayLE("hello world").should.eql([]);
    });
    it('should return an empty array when not passed in a positive number: object', function() {
      return toBooleanArrayLE({
        a: 123,
        b: "hello world"
      }).should.eql([]);
    });
    it('should return an empty array when not passed in a positive number: boolean', function() {
      return toBooleanArrayLE(false).should.eql([]);
    });
    it('should return an empty array when not passed in a positive number: array', function() {
      return toBooleanArrayLE([1, 2]).should.eql([]);
    });
    it('should return an empty array when not passed in a positive number: negative number', function() {
      return toBooleanArrayLE(-2).should.eql([]);
    });
    it('should floor any floats that are passed in', function() {
      return toBooleanArrayLE(3.5).should.eql([T, T]);
    });
    singleBooleanArraysLE.forEach(function(arg) {
      var expectedArray, givenValue;
      givenValue = arg.givenValue, expectedArray = arg.expectedArray;
      return it("should return correct single element array for value: [" + givenValue + "]", function() {
        return toBooleanArrayLE(givenValue).should.eql(expectedArray);
      });
    });
    return multipleBooleanArraysLE.forEach(function(arg) {
      var expectedArray, givenValue;
      givenValue = arg.givenValue, expectedArray = arg.expectedArray;
      return it("should return correct multiple element array for value: [" + givenValue + "]", function() {
        return toBooleanArrayLE(givenValue).should.eql(expectedArray);
      });
    });
  });
  return describe('toBooleanArrayBE', function() {
    it('should return an empty array when not passed in a positive number: undefined', function() {
      return toBooleanArrayBE().should.eql([]);
    });
    it('should return an empty array when not passed in a positive number: null', function() {
      return toBooleanArrayBE(null).should.eql([]);
    });
    it('should return an empty array when not passed in a positive number: string', function() {
      return toBooleanArrayBE("hello world").should.eql([]);
    });
    it('should return an empty array when not passed in a positive number: object', function() {
      return toBooleanArrayBE({
        a: 123,
        b: "hello world"
      }).should.eql([]);
    });
    it('should return an empty array when not passed in a positive number: boolean', function() {
      return toBooleanArrayBE(false).should.eql([]);
    });
    it('should return an empty array when not passed in a positive number: array', function() {
      return toBooleanArrayBE([1, 2]).should.eql([]);
    });
    it('should return an empty array when not passed in a positive number: negative number', function() {
      return toBooleanArrayBE(-2).should.eql([]);
    });
    it('should floor any floats that are passed in', function() {
      return toBooleanArrayBE(3.5).should.eql([T, T]);
    });
    singleBooleanArraysBE.forEach(function(arg) {
      var expectedArray, givenValue;
      givenValue = arg.givenValue, expectedArray = arg.expectedArray;
      return it("should return correct single element array for value: [" + givenValue + "]", function() {
        return toBooleanArrayBE(givenValue).should.eql(expectedArray);
      });
    });
    return multipleBooleanArraysBE.forEach(function(arg) {
      var expectedArray, givenValue;
      givenValue = arg.givenValue, expectedArray = arg.expectedArray;
      return it("should return correct multiple element array for value: [" + givenValue + "]", function() {
        return toBooleanArrayBE(givenValue).should.eql(expectedArray);
      });
    });
  });
});
