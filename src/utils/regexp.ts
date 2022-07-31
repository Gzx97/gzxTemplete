/**
 * 手机号
 */
export const MOBILE = /^\d{5,}$/;
/**
 * 邮箱验证
 */
// export const EMAIL = /^[\w-.]+@([\w-]+\.)+[a-zA-Z]+$/
export const EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/**
 * 六位数字验证码
 */
export const SMSCODE = /^[0-9]{0,6}$/;
/**
 * 至少八位包含大小写
 */
export const PASSWORD = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/;
/**
 * 整数
 */
export const INTEGER = /^[-]?\d+$/;
/**
 * 正整数
 */
export const POSITIVE_INTEGER = /^[1-9]\d*$/;
/**
 * 2位小数
 */
export const MONEY_REG = /^\d+(\.)?\d{0,2}?$/;
/**
 * 4位小数
 */
export const UNIT_REG = /^\d+(\.)?\d{0,4}?$/;

/**
 * 正数
 */
export const POSITIVE_NUMBER = /^\d+(\.\d+)?$/;

/**
 * 自然数
 */
export const NATURAL_NUMBER = /^\d+$/;

/**
 * 任意数字
 */
export const DECIMALS_NUMBER = /^[-]?\d+(\.\d+)?$/;

/**
 * 数字加@ 符号
 */
export const TARGET_ID_NUMBER = /^\d+@/;

/**
 * 除了数字的所有
 */
export const EXCEPT_NUMBER = /[^\d]/gi;

/**
 * 中英文
 */
export const CHINESE_AND_ENGLISH = /^[\u4e00-\u9fa5A-Za-z]+$/;

/**
 * 两个大括号包含任意字符
 */
export const BRACKETS_WITH_CHAR = /\{{(.+?)\}}/g;

/**
 * 文件下载的文件名字
 */
export const FILE_NAME = /filename\*=utf-8'zh_cn'(.*)/;

// 手机号
export const PHONE = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;

// 账号
// export const ACCOUNT = /^[a-zA-Z]\w{4,15}$/
export const ACCOUNT = /^[0-9a-zA-Z\u4e00-\u9fa5_]{1,16}$/;

/**
 * 身份证号 2代
 */
export const IDCARD =
  /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/;

/**
 * 中文姓名
 */
export const CHINESENAME = /^(?:[\u4e00-\u9fa5·]{2,16})$/;
