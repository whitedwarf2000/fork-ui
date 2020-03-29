export const isArray = array => Array.isArray(array);
export const isObject = object => typeof object === 'object' && object !== null;
export const isUnDefined = val => typeof val === 'undefined';
export const isNumber = number => typeof number === 'number';
export const isNaN = number => Number.isNaN(number);
