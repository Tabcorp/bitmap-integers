toIntegerArray = (value) ->
  getArray value, (result, character, index) ->
    result.push (index + 1) if character is '1'

toBooleanArrayLE = (value) ->
  getArray value, (result, character, index) ->
    result.push if character is '1' then true else false

toBooleanArrayBE = (value) ->
  toBooleanArrayLE(value).reverse()

validNumber = (value) ->
  return false if value <= 0
  return false if typeof value isnt 'number'
  true

getArray = (value, callback) ->
  return [] if not validNumber value
  result = []
  Math.floor(value).toString(2).split('').reverse().forEach (character, index) ->
    callback(result, character, index)
  result

exports.toIntegerArray = toIntegerArray
exports.toBooleanArrayLE = toBooleanArrayLE
exports.toBooleanArrayBE = toBooleanArrayBE