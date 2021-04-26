## 脚手架开发流程详解

* 创建`npm`项目
* 创建脚手架入口文件, 最上方添加:
```js
#!/usr/bin/env node
```
* 配置`package.json`, 添加`bin`属性
* 编写脚手架代码
* 将脚手架发布到npm(如果要进行本地调试, 直接使用`npm link`创建一个软连接即可)


链接本地脚手架
```shell
cd your-cli-dir
npm link
```

链接本地库文件到本地脚手架:
```shell
cd your-lib-dir
npm link
cd your-cli-dir
npm link your-lib
```



