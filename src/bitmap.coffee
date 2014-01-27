_              = require 'lodash'
arrayToInteger = require './array-to-integer'
integerToArray = require './integer-to-array'

module.exports = 
  fromIntegerArray:      arrayToInteger.fromIntegerArray
  fromBooleanArrayLE:    arrayToInteger.fromBooleanArrayLE
  fromBooleanArrayBE:    arrayToInteger.fromBooleanArrayBE
  toIntegerArray:        integerToArray.toIntegerArray
  toBooleanArrayLE:      integerToArray.toBooleanArrayLE
  toBooleanArrayBE:      integerToArray.toBooleanArrayBE