/* eslint-disable no-param-reassign */
import dayjs from 'dayjs';
import { isNilEmpty } from './isNilEmpty';

export function formatTime(timestamp: number) {
  if (!timestamp) return '';
  return dayjs(timestamp * 1000).format('YYYY.MM.DD HH:mm');
}
// 保留2位小数
export function formatNumber(price: string | number | undefined, fixed: number = 2) {
  if (isNilEmpty(price)) return '--';
  return parseFloat(downFixed(price, fixed));
}

function downFixed(num: number | string, fix: number) {
  // num为原数字，fix是保留的小数位数
  let result = '0';
  if (Number(num) && fix > 0) {
    // 简单的做个判断
    fix = +fix || 2;
    num = num + '';

    if (/e/.test(num)) {
      // 如果是包含e字符的数字直接返回
      result = '0';
    } else if (!/\./.test(num)) {
      // 如果没有小数点
      result = num + `.${Array(fix + 1).join('0')}`;
    } else {
      // 如果有小数点
      num = num + `${Array(fix + 1).join('0')}`;
      const reg = new RegExp(`-?\\d*.\\d{0,${fix}}`);
      result = reg.exec(num)![0];
    }
  }
  return result;
}
