import { Tabs } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { history } from 'umi';
import styles from './index.less';
const { TabPane } = Tabs;

const Home: React.FC = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div className={classNames(styles.wrapper)}>
      首页 (点击去)
      <div onClick={() => history.push(`/home/detail?type=${4}`)}>去二级页面测试</div>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Home;
