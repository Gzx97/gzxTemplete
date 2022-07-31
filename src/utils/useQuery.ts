import { useLocation } from 'umi';
import type { Location } from 'umi';
import { parse } from 'query-string';

// 使用路由传值从useLoaction中获取,ts会检测到其中没有query这个参数，导致报错,这是umi本身的bug。再此重写一个方法,接收路由参数的时候直接使用该方法获取就可以了。
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useQuery = <T extends Record<string, any>>() => {
  const location = useLocation() as Location & { query: T };
  return location.query;
};

export const getQuery = <T extends Record<string, any>>(search = location.search) => {
  return parse(search) as T;
};
