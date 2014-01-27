_              = require 'lodash'

fromIntegerArray = (integerArray) ->
  getValue (_.uniq integerArray), 'number', (bitmap, value, index) =>
    bitmap.value += Math.pow 2, ((Math.floor value) - 1) if value > 0

fromBooleanArrayLE = (booleanArray) ->
  getValue booleanArray, 'boolean', (bitmap, value, index) ->
    bitmap.value += Math.pow 2, index if value

fromBooleanArrayBE = (booleanArray) ->
  booleanArray.reverse() if booleanArray instanceof Array
  getValue booleanArray, 'boolean', (bitmap, value, index) ->
    bitmap.value += Math.pow 2, index if value

validArray = (array, valueType) ->
  return false if array not instanceof Array
  invalidValue = _(array).find (value) ->
    typeof value isnt valueType
  return (invalidValue is undefined)

getValue = (array, type, callback) ->
  return 0 if not validArray array, type
  bitmap = {value: 0}
  _(array).forEach (value, index) ->
    callback(bitmap, value, index)
  bitmap.value

exports.fromIntegerArray    = fromIntegerArray
exports.fromBooleanArrayLE = fromBooleanArrayLE
exports.fromBooleanArrayBE = fromBooleanArrayBE
