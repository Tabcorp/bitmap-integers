const toIntegerArray = function(value) {
  return getArray(value, function(result, character, index) {
    if (character === '1') {
      return result.push(index + 1);
    }
  });
};

const toBooleanArrayLE = function(value) {
  return getArray(value, function(result, character, index) {
    return result.push(character === '1' ? true : false);
  });
};

const toBooleanArrayBE = function(value) {
  return toBooleanArrayLE(value).reverse();
};

const validNumber = function(value) {
  if (value <= 0) {
    return false;
  }
  if (typeof value !== 'number') {
    return false;
  }
  return true;
};

const getArray = function(value, callback) {
  var result;
  if (!validNumber(value)) {
    return [];
  }
  result = [];
  Math.floor(value).toString(2).split('').reverse().forEach(function(character, index) {
    return callback(result, character, index);
  });
  return result;
};

exports.toIntegerArray = toIntegerArray;
exports.toBooleanArrayLE = toBooleanArrayLE;
exports.toBooleanArrayBE = toBooleanArrayBE;
