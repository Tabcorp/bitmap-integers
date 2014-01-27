should            = require 'should'
{ fromIntegerArray 
  fromBooleanArrayLE 
  fromBooleanArrayBE } = require "#{SRC}/array-to-integer"

singleIntegerArrays = [
  { givenArray: [1],  expectedValue: 1}
  { givenArray: [2],  expectedValue: 2}
  { givenArray: [3],  expectedValue: 4}
  { givenArray: [4],  expectedValue: 8}
  { givenArray: [5],  expectedValue: 16}
  { givenArray: [6],  expectedValue: 32}
  { givenArray: [7],  expectedValue: 64}
  { givenArray: [8],  expectedValue: 128}
  { givenArray: [9],  expectedValue: 256}
  { givenArray: [10], expectedValue: 512}
]

multipleIntegerArrays = [
  { givenArray: [1,2],      expectedValue: 3}
  { givenArray: [2,1],      expectedValue: 3}
  { givenArray: [1,2,3,4],  expectedValue: 15}
  { givenArray: [4,5,6],    expectedValue: 56}
  { givenArray: [0,1],      expectedValue: 1}
  { givenArray: [-1,6],     expectedValue: 32}
]

singleBooleanArraysLE = [
  { expectedValue: 1,   givenArray: [T]}
  { expectedValue: 2,   givenArray: [F,T]}
  { expectedValue: 4,   givenArray: [F,F,T]}
  { expectedValue: 8,   givenArray: [F,F,F,T]}
  { expectedValue: 16,  givenArray: [F,F,F,F,T]}
  { expectedValue: 32,  givenArray: [F,F,F,F,F,T]}
  { expectedValue: 64,  givenArray: [F,F,F,F,F,F,T]}
  { expectedValue: 128, givenArray: [F,F,F,F,F,F,F,T]}
  { expectedValue: 256, givenArray: [F,F,F,F,F,F,F,F,T]}
  { expectedValue: 512, givenArray: [F,F,F,F,F,F,F,F,F,T]}
]

multipleBooleanArraysLE = [
  { expectedValue: 3,  givenArray: [T,T]}
  { expectedValue: 3,  givenArray: [T,T,F,F]}
  { expectedValue: 15, givenArray: [T,T,T,T]}
  { expectedValue: 56, givenArray: [F,F,F,T,T,T]}
  { expectedValue: 37, givenArray: [T,F,T,F,F,T]}
]

singleBooleanArraysBE = [
  { expectedValue: 1,   givenArray: [T]}
  { expectedValue: 2,   givenArray: [T,F]}
  { expectedValue: 4,   givenArray: [T,F,F]}
  { expectedValue: 8,   givenArray: [T,F,F,F]}
  { expectedValue: 16,  givenArray: [T,F,F,F,F]}
  { expectedValue: 32,  givenArray: [T,F,F,F,F,F]}
  { expectedValue: 64,  givenArray: [T,F,F,F,F,F,F]}
  { expectedValue: 128, givenArray: [T,F,F,F,F,F,F,F]}
  { expectedValue: 256, givenArray: [T,F,F,F,F,F,F,F,F]}
  { expectedValue: 512, givenArray: [T,F,F,F,F,F,F,F,F,F]}
]

multipleBooleanArraysBE = [
  { expectedValue: 3,  givenArray: [T,T]}
  { expectedValue: 3,  givenArray: [F,F,T,T]}
  { expectedValue: 15, givenArray: [T,T,T,T]}
  { expectedValue: 56, givenArray: [T,T,T,F,F,F]}
  { expectedValue: 37, givenArray: [T,F,F,T,F,T]}
]

describe 'ArrayToInteger', ->

  describe 'fromIntegerArray', ->

    it 'should return 0 for an empty array', ->
      fromIntegerArray([]).should.eql 0

    it 'should return 0 when not passed in an array: undefined', ->
      fromIntegerArray().should.eql 0

    it 'should return 0 when not passed in an array: null', ->
      fromIntegerArray(null).should.eql 0

    it 'should return 0 when not passed in an array: number', ->
      fromIntegerArray(123).should.eql 0

    it 'should return 0 when not passed in an array: string', ->
      fromIntegerArray("hello world").should.eql 0

    it 'should return 0 when not passed in an array: object', ->
      fromIntegerArray({a: 123, b: "hello world"}).should.eql 0

    it 'should return 0 when not passed in an array: boolean', ->
      fromIntegerArray(false).should.eql 0

    it 'should return 0 when passed in an array with a non number: null', ->
      fromIntegerArray([1,null]).should.eql 0

    it 'should return 0 when passed in an array with a non number: boolean', ->
      fromIntegerArray([1,true]).should.eql 0

    it 'should return 0 when passed in an array with a non number: string', ->
      fromIntegerArray([1,'hello']).should.eql 0

    it 'should return 0 when passed in an array with a non number: object', ->
      fromIntegerArray([1,{a: 123, b:'hello'}]).should.eql 0

    singleIntegerArrays.forEach ({givenArray, expectedValue}) ->
      it "should return correct value for single element array: [#{givenArray}]", ->
        fromIntegerArray(givenArray).should.eql expectedValue

    multipleIntegerArrays.forEach ({givenArray, expectedValue}) ->
      it "should return correct value for multiple element array: [#{givenArray}]", ->
        fromIntegerArray(givenArray).should.eql expectedValue

    it 'should ignore negative values', ->
      fromIntegerArray([-1, -2]).should.eql 0

    it 'should ignore duplicate value', ->
      fromIntegerArray([1, 1]).should.eql 1

  describe 'fromBooleanArrayLE', ->

    it 'should return 0 for an empty array', ->
      fromBooleanArrayLE([]).should.eql 0

    it 'should return 0 when not passed in an array: undefined', ->
      fromBooleanArrayLE().should.eql 0

    it 'should return 0 when not passed in an array: null', ->
      fromBooleanArrayLE(null).should.eql 0

    it 'should return 0 when not passed in an array: number', ->
      fromBooleanArrayLE(123).should.eql 0

    it 'should return 0 when not passed in an array: string', ->
      fromBooleanArrayLE("hello world").should.eql 0

    it 'should return 0 when not passed in an array: object', ->
      fromBooleanArrayLE({a: 123, b: "hello world"}).should.eql 0

    it 'should return 0 when not passed in an array: boolean', ->
      fromBooleanArrayLE(false).should.eql 0

    it 'should return 0 when passed in an array with a non boolean: null', ->
      fromBooleanArrayLE([T,null]).should.eql 0

    it 'should return 0 when passed in an array with a non boolean: number', ->
      fromBooleanArrayLE([T,123]).should.eql 0

    it 'should return 0 when passed in an array with a non boolean: string', ->
      fromBooleanArrayLE([T,'hello']).should.eql 0

    it 'should return 0 when passed in an array with a non boolean: object', ->
      fromBooleanArrayLE([T,{a: 123, b:'hello'}]).should.eql 0

    singleBooleanArraysLE.forEach ({givenArray, expectedValue}) ->
      it "should return correct value for array where single element is set: [#{givenArray}]", ->
        fromBooleanArrayLE(givenArray).should.eql expectedValue

    multipleBooleanArraysLE.forEach ({givenArray, expectedValue}) ->
      it "should return correct value for multiple element array: [#{givenArray}]", ->
        fromBooleanArrayLE(givenArray).should.eql expectedValue

  describe 'fromBooleanArrayBE', ->

    it 'should return 0 for an empty array', ->
      fromBooleanArrayBE([]).should.eql 0

    it 'should return 0 when not passed in an array: undefined', ->
      fromBooleanArrayBE().should.eql 0

    it 'should return 0 when not passed in an array: null', ->
      fromBooleanArrayBE(null).should.eql 0

    it 'should return 0 when not passed in an array: number', ->
      fromBooleanArrayBE(123).should.eql 0

    it 'should return 0 when not passed in an array: string', ->
      fromBooleanArrayBE("hello world").should.eql 0

    it 'should return 0 when not passed in an array: object', ->
      fromBooleanArrayBE({a: 123, b: "hello world"}).should.eql 0

    it 'should return 0 when not passed in an array: boolean', ->
      fromBooleanArrayBE(false).should.eql 0

    it 'should return 0 when passed in an array with a non boolean: null', ->
      fromBooleanArrayBE([T,null]).should.eql 0

    it 'should return 0 when passed in an array with a non boolean: number', ->
      fromBooleanArrayBE([T,123]).should.eql 0

    it 'should return 0 when passed in an array with a non boolean: string', ->
      fromBooleanArrayBE([T,'hello']).should.eql 0

    it 'should return 0 when passed in an array with a non boolean: object', ->
      fromBooleanArrayBE([T,{a: 123, b:'hello'}]).should.eql 0

    singleBooleanArraysBE.forEach ({givenArray, expectedValue}) ->
      it "should return correct value for array where single element is set: [#{givenArray}]", ->
        fromBooleanArrayBE(givenArray).should.eql expectedValue

    multipleBooleanArraysBE.forEach ({givenArray, expectedValue}) ->
      it "should return correct value for multiple element array: [#{givenArray}]", ->
        fromBooleanArrayBE(givenArray).should.eql expectedValue
