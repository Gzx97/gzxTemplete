import isEmpty from 'lodash/isEmpty';
import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';
import isNil from 'lodash/isNil';
import isString from 'lodash/isString';
/**
 * 如果是 null undefined {} [] "" 则返回 true  其他都是 false
 * @param value
 * @returns {boolean}
 */
export const isNilEmpty = (
  value: any,
): value is null | undefined | '' | Record<string, never> | [] => {
  if (isString(value)) {
    return value.length === 0;
  }
  if (isObject(value)) {
    return isEmpty(Object.keys(value));
  }
  if (isArray(value)) {
    return isEmpty(value.length);
  }
  return isNil(value);
};
