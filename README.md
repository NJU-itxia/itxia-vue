# itxia-vue

> A Vue.js project for itxia-web

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## docs
https://github.com/NJU-itxia/itxia-vue/tree/master/docs

## 规范
- 模块化，组件化开发(面向接口编程，先做接口，再开发模块内部)
- 任何人员可修改，增加内容到everyone分支族当中，everyone分支族会随主分支版本推进，增加分支个数
- 修改权限分级，分为三级
	- 项目负责人级别，权限: 增改接口及其他
	- 项目参与人员，权限: 在模块内部修改，和增加独立模块(不影响全局)
	- 普通人员，权限: 在模块内部修改，不得增加独立模块
