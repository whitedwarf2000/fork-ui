export const isArray = array => Array.isArray(array);
export const isObject = object => typeof object === 'object' && object !== null;
export const isUnDefined = val => typeof val === 'undefined';
export const isNumber = number => typeof number === 'number';
export const isNaN = number => Number.isNaN(number);
export const isString = str => typeof str === 'string';

export const omit = (object, paths) => {
  const _paths = paths.reduce((rs, prop) => {
    rs[prop] = true;
    return rs;
  }, {});

  return Object.keys(object).reduce((rs, key) => {
    if (!_paths[key]) {
      rs[key] = object[key];
    }
    return rs;
  }, {});
};

export const pick = (object, paths) => {
  return paths.reduce((rs, prop) => {
    if (object.hasOwnProperty(prop)) {
      rs[prop] = object[prop];
    }
    return rs;
  }, {});
}

export const difference = (arr = [], values = []) => {
  const rs = [];
  for (let i = 0; i < arr.length; i++) {
    if (values.indexOf(arr[i]) === -1) {
      rs.push(arr[i]);
    }
  }

  return rs;
};

export const loop = (count, cb) => {
  const rs = [];
  for (let i = 0; i < count; i++) {
    rs.push(i);
  }

  return rs.map(cb);
};
