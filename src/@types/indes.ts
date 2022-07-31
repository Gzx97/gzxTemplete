export type ID = string | number;
export type apiResType<T> = {
  status: number;
  msg: string;
  data: T;
};
