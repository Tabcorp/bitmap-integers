/* eslint-disable valid-typeof */
/* eslint-disable no-param-reassign */
const _ = require('lodash');

const validArray = (array, valueType) => {
  if (!(array instanceof Array)) {
    return false;
  }
  return array.findIndex((value) => typeof value !== valueType) < 0;
};

const getValue = (array, type, callback) => {
  if (!validArray(array, type)) {
    return 0;
  }
  const bitmap = {
    value: 1,
  };
  bitmap.value = 0;
  array.forEach((value, index) => {
    callback(bitmap, value, index);
  });
  return bitmap.value;
};

const fromIntegerArray = (integerArray) => getValue(_.uniq(integerArray), 'number', (bitmap, value) => {
  if (value > 0) {
    bitmap.value += (2 ** (Math.floor(value) - 1));
  }
});

const fromBooleanArrayLE = (booleanArray) => getValue(booleanArray, 'boolean', (bitmap, value, index) => {
  if (value) {
    bitmap.value += (2 ** index);
  }
});

const fromBooleanArrayBE = (booleanArray) => {
  if (booleanArray instanceof Array) {
    booleanArray.reverse();
  }
  return getValue(booleanArray, 'boolean', (bitmap, value, index) => {
    if (value) {
      bitmap.value += (2 ** index);
    }
  });
};

exports.fromIntegerArray = fromIntegerArray;
exports.fromBooleanArrayLE = fromBooleanArrayLE;
exports.fromBooleanArrayBE = fromBooleanArrayBE;
