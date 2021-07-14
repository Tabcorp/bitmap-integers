const validNumber = (value) => {
  if (value <= 0) {
    return false;
  }
  if (typeof value !== 'number') {
    return false;
  }
  return true;
};

const getArray = (value, callback) => {
  if (!validNumber(value)) {
    return [];
  }
  const result = [];
  Math.floor(value).toString(2).split('').reverse()
    .forEach((character, index) => {
      callback(result, character, index);
    });
  return result;
};

const toIntegerArray = (value) => getArray(value, (result, character, index) => {
  if (character === '1') {
    result.push(index + 1);
  }
});

const toBooleanArrayLE = (value) => getArray(value, (result, character) => {
  result.push(character === '1');
});

const toBooleanArrayBE = (value) => toBooleanArrayLE(value).reverse();

exports.toIntegerArray = toIntegerArray;
exports.toBooleanArrayLE = toBooleanArrayLE;
exports.toBooleanArrayBE = toBooleanArrayBE;
