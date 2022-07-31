//添加本地储存
export const setStorage = (key: string, value: any, type: string): void => {
  switch (type) {
    case 'local':
      localStorage.setItem(key, value);
      break;
    case 'session':
      sessionStorage.setItem(key, value);
      break;
  }
};

//获取本地储存
export const getStorage = (key: string, type: string): any => {
  switch (type) {
    case 'local':
      return localStorage.getItem(key);
    case 'session':
      return sessionStorage.getItem(key);
  }
};
