## 项目描述
  | 项目名 | 项目功能简述 | 代码仓库 | 项目第一负责人 |
  | :------:| :------: | :------: | :------: |
  | arkcontrol | ArkControl 是极数云舟自主研发的统一数据库云管平台，可以作为企业数据 库私有云或者企业数据库自动化运维平台使用，它集成了数据库运维过程的所 需要解决的多种功能，实现使用一个平台解决企业对数据库的所有需求的目标。 | https://git.cloud-ark.com:8443/arkzone/arkcontrol_web | LiuYun |


## 页面



## 目录结构

```
ice-design-pro
├── dist        // 打包资源
├── mock        // 模拟数据
├── public      // 静态资源
├── src
│   ├── components   // 公共组件
│   ├── layouts      // 通用布局
│   ├── locales      // i18n
│   ├── pages        // 页面
│   ├── index.js     // 应用入口
│   ├── menuConfig   // 导航配置
│   ├── routerConfig // 路由配置
│   └── router.jsx   // 路由生成
├── tests            // 测试
├── .gitignore       // git 忽略目录配置
├── .editorconfig    // 代码风格配置
├── .eslintignore    // eslint 忽略目录配置
├── .eslintrc        // eslint 配置
├── package.json     // package.json
└── README.md        // 项目说明
```

## 使用

1.  (推荐) GUI 工具使用: 下载 [iceworks](https://alibaba.github.io/ice/#/iceworks)

2.  Cli 命令使用:

```bash
$ npm start      // 启动预览服务器
$ npm run build  // 构建 dist
```

## 备注

1. superadmin目录顺序：配置中心、资源管理、MySQL管理、产品管理、工单中心、用户中心
2. 普通用户：产品管理、工单中心
3. 管理侧：资源管理、MySQL管理、工单中心、用户中心

## 相关文档

- [ICE Design Pro 使用文档](https://github.com/alibaba/ice/wiki#ice-design-pro-%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3)
- 接口API： https://wiki.cloud-ark.com:8443/pages/viewpage.action?pageId=5668867 

