import axios from 'axios';

const service = axios.create({
  baseURL: 'https://www.xxx.com/api', // api 的 base_url
  timeout: 50000, // 请求超时时间
});

service.interceptors.response.use((response) => {
  const res = response.data;
  if (res.status && res.status === -101) {
    // 未登录或登录过期
  }
  return response.data;
});

export default service;
