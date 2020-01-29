const _ = require('lodash');

const fromIntegerArray = function(integerArray) {
  return getValue(_.uniq(integerArray), 'number', (function(_this) {
    return function(bitmap, value, index) {
      if (value > 0) {
        return bitmap.value += Math.pow(2, (Math.floor(value)) - 1);
      }
    };
  })(this));
};

const fromBooleanArrayLE = function(booleanArray) {
  return getValue(booleanArray, 'boolean', function(bitmap, value, index) {
    if (value) {
      return bitmap.value += Math.pow(2, index);
    }
  });
};

const fromBooleanArrayBE = function(booleanArray) {
  if (booleanArray instanceof Array) {
    booleanArray.reverse();
  }
  return getValue(booleanArray, 'boolean', function(bitmap, value, index) {
    if (value) {
      return bitmap.value += Math.pow(2, index);
    }
  });
};

const validArray = function(array, valueType) {
  var invalidValue;
  if (!(array instanceof Array)) {
    return false;
  }
  invalidValue = _(array).find(function(value) {
    return typeof value !== valueType;
  });
  return invalidValue === void 0;
};

const getValue = function(array, type, callback) {
  var bitmap;
  if (!validArray(array, type)) {
    return 0;
  }
  bitmap = {
    value: 0
  };
  _(array).forEach(function(value, index) {
    return callback(bitmap, value, index);
  });
  return bitmap.value;
};

exports.fromIntegerArray = fromIntegerArray;
exports.fromBooleanArrayLE = fromBooleanArrayLE;
exports.fromBooleanArrayBE = fromBooleanArrayBE;
