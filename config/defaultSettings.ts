import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'dark',
  primaryColor: 'rgba(128, 199, 149, 1)',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '碳指标',
  pwa: false,
  logo: 'https://oss.ctm-ib.com/imetafaq/faq_DCA1658631209.jpeg',
  iconfontUrl: '',
  headerRender: false,
  menu: {
    locale: false,
  },
};

export default Settings;
