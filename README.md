# 碳交易平台

这个项目使用 [AntdPro](https://beta-pro.ant.design/) 自己阉割了一些功能
[仓库地址](https://gitee.com/carbon_1/carbon-taro-v2)

## 快速开始

```bash
# 安装依赖
$ npm i
# 运行
$ npm run start
# 打包
$ npm run build
```

## 注意

1. xxx


## 相关资源一览

- [相关功能文档地址](https://docs.qq.com/sheet/DY1lwRnhsak5jS3Vh?tab=BB08J2)
- [接口文档地址](http://xiaoyaoji.cn/project/1qEZhgqS3RB/1qEZlUp4imW)
- [设计稿-移动端](https://lanhuapp.com/web/#/item/project/stage?pid=094059a7-21c1-449c-a68b-175c8798b83d&type=share_mark&teamId=591702ba-f86a-4166-b9a6-113fe7cc1a0b)
- [设计稿-pc 端](https://lanhuapp.com/web/#/item/project/stage?pid=d6290078-29c0-481c-81a5-8fa5b407b11c&type=share_mark&teamId=591702ba-f86a-4166-b9a6-113fe7cc1a0b)

## 约定

1. 命名风格

- 组件名： `PascalCase` 风格。例如：`MainHeader`
- hooks：`camelCase` 风格，并以 `use` 开头。例如： `useGetGlobalConfig`
- 常量： `SCREAMINGSNAKE_CASE` 风格。例如：`DATE_FORMAT`

2. 注释请遵循 [JSDoc](https://jsdoc.app/) | [中文文档](http://shouce.jb51.net/jsdoc/index.html)

## 开发流程

功能开发或修复请切到相关分支，然后提 Pull Request 到 dev 分支。

### 分支名格式

#### 功能开发

feat/版本/功能名（或任务 ID）

```
feat/gzx/xxx
feat/zkd/xxx
feat/yxb/xxx
```

#### 修复 bug

fix/bug 号（或 bug 内容）

```
fix/xxx
```

### 检出分支

你可以执行下面的命令检出一个分支

```
git checkout -B feat/xxx
```

#### H5 git 仓库地址:

```
ssh://www@47.52.21.155/data/git/tanpaifang-front.git
```

<!-- [预览地址：](http://47.52.21.155:8141) -->

#### WEB git 仓库地址:

```
ssh://www@47.52.21.155/data/git/tanpaifang-web.git
```

<!-- 预览地址：http://47.52.21.155:8142 -->

### 其他

1. 请使用 `git cz` 或者 `gcz` 提交代码。本项目遵循 [cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog) 提交规范。示例：

```
# 修复bug fix: bug内容
fix: 修复了一个致命的bug
# feature feat: 任务内容
feat: 增加了一个新功能
```
