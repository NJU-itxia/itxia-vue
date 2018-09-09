# itxia-vue
## 目录结构
<table>
<tbody><tr>
<td>目录/文件</td><td>说明</td>
</tr>
<tr>
<td>bulid</td><td>项目构建的一些 js 文件</td>
</tr>
<tr>
<td>config</td><td>配置文件项，index.js 比较重要，打包上线需要修改配置</td>
</tr>
<tr>
<td>dist</td><td>项目打包后的文件</td>
</tr>
<tr>
<td>node_modules</td>
<td>
npm安装包位置
</td>
</tr>
<tr>
<td>src</td><td>
项目的开发目录
<ul>
<li>assets:图片、字体等资源 </li>
<li>components:公共组件部分</li>
<li>config:配置文件</li>
<li>http:ajax/axios等请求数据封装</li>
<li>mock:mock服务器</li>
<li>pages:页面部分</li>
<li>router:路由</li>
<li>store:vuex状态管理</li>
<li>utils:工具类</li>
<li>App.vue:项目入口文件</li>
<li>main.js:项目的核心文件</li>
</ul>
</td>
</tr>
<tr>
<td>index.html</td><td>html文件</td>
</tr>
<tr>
<td>test</td><td>测试项目(主要是功能测试)</td>
</tr>
<tr>
<td>package.json</td><td>项目配置项文件</td>
</tr>
</tbody></table>

## 封装的模块
- http异步请求，我们使用axios库，我们需要将vue的$http配置为axios，和做一个api接口
- auth权限控制，在路由加载的时候，不同的人登录会动态加载不同的路由方法，axios请求时候要做权限认定，在前端控制请求
- store是状态控制，这部分和动态路由相互配合，具体可以看 [vuex]: https://segmentfault.com/a/1190000009404727
- mock是用作mock-server，这一部分直接全局导入main.js当中就可以生效，需要使得mock返回的东西更加多样
- config和util/value-consts.js是常量，区别在于config是可变的配置常量，value-consts.js一般就不变了
- pages是.vue文件，是各个路由页面的存放地点，保证路由和页面名称的一致性
- assets是静态资源，components是组件文件夹

## 任务和封装分工
主要是各个模块的封装，其实都没有封装彻底

分工看链接 [mission]: 