should                 = require 'should'
{ toIntegerArray
  toBooleanArrayLE
  toBooleanArrayBE }    = require "#{SRC}/integer-to-array"

singleIntegerArrays = [
  { expectedArray: [1],       givenValue: 1}
  { expectedArray: [2],       givenValue: 2}
  { expectedArray: [3],       givenValue: 4}
  { expectedArray: [4],       givenValue: 8}
  { expectedArray: [5],       givenValue: 16}
  { expectedArray: [6],       givenValue: 32}
  { expectedArray: [7],       givenValue: 64}
  { expectedArray: [8],       givenValue: 128}
  { expectedArray: [9],       givenValue: 256}
  { expectedArray: [10],      givenValue: 512}
]

multipleIntegerArrays = [
  { expectedArray: [1,2],     givenValue: 3}
  { expectedArray: [1,2,3,4], givenValue: 15}
  { expectedArray: [4,5,6],   givenValue: 56}
]

singleBooleanArraysLE = [
  { givenValue: 1,   expectedArray: [T]}
  { givenValue: 2,   expectedArray: [F,T]}
  { givenValue: 4,   expectedArray: [F,F,T]}
  { givenValue: 8,   expectedArray: [F,F,F,T]}
  { givenValue: 16,  expectedArray: [F,F,F,F,T]}
  { givenValue: 32,  expectedArray: [F,F,F,F,F,T]}
  { givenValue: 64,  expectedArray: [F,F,F,F,F,F,T]}
  { givenValue: 128, expectedArray: [F,F,F,F,F,F,F,T]}
  { givenValue: 256, expectedArray: [F,F,F,F,F,F,F,F,T]}
  { givenValue: 512, expectedArray: [F,F,F,F,F,F,F,F,F,T]}
]

multipleBooleanArraysLE = [
  { givenValue: 3,  expectedArray: [T,T]}
  { givenValue: 15, expectedArray: [T,T,T,T]}
  { givenValue: 56, expectedArray: [F,F,F,T,T,T]}
  { givenValue: 37, expectedArray: [T,F,T,F,F,T]}
]

singleBooleanArraysBE = [
  { givenValue: 1,   expectedArray: [T]}
  { givenValue: 2,   expectedArray: [T,F]}
  { givenValue: 4,   expectedArray: [T,F,F]}
  { givenValue: 8,   expectedArray: [T,F,F,F]}
  { givenValue: 16,  expectedArray: [T,F,F,F,F]}
  { givenValue: 32,  expectedArray: [T,F,F,F,F,F]}
  { givenValue: 64,  expectedArray: [T,F,F,F,F,F,F]}
  { givenValue: 128, expectedArray: [T,F,F,F,F,F,F,F]}
  { givenValue: 256, expectedArray: [T,F,F,F,F,F,F,F,F]}
  { givenValue: 512, expectedArray: [T,F,F,F,F,F,F,F,F,F]}
]

multipleBooleanArraysBE = [
  { givenValue: 3,  expectedArray: [T,T]}
  { givenValue: 15, expectedArray: [T,T,T,T]}
  { givenValue: 56, expectedArray: [T,T,T,F,F,F]}
  { givenValue: 37, expectedArray: [T,F,F,T,F,T]}
]

describe 'IntegerToArray', ->

  describe 'toIntegerArray', ->

    it 'should return an empty array when not passed in a positive number: undefined', ->
      toIntegerArray().should.eql []

    it 'should return an empty array when not passed in a positive number: null', ->
      toIntegerArray(null).should.eql []

    it 'should return an empty array when not passed in a positive number: string', ->
      toIntegerArray("hello world").should.eql []

    it 'should return an empty array when not passed in a positive number: object', ->
      toIntegerArray({a: 123, b: "hello world"}).should.eql []

    it 'should return an empty array when not passed in a positive number: boolean', ->
      toIntegerArray(false).should.eql []

    it 'should return an empty array when not passed in a positive number: array', ->
      toIntegerArray([1,2]).should.eql []

    it 'should return an empty array when not passed in a positive number: negative number', ->
      toIntegerArray(-2).should.eql []

    it 'should floor any floats that are passed in', ->
      toIntegerArray(3.5).should.eql [1,2]

    singleIntegerArrays.forEach ({givenValue, expectedArray}) ->
      it "should return correct single element array for value: [#{givenValue}]", ->
        toIntegerArray(givenValue).should.eql expectedArray

    multipleIntegerArrays.forEach ({givenValue, expectedArray}) ->
      it "should return correct multiple element array for value: [#{givenValue}]", ->
        toIntegerArray(givenValue).should.eql expectedArray

  describe 'toBooleanArrayLE', ->

    it 'should return an empty array when not passed in a positive number: undefined', ->
      toBooleanArrayLE().should.eql []

    it 'should return an empty array when not passed in a positive number: null', ->
      toBooleanArrayLE(null).should.eql []

    it 'should return an empty array when not passed in a positive number: string', ->
      toBooleanArrayLE("hello world").should.eql []

    it 'should return an empty array when not passed in a positive number: object', ->
      toBooleanArrayLE({a: 123, b: "hello world"}).should.eql []

    it 'should return an empty array when not passed in a positive number: boolean', ->
      toBooleanArrayLE(false).should.eql []

    it 'should return an empty array when not passed in a positive number: array', ->
      toBooleanArrayLE([1,2]).should.eql []

    it 'should return an empty array when not passed in a positive number: negative number', ->
      toBooleanArrayLE(-2).should.eql []

    it 'should floor any floats that are passed in', ->
      toBooleanArrayLE(3.5).should.eql [T,T]

    singleBooleanArraysLE.forEach ({givenValue, expectedArray}) ->
      it "should return correct single element array for value: [#{givenValue}]", ->
        toBooleanArrayLE(givenValue).should.eql expectedArray

    multipleBooleanArraysLE.forEach ({givenValue, expectedArray}) ->
      it "should return correct multiple element array for value: [#{givenValue}]", ->
        toBooleanArrayLE(givenValue).should.eql expectedArray

  describe 'toBooleanArrayBE', ->

    it 'should return an empty array when not passed in a positive number: undefined', ->
      toBooleanArrayBE().should.eql []

    it 'should return an empty array when not passed in a positive number: null', ->
      toBooleanArrayBE(null).should.eql []

    it 'should return an empty array when not passed in a positive number: string', ->
      toBooleanArrayBE("hello world").should.eql []

    it 'should return an empty array when not passed in a positive number: object', ->
      toBooleanArrayBE({a: 123, b: "hello world"}).should.eql []

    it 'should return an empty array when not passed in a positive number: boolean', ->
      toBooleanArrayBE(false).should.eql []

    it 'should return an empty array when not passed in a positive number: array', ->
      toBooleanArrayBE([1,2]).should.eql []

    it 'should return an empty array when not passed in a positive number: negative number', ->
      toBooleanArrayBE(-2).should.eql []

    it 'should floor any floats that are passed in', ->
      toBooleanArrayBE(3.5).should.eql [T,T]

    singleBooleanArraysBE.forEach ({givenValue, expectedArray}) ->
      it "should return correct single element array for value: [#{givenValue}]", ->
        toBooleanArrayBE(givenValue).should.eql expectedArray

    multipleBooleanArraysBE.forEach ({givenValue, expectedArray}) ->
      it "should return correct multiple element array for value: [#{givenValue}]", ->
        toBooleanArrayBE(givenValue).should.eql expectedArray
