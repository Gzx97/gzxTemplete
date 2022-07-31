import request from '@/utils/request';
import { setOpenId, getOpenId } from '@/utils/helper';

const _PHONE_PREFIX_ = '86';

interface IPhoneLogin {
  /** 手机 */
  phone: string;
  /** 手机验证码 */
  phonecode: string;
}
/**
 * 用户登录
 * @param data
 * @returns
 */
export async function userPhoneLogin(data: IPhoneLogin) {
  const res = await request.post('/user/phonereg', {
    prefix: _PHONE_PREFIX_,
    ...data,
  });
  if (res && res.status === 1 && res.data) {
    setOpenId(res.data.open_id);
  }
  return res;
}

interface IPhoneCode {
  /** 手机号 */
  phone: string;
  /** 类型 */
  type: 'reg' | 'findpassword';
}
/**
 * 获取手机验证码
 * @param data
 * @returns
 */
export function getPhoneCode(data: IPhoneCode) {
  return request.post('/user/sendsmscode', { prefix: _PHONE_PREFIX_, ...data });
}

interface ICompanyData {
  // open_id: string
  /** 企业名称 */
  name: string;
  /** 企业类型: 中资、外资、中外合资、中外合作 */
  type: string;
  /** 所属行业 */
  profession: string;
  /** 注册地址及邮编 */
  address: string;
  /** 组织机构代码 */
  organization_code: string;
  /** 法人代表姓名 */
  legal_person: string;
  /** 法人代表身份证 */
  legal_id: string;
  /** 法人代表电话 */
  legal_tel: string;
  /** 法人代表邮箱 */
  legal_mail: string;
  /** 账户代表姓名 */
  account_person: string;
  /** 账户代表身份证 */
  account_id: string;
  /** 账户代表电话 */
  account_tel: string;
  /** 账户代表邮箱 */
  account_mail: string;
  /** 营业执照照片 */
  img_business: string;
  /** 银行开户证明 */
  img_bank: string;
  /** 法人代表身份证照 */
  img_legal_id: string;
  /** 账户代表身份证照 */
  img_account_id: string;
}
/**
 * 开户信息-企业
 * @param data
 * @returns
 */
export function accountCompanyInfo(data: ICompanyData) {
  const open_id = getOpenId();
  return request.post('/user/submitenterprise', { open_id, ...data });
}

interface IPersonalData {
  // open_id: string
  /** 企业名称 */
  name: string;
  /** 身份证号 */
  card_id: string;
  /** 电话 */
  tel: string;
  /** 邮箱 */
  mail: string;
  /** 身份证照片 */
  img_card: string;
  /** 银行开户证明 */
  img_bank: string;
}
/**
 * 开户信息-个人
 * @param data
 * @returns
 */
export function accountPersonalInfo(data: IPersonalData) {
  const open_id = getOpenId();
  return request.post('/user/submitpersonal', { open_id, ...data });
}

interface IBindEmail {
  /** 账户名称 */
  uname: string;
  /** 邮箱 */
  email: string;
  /** 邮箱验证码 */
  mailcode: string;
}
/**
 * 绑定邮箱
 * @param data
 * @returns
 */
export function bindEmail(data: IBindEmail) {
  const open_id = getOpenId();
  return request.post('/user/bindemail', { open_id, ...data });
}
