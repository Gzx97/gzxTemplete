---
title: 业务组件
sidemenu: false
---

> 此功能由[dumi](https://d.umijs.org/zh-CN/guide/advanced#umi-%E9%A1%B9%E7%9B%AE%E9%9B%86%E6%88%90%E6%A8%A1%E5%BC%8F)提供，dumi 是一个 📖 为组件开发场景而生的文档工具，用过的都说好。

# 业务组件

这里列举了 Pro 中所有用到的组件，这些组件不适合作为组件库，但是在业务中却真实需要。所以我们准备了这个文档，来指导大家是否需要使用这个组件。

## Footer 页脚组件

这个组件自带了一些 Pro 的配置，你一般都需要改掉它的信息。

```tsx
/**
 * background: '#f0f2f5'
 */
import Footer from '@/components/Footer';
import React from 'react';

export default () => <Footer />;
```

## HeaderDropdown 头部下拉列表

HeaderDropdown 是 antd Dropdown 的封装，但是增加了移动端的特殊处理，用法也是相同的。

```tsx
/**
 * background: '#f0f2f5'
 */
import HeaderDropdown from '@/components/HeaderDropdown';
import { Button, Menu } from 'antd';
import React from 'react';

export default () => {
  const menuHeaderDropdown = (
    <Menu selectedKeys={[]}>
      <Menu.Item key="center">个人中心</Menu.Item>
      <Menu.Item key="settings">个人设置</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">退出登录</Menu.Item>
    </Menu>
  );
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <Button>hover 展示菜单</Button>
    </HeaderDropdown>
  );
};
```

### API

| 参数            | 说明                               | 类型                         | 默认值 |
| --------------- | ---------------------------------- | ---------------------------- | ------ |
| value           | 输入框的值                         | `string`                     | -      |
| onChange        | 值修改后触发                       | `(value?: string) => void`   | -      |
| onSearch        | 查询后触发                         | `(value?: string) => void`   | -      |
| options         | 选项菜单的的列表                   | `{label,value}[]`            | -      |
| defaultVisible  | 输入框默认是否显示，只有第一次生效 | `boolean`                    | -      |
| visible         | 输入框是否显示                     | `boolean`                    | -      |
| onVisibleChange | 输入框显示隐藏的回调函数           | `(visible: boolean) => void` | -      |

### NoticeIcon.Tab API

| 参数         | 说明               | 类型                                 | 默认值 |
| ------------ | ------------------ | ------------------------------------ | ------ |
| count        | 有多少未读通知     | `number`                             | -      |
| title        | 通知 Tab 的标题    | `ReactNode`                          | -      |
| showClear    | 展示清除按钮       | `boolean`                            | `true` |
| showViewMore | 展示加载更         | `boolean`                            | `true` |
| tabKey       | Tab 的唯一 key     | `string`                             | -      |
| onClick      | 子项的单击事件     | `(item: API.NoticeIconData) => void` | -      |
| onClear      | 清楚按钮的点击     | `()=>void`                           | -      |
| emptyText    | 为空的时候测试     | `()=>void`                           | -      |
| viewMoreText | 查看更多的按钮文字 | `string`                             | -      |
| onViewMore   | 查看更多的按钮点击 | `( e: MouseEvent) => void`           | -      |
| list         | 通知信息的列表     | `API.NoticeIconData`                 | -      |

### NoticeIconData

```tsx | pure
export interface NoticeIconData {
  id: string;
  key: string;
  avatar: string;
  title: string;
  datetime: string;
  type: string;
  read?: boolean;
  description: string;
  clickClose?: boolean;
  extra: any;
  status: string;
}
```