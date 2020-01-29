require('should');

const { fromIntegerArray, fromBooleanArrayLE, fromBooleanArrayBE } = require(`${SRC}/array-to-integer`);

const singleIntegerArrays = [
  {
    givenArray: [1],
    expectedValue: 1
  }, {
    givenArray: [2],
    expectedValue: 2
  }, {
    givenArray: [3],
    expectedValue: 4
  }, {
    givenArray: [4],
    expectedValue: 8
  }, {
    givenArray: [5],
    expectedValue: 16
  }, {
    givenArray: [6],
    expectedValue: 32
  }, {
    givenArray: [7],
    expectedValue: 64
  }, {
    givenArray: [8],
    expectedValue: 128
  }, {
    givenArray: [9],
    expectedValue: 256
  }, {
    givenArray: [10],
    expectedValue: 512
  }
];

const multipleIntegerArrays = [
  {
    givenArray: [1, 2],
    expectedValue: 3
  }, {
    givenArray: [2, 1],
    expectedValue: 3
  }, {
    givenArray: [1, 2, 3, 4],
    expectedValue: 15
  }, {
    givenArray: [4, 5, 6],
    expectedValue: 56
  }, {
    givenArray: [0, 1],
    expectedValue: 1
  }, {
    givenArray: [-1, 6],
    expectedValue: 32
  }
];

const singleBooleanArraysLE = [
  {
    expectedValue: 1,
    givenArray: [T]
  }, {
    expectedValue: 2,
    givenArray: [F, T]
  }, {
    expectedValue: 4,
    givenArray: [F, F, T]
  }, {
    expectedValue: 8,
    givenArray: [F, F, F, T]
  }, {
    expectedValue: 16,
    givenArray: [F, F, F, F, T]
  }, {
    expectedValue: 32,
    givenArray: [F, F, F, F, F, T]
  }, {
    expectedValue: 64,
    givenArray: [F, F, F, F, F, F, T]
  }, {
    expectedValue: 128,
    givenArray: [F, F, F, F, F, F, F, T]
  }, {
    expectedValue: 256,
    givenArray: [F, F, F, F, F, F, F, F, T]
  }, {
    expectedValue: 512,
    givenArray: [F, F, F, F, F, F, F, F, F, T]
  }
];

const multipleBooleanArraysLE = [
  {
    expectedValue: 3,
    givenArray: [T, T]
  }, {
    expectedValue: 3,
    givenArray: [T, T, F, F]
  }, {
    expectedValue: 15,
    givenArray: [T, T, T, T]
  }, {
    expectedValue: 56,
    givenArray: [F, F, F, T, T, T]
  }, {
    expectedValue: 37,
    givenArray: [T, F, T, F, F, T]
  }
];

const singleBooleanArraysBE = [
  {
    expectedValue: 1,
    givenArray: [T]
  }, {
    expectedValue: 2,
    givenArray: [T, F]
  }, {
    expectedValue: 4,
    givenArray: [T, F, F]
  }, {
    expectedValue: 8,
    givenArray: [T, F, F, F]
  }, {
    expectedValue: 16,
    givenArray: [T, F, F, F, F]
  }, {
    expectedValue: 32,
    givenArray: [T, F, F, F, F, F]
  }, {
    expectedValue: 64,
    givenArray: [T, F, F, F, F, F, F]
  }, {
    expectedValue: 128,
    givenArray: [T, F, F, F, F, F, F, F]
  }, {
    expectedValue: 256,
    givenArray: [T, F, F, F, F, F, F, F, F]
  }, {
    expectedValue: 512,
    givenArray: [T, F, F, F, F, F, F, F, F, F]
  }
];

const multipleBooleanArraysBE = [
  {
    expectedValue: 3,
    givenArray: [T, T]
  }, {
    expectedValue: 3,
    givenArray: [F, F, T, T]
  }, {
    expectedValue: 15,
    givenArray: [T, T, T, T]
  }, {
    expectedValue: 56,
    givenArray: [T, T, T, F, F, F]
  }, {
    expectedValue: 37,
    givenArray: [T, F, F, T, F, T]
  }
];

describe('ArrayToInteger', function() {
  describe('fromIntegerArray', function() {
    it('should return 0 for an empty array', function() {
      return fromIntegerArray([]).should.eql(0);
    });
    it('should return 0 when not passed in an array: undefined', function() {
      return fromIntegerArray().should.eql(0);
    });
    it('should return 0 when not passed in an array: null', function() {
      return fromIntegerArray(null).should.eql(0);
    });
    it('should return 0 when not passed in an array: number', function() {
      return fromIntegerArray(123).should.eql(0);
    });
    it('should return 0 when not passed in an array: string', function() {
      return fromIntegerArray("hello world").should.eql(0);
    });
    it('should return 0 when not passed in an array: object', function() {
      return fromIntegerArray({
        a: 123,
        b: "hello world"
      }).should.eql(0);
    });
    it('should return 0 when not passed in an array: boolean', function() {
      return fromIntegerArray(false).should.eql(0);
    });
    it('should return 0 when passed in an array with a non number: null', function() {
      return fromIntegerArray([1, null]).should.eql(0);
    });
    it('should return 0 when passed in an array with a non number: boolean', function() {
      return fromIntegerArray([1, true]).should.eql(0);
    });
    it('should return 0 when passed in an array with a non number: string', function() {
      return fromIntegerArray([1, 'hello']).should.eql(0);
    });
    it('should return 0 when passed in an array with a non number: object', function() {
      return fromIntegerArray([
        1, {
          a: 123,
          b: 'hello'
        }
      ]).should.eql(0);
    });
    singleIntegerArrays.forEach(function(arg) {
      var expectedValue, givenArray;
      givenArray = arg.givenArray, expectedValue = arg.expectedValue;
      return it("should return correct value for single element array: [" + givenArray + "]", function() {
        return fromIntegerArray(givenArray).should.eql(expectedValue);
      });
    });
    multipleIntegerArrays.forEach(function(arg) {
      var expectedValue, givenArray;
      givenArray = arg.givenArray, expectedValue = arg.expectedValue;
      return it("should return correct value for multiple element array: [" + givenArray + "]", function() {
        return fromIntegerArray(givenArray).should.eql(expectedValue);
      });
    });
    it('should ignore negative values', function() {
      return fromIntegerArray([-1, -2]).should.eql(0);
    });
    return it('should ignore duplicate value', function() {
      return fromIntegerArray([1, 1]).should.eql(1);
    });
  });
  describe('fromBooleanArrayLE', function() {
    it('should return 0 for an empty array', function() {
      return fromBooleanArrayLE([]).should.eql(0);
    });
    it('should return 0 when not passed in an array: undefined', function() {
      return fromBooleanArrayLE().should.eql(0);
    });
    it('should return 0 when not passed in an array: null', function() {
      return fromBooleanArrayLE(null).should.eql(0);
    });
    it('should return 0 when not passed in an array: number', function() {
      return fromBooleanArrayLE(123).should.eql(0);
    });
    it('should return 0 when not passed in an array: string', function() {
      return fromBooleanArrayLE("hello world").should.eql(0);
    });
    it('should return 0 when not passed in an array: object', function() {
      return fromBooleanArrayLE({
        a: 123,
        b: "hello world"
      }).should.eql(0);
    });
    it('should return 0 when not passed in an array: boolean', function() {
      return fromBooleanArrayLE(false).should.eql(0);
    });
    it('should return 0 when passed in an array with a non boolean: null', function() {
      return fromBooleanArrayLE([T, null]).should.eql(0);
    });
    it('should return 0 when passed in an array with a non boolean: number', function() {
      return fromBooleanArrayLE([T, 123]).should.eql(0);
    });
    it('should return 0 when passed in an array with a non boolean: string', function() {
      return fromBooleanArrayLE([T, 'hello']).should.eql(0);
    });
    it('should return 0 when passed in an array with a non boolean: object', function() {
      return fromBooleanArrayLE([
        T, {
          a: 123,
          b: 'hello'
        }
      ]).should.eql(0);
    });
    singleBooleanArraysLE.forEach(function(arg) {
      var expectedValue, givenArray;
      givenArray = arg.givenArray, expectedValue = arg.expectedValue;
      return it("should return correct value for array where single element is set: [" + givenArray + "]", function() {
        return fromBooleanArrayLE(givenArray).should.eql(expectedValue);
      });
    });
    return multipleBooleanArraysLE.forEach(function(arg) {
      var expectedValue, givenArray;
      givenArray = arg.givenArray, expectedValue = arg.expectedValue;
      return it("should return correct value for multiple element array: [" + givenArray + "]", function() {
        return fromBooleanArrayLE(givenArray).should.eql(expectedValue);
      });
    });
  });
  return describe('fromBooleanArrayBE', function() {
    it('should return 0 for an empty array', function() {
      return fromBooleanArrayBE([]).should.eql(0);
    });
    it('should return 0 when not passed in an array: undefined', function() {
      return fromBooleanArrayBE().should.eql(0);
    });
    it('should return 0 when not passed in an array: null', function() {
      return fromBooleanArrayBE(null).should.eql(0);
    });
    it('should return 0 when not passed in an array: number', function() {
      return fromBooleanArrayBE(123).should.eql(0);
    });
    it('should return 0 when not passed in an array: string', function() {
      return fromBooleanArrayBE("hello world").should.eql(0);
    });
    it('should return 0 when not passed in an array: object', function() {
      return fromBooleanArrayBE({
        a: 123,
        b: "hello world"
      }).should.eql(0);
    });
    it('should return 0 when not passed in an array: boolean', function() {
      return fromBooleanArrayBE(false).should.eql(0);
    });
    it('should return 0 when passed in an array with a non boolean: null', function() {
      return fromBooleanArrayBE([T, null]).should.eql(0);
    });
    it('should return 0 when passed in an array with a non boolean: number', function() {
      return fromBooleanArrayBE([T, 123]).should.eql(0);
    });
    it('should return 0 when passed in an array with a non boolean: string', function() {
      return fromBooleanArrayBE([T, 'hello']).should.eql(0);
    });
    it('should return 0 when passed in an array with a non boolean: object', function() {
      return fromBooleanArrayBE([
        T, {
          a: 123,
          b: 'hello'
        }
      ]).should.eql(0);
    });
    singleBooleanArraysBE.forEach(function(arg) {
      var expectedValue, givenArray;
      givenArray = arg.givenArray, expectedValue = arg.expectedValue;
      return it("should return correct value for array where single element is set: [" + givenArray + "]", function() {
        return fromBooleanArrayBE(givenArray).should.eql(expectedValue);
      });
    });
    return multipleBooleanArraysBE.forEach(function(arg) {
      var expectedValue, givenArray;
      givenArray = arg.givenArray, expectedValue = arg.expectedValue;
      return it("should return correct value for multiple element array: [" + givenArray + "]", function() {
        return fromBooleanArrayBE(givenArray).should.eql(expectedValue);
      });
    });
  });
});
