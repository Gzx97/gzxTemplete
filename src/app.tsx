import { PageLoading } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from 'umi';
import { ConfigProvider } from 'antd';
import { history } from 'umi';
// import Footer from './components/Footer';
const loginPath = '/user/login';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({}) => {
  return {
    disableContentMargin: false,
    // footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (location.pathname !== loginPath) {
        /** 需要自己重新写这套逻辑 */
        // history.push(loginPath);
      }
    },
    collapsed: false,
    iconfontUrl: '',
    disableMobile: true,
  };
};

ConfigProvider.config({
  theme: {
    primaryColor: '#80C795',
  },
});
